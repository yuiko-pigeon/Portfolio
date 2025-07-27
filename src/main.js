import '../scss/style.scss';


gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin)

//gsapでハンバーガーメニューをふわっと出す  

const tl = gsap.timeline({ paused: true });

tl.fromTo(".p-menu", { 
    autoAlpha: 0,
    right: "-100%",
    },//p-menuの挙動に合わせる
    {
    autoAlpha: 1,
    duration: 1.5,
    right: "0%",
    });


//hamburgerメニューtoggle

const hamburger = document.querySelector('#js-hamburger');
const hamburgerClose = document.querySelector('#js-hamburger-close');
const closeButton = document.querySelector('#js-close-button');
const nav = document.querySelector('#js-nav');
const fix = document.querySelector('#js-wrapper');
const menuClose =document.querySelectorAll('.js-menu-close');
const scrollFix =document.querySelector('#js-content');

console.log('scrollFix:', scrollFix); 

let menuOpen = false;

//ScrollSmootherの初期化: 内包を指定
const wrapper = document.querySelector('#smooth-wrapper');
const content = document.querySelector('#smooth-content');
if (wrapper && content) {
  try {
    smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.5,
    effects: true
  });
  console.log('ScrollSmoother initialized',smoother);
} catch (error) {
  console.error('ScrollSmoother initialization failed:', error);
}
}else{
  console.warn('ScrollSmoother elements(#js-wrapper or .js-fix.content-wrapper) not found, skipping initialization');
}


  // ハンバーガーメニュー
if (hamburger && hamburgerClose && nav && closeButton) {
tl.eventCallback("onComplete", () => {
  hamburger.style.borderRadius = '0';
});

tl.eventCallback("onReverseComplete", () => {
  hamburger.style.borderRadius = '50%';
});

  
hamburger.addEventListener('click',function(){
  if(!menuOpen){
    nav.classList.add('open');
    fix.classList.add('fix');
    //scrollFix.classList.add('fix');
    hamburgerClose.style.borderRadius = '0'; 
    closeButton.classList.add('is-appear');
    tl.play().timeScale(1);
    //hamburgerTl.play().timeScale(1);
      if (smoother) {
        smoother.paused(true);
      } else {
        console.warn('ScrollSmoother not initialized, skipping pause');
      }
    menuOpen = true;
  }
});

hamburgerClose.addEventListener('click',function(){
  if(menuOpen){
    nav.classList.remove('open');
    fix.classList.remove('fix');
    //scrollFix.classList.remove('fix');
    hamburger.style.borderRadius = '50%'; // ← 明示的に指定
    closeButton.classList.remove('is-appear');
    tl.timeScale(1).reverse();
      if (smoother) {
        smoother.paused(false);
      }
    menuOpen = false;
  }
});

menuClose.forEach(function(close){
  close.addEventListener('click',function(){
    if(menuOpen){
      nav.classList.remove('open');
      fix.classList.remove('fix');
      //scrollFix.classList.remove('fix');
      hamburger.style.borderRadius = '50%'; // ← 明示的に指定
      closeButton.classList.remove('is-appear');
      tl.timeScale(1).reverse();
      //hamburgerTl.timeScale(1).reverse();
      if (smoother) {
        smoother.paused(false);
      }
      menuOpen = false;
    }
  });
});

window.addEventListener('resize', function() {
  if(menuOpen){
    // 1200px以上(PCサイズ）になった時だけ閉じる
    if(window.innerWidth >= 1200) {
      nav.classList.remove('open');
      fix.classList.remove('fix');
      hamburger.style.borderRadius = '50%';
      closeButton.classList.remove('is-appear');
      tl.timeScale(1).reverse();
      if (smoother) {
        smoother.paused(false);
      }
      menuOpen = false;
    }
  }
});

} else {
  console.warn('Hamburger menu elements not found, skipping menu functionality');
}




// contactフォーム上部の文章を消す
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.snow-monkey-form');

  if (!form) {
    console.log('フォームが見つかりません');
    return;
  }

  // 初期チェック
  const initialScreen = form.getAttribute('data-screen');
  if (initialScreen === 'complete' || initialScreen === 'systemerror') {
    document.querySelector('.is-style-contact-text')?.classList.add('none');
  }

  // 監視オブジェクト作成
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'data-screen'
      ) {
        const currentScreen = form.getAttribute('data-screen');
        console.log('data-screen変更検知:', currentScreen);

        const targetText = document.querySelector('.is-style-contact-text');
        if (!targetText) return;

        if (currentScreen === 'complete' || currentScreen === 'systemerror') {
          targetText.classList.add('none');
          console.log(`${currentScreen} 状態を検知して非表示に`);
        } else {
          targetText.classList.remove('none');
          console.log(`${currentScreen} 状態なので表示に戻す`);
        }
      }
    });
  });

  // 監視スタート
  observer.observe(form, { attributes: true });
});


// ブラウザの自動スクロールを止める
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// ScrollSmoother取得用関数
const getSmoother = () => ScrollSmoother && ScrollSmoother.get();

// スライド要素を強制表示する関数
// 強制表示関数も改善
function revealHiddenContent(container) {
  if (!container) return;

  const elements = container.querySelectorAll('.p-slide__in:not(.is-animated)');
  elements.forEach((el, index) => {
    setTimeout(() => {
      gsap.set(el, {
        autoAlpha: 1,
        y: 0,
      });
      el.classList.add('is-animated');
    }, index * 50); // 少しずつ遅延させて自然に
  });
}

let isMenuClosing = false; // スクロール禁止フラグ

gsap.utils.toArray('a[href^="#"], a[href*="/#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    const hash = href.includes('#') ? '#' + href.split('#')[1] : null;
    const target = hash ? document.querySelector(hash) : null;

    if (!target) return;

    e.preventDefault();

    // すでにメニュー閉じ処理中なら何もしない
    if (isMenuClosing) return;

    const smoother = getSmoother();

    const performScroll = () => {
      const isSp = isMobile();
    
      if (isSp) {
        // スマホだけ非表示にする
        target.style.visibility = 'hidden';
      }
    
      const scrollDone = () => {
        if (isSp) {
          target.style.visibility = '';
        }
        revealHiddenContent(target);
      };
    
      if (smoother && !isSp) {
        // PC：ScrollSmoother
        smoother.scrollTo(target, {
          duration: 1.5,
          ease: 'power4.out',
          onComplete: scrollDone,
        });
      } else {
        // スマホ or ScrollSmootherなし
        setTimeout(() => {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          setTimeout(scrollDone, 700); // ← ここで調整
        }, 100);
      }
    };

    if (menuOpen) {
      isMenuClosing = true;

      nav.classList.remove('open');
      fix.classList.remove('fix');
      closeButton.classList.remove('is-appear');
      if (smoother) smoother.paused(false);
      menuOpen = false;

      tl.eventCallback("onReverseComplete", () => {
        isMenuClosing = false;
        performScroll();
        tl.eventCallback("onReverseComplete", null);
      });

      tl.timeScale(1).reverse();
    } else {
      performScroll();
    }
  });
});


// リロード後のハッシュ移動
window.addEventListener('load', () => {
  const hash = window.location.hash;
  const smoother = getSmoother();

  if (hash) {
    const scrollToHash = () => {
      const target = document.querySelector(hash);
      if (target) {
        if (smoother && !isMobile()) {
          smoother.scrollTo(target, {
            duration: 1.5,
            ease: 'power4.out',
          });
        } else {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        revealHiddenContent(target);
      } else if (scrollToHash.tryCount < 10) {
        scrollToHash.tryCount++;
        setTimeout(scrollToHash, 200);
      }
    };
    scrollToHash.tryCount = 0;
    setTimeout(scrollToHash, 300);
  }
});


// モバイル判定関数（簡易版）
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', function () {
  const isFrontPage = location.pathname === '/' || location.pathname === '/index.php';
  const topLinks = document.querySelectorAll('a[href$="#top"]');

  topLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (isFrontPage) {
        e.preventDefault();
        const topEl = document.getElementById('top');
        if (topEl) {
          smoother.scrollTo(topEl, true); // true: スムーススクロール
        }
      }
    });
  });

  // 遷移直後に #top が指定されている場合、強制的にScrollSmootherでスクロール
  if (location.hash === '#top' && isFrontPage) {
    setTimeout(() => {
      const topEl = document.getElementById('top');
      if (topEl) {
        smoother.scrollTo(topEl, false); // 初期スクロールはアニメなしでも可
      }
    }, 100); // DOMとScrollSmootherの初期化完了を待つ
  }
});


//gsap mainvisual
gsap.to(".p-hero__background", { 
    backgroundColor: "rgba(188, 186, 186, 0.63)",
    duration: 3, 
    delay: 1,
     });

console.log("GSAP running", document.querySelector("#js-title-hero"));
gsap.fromTo("#js-title-hero",{
  y : 100,
  autoAlpha: 0,
}, {
    y :0,
    duration: 5,
    //delay: 5,
    ease : "power4.out",
    autoAlpha: 1,
    });
  
//スクロールで要素をふわっと
document.addEventListener("DOMContentLoaded", function () {
  let isChecking = false;
  
  function onScroll() {
    if (isChecking) return;
    isChecking = true;
    
    requestAnimationFrame(() => {
      document.querySelectorAll(".p-slide__in").forEach(function (element) {
        if (element.classList.contains("is-animated")) return;

        const rect = element.getBoundingClientRect();
        // より早めに検知：要素が画面下部に近づいたらアニメーション
        if (rect.top < window.innerHeight + 100) {
          console.log("アニメーション実行", element);
          gsap.to(element,{
              y: 0,
              delay: 0.2,
              duration: 1.5,
              autoAlpha: 1,
              ease: "power4.out"
            }
          );
          element.classList.add("is-animated");
        }
      });
      isChecking = false;
    });
  }

  // 初回チェック
  setTimeout(onScroll, 500);
  
  // ScrollSmootherのスクロールイベントも取得
  const smoother = ScrollSmoother.get();
  if (smoother) {
    // ScrollSmootherのコンテナに直接イベントを追加
    const smoothContent = document.querySelector('#smooth-content');
    if (smoothContent) {
      smoothContent.addEventListener("scroll", onScroll, { passive: true });
    }
    
    // ScrollTriggerでも検知
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: onScroll,
      onRefresh: onScroll
    });
  }
  
  // 通常のスクロールイベント（保険）
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("scroll", onScroll, { passive: true });
  
  // モバイル対応：各種タッチイベント
  window.addEventListener("touchend", onScroll, { passive: true });
  window.addEventListener("touchmove", onScroll, { passive: true });
  window.addEventListener("touchstart", () => setTimeout(onScroll, 50), { passive: true });
  
  // 定期チェック（最後の砦）
  setInterval(onScroll, 300);
});
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded 発火！');
    

    // 要素の取得
    const modalElement = document.querySelector('.p-modal__portfolio');
    const closedButton = document.querySelector('.p-modal__close');
    let swiperInstance = null;
    let savedScrollPosition = 0; 
  
    console.log('modalElement:', modalElement);
    console.log('closedButton:', closedButton);
  
    // モーダルデータ
    const portfolioDataList = [
      // hamburger (data-index="0")
      [
        {
          img: 'https://andeight.net/wp-content/uploads/2025/06/hamburger.webp',
          title: 'Hamburger(架空)',
        },
        {
          img: 'https://andeight.net/wp-content/uploads/2025/06/hamburger-description.webp',
          title: 'Hamburger(架空)の詳細',
        },
      ],
      // portfolio (data-index="1")
      [
        {
          img: 'https://andeight.net/wp-content/uploads/2025/06/portfolio.webp',
          title: 'Portfolio',
        },
        {
          img: 'https://andeight.net/wp-content/uploads/2025/07/portfolio-description.webp',
          title: 'Portfolioの詳細',
        },
      ],
    ];
  
// ヘッダーの高さを取得する関数
function getHeaderHeight() {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const isPC = window.innerWidth >= 1024; // @include g.pc に合わせる
  const headerHeightRem = isPC ? 13 : 5; // PC: 13rem, SP: 5rem
  return headerHeightRem * rootFontSize;
}

// モーダルを開く処理
function openModal(startIndex) {
  if (!portfolioDataList[startIndex]) {
    console.error('データが存在しません:', startIndex);
    return;
  }

  // ヘッダーの高さを取得
  const headerHeight = getHeaderHeight();

  // スクロール位置を保存
  const smoother = ScrollSmoother.get();
  if (smoother) {
    savedScrollPosition = smoother.scrollTop() + headerHeight;
    smoother.paused(true);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollPosition - headerHeight}px`;
    document.body.style.width = '100%';
  } else {
    savedScrollPosition = window.scrollY + headerHeight;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollPosition - headerHeight}px`;
    document.body.style.width = '100%';
  }

  const wrapper = document.querySelector('.swiper-wrapper');
  if (!wrapper) {
    console.error('swiper-wrapper が見つかりません');
    return;
  }

  wrapper.innerHTML = ''; // 前回分をクリア
  const portfolioData = portfolioDataList[startIndex];
  portfolioData.forEach(data => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `
      <img src="${data.img}" alt="${data.title}" style="width: 100%; height: auto;">
      <h3 style="text-align: center; margin-top: 10px;">${data.title}</h3>
    `;
    wrapper.appendChild(slide);
  });

  // Swiperインスタンスを破棄
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }

  // モーダルを表示
  modalElement.classList.remove('is-close');
  modalElement.classList.add('is-open');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';

  // Swiperを初期化
  setTimeout(() => {
    swiperInstance = new Swiper(".swiper", {
      loop: false,
      initialSlide: 0,
      mousewheel: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      slidesPerView: 1,
      autoHeight: true,
      preventInteractionOnTransition: true,
      on: {
        init: function () {
          this.update();
          this.slideTo(0, 0);
        },
      },
    });
  }, 50);
}

// モーダルを閉じる処理
function closeModal() {
  // スクロールを一時無効化
  document.body.style.overflow = 'hidden';

  // ヘッダーの高さを取得
  const headerHeight = getHeaderHeight();

  // モーダルを非表示
  modalElement.classList.remove('is-open');
  modalElement.classList.add('is-close');
  document.body.classList.remove('modal-open');

  // トランジション完了を検知
  const handleTransitionEnd = () => {
    // Swiperインスタンスを破棄
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    // スライドコンテンツをクリア
    const wrapper = document.querySelector('.swiper-wrapper');
    if (wrapper) wrapper.innerHTML = '';

    // bodyの固定を解除
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    // スクロール位置を復元
    const smoother = ScrollSmoother.get();
    const targetPosition = savedScrollPosition - headerHeight;
    if (smoother) {
      smoother.paused(false);
      smoother.scrollTo(targetPosition, false);
    } else {
      window.scrollTo({ top: targetPosition, behavior: 'instant' });
    }

    // スクロールを有効化
    document.body.style.overflow = '';

    // is-closeクラスを削除
    modalElement.classList.remove('is-close');

    // イベントリスナーを削除
    modalElement.removeEventListener('transitionend', handleTransitionEnd);
  };

  // トランジションイベントを登録
  modalElement.addEventListener('transitionend', handleTransitionEnd, { once: true });

  // フォールバック（閉じるアニメーション用に200ms）
  setTimeout(() => {
    if (modalElement.classList.contains('is-close')) {
      handleTransitionEnd();
    }
  }, 200);
}
    // =================================
    // イベントリスナーの設定
    // =================================
    
    // モーダルを開くトリガー
    document.querySelectorAll('.is-style-works-image img').forEach((item) => {
      console.log('クリックイベント登録:', item);
      
      item.addEventListener('click', (e) => {
        e.preventDefault(); // デフォルトの動作を防ぐ
        
        const index = parseInt(item.getAttribute('data-index'), 10);
        console.log('クリックされました。インデックス:', index);
        
        if (isNaN(index)) {
          console.error('data-index が正しく設定されていません:', item);
          return;
        }
        
        openModal(index);
      });
    });
  
    // 閉じるボタンのイベント
    if (closedButton) {
      closedButton.addEventListener('click', closeModal);
    } else {
      console.error('閉じるボタンが見つかりません');
    }
  
    // 背景クリックで閉じる
    if (modalElement) {
      modalElement.addEventListener('click', (e) => {
        // モーダルの背景部分をクリックした場合のみ閉じる
        if (e.target === modalElement) {
          closeModal();
        }
      });
    }
  
    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalElement.classList.contains('is-open')) {
        closeModal();
      }
    });
  
    console.log('モーダル機能の初期化完了');
  });
