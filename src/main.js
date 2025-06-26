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

  // GSAPタイムライン  
  // const hamburgerTl = gsap.timeline({ paused: true });
  // if (hamburger) {
  //   hamburger.style.display = 'block'; // ハンバーガーボタン強制
  //   hamburgerTl.to(hamburger, { borderRadius: 0, duration: 0.3 });
  // }

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
} else {
  console.warn('Hamburger menu elements not found, skipping menu functionality');
}




//contactフォーム上部の文章を消す
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.snow-monkey-form');

  if (!form) {
    console.log('フォームが見つかりません');
    return;
  }

  // 初期チェック
  if (form.getAttribute('data-screen') === 'complete') {
    document.querySelector('.is-style-contact-text').classList.add('none');
  }

  // 監視オブジェクト作成
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'data-screen'
      ) {
        const currentScreen = form.getAttribute('data-screen');
        console.log('data-screen変更検知:', currentScreen);  // ここを追加
  
        if (currentScreen === 'complete') {
          document.querySelector('.is-style-contact-text').classList.add('none');
          console.log('complete状態を検知して非表示に');
        } else {
          document.querySelector('.is-style-contact-text').classList.remove('none');
          console.log('completeじゃなくなったので表示に戻す');
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
function revealHiddenContent(container) {
  if (!container) return;

  container.querySelectorAll('.p-slide__in:not(.is-animated)').forEach(el => {
    gsap.set(el, {
      autoAlpha: 1,
      y: 0,
    });
    el.classList.add('is-animated');
  });
}

// スムーススクロール (クリック時も含む)
gsap.utils.toArray('a[href^="#"], a[href*="/#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    const hash = href.includes('#') ? '#' + href.split('#')[1] : null;
    const target = hash ? document.querySelector(hash) : null;
    const smoother = getSmoother();

    if (target && smoother) {
      e.preventDefault();
      smoother.scrollTo(target, {
        duration: 1.2,
        ease: 'power4.out'
      });

      revealHiddenContent(target); // ← ふわっと前に表示

      // ハンバーガーが開いていたら閉じる
      if (menuOpen) {
        nav.classList.remove('open');
        fix.classList.remove('fix');
        closeButton.classList.remove('is-appear');
        tl.timeScale(1).reverse();
        smoother.paused(false);
        menuOpen = false;
      }
    }
  });
});

// リロード後にふわっと移動
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  const smoother = getSmoother();

  if (hash && smoother) {
    window.scrollTo(0, 0);        // ブラウザのスクロールを初期化
    smoother.scrollTop(0);        // ScrollSmootherの位置もリセット

    const scrollToHash = () => {
      const target = document.querySelector(hash);
      if (target) {
        smoother.scrollTo(target, {
          duration: 1.5,
          ease: 'power4.out'
        });
        revealHiddenContent(target); // ← 読み込み時にも表示させる

      } else if (scrollToHash.tryCount < 10) {
        scrollToHash.tryCount++;
        setTimeout(scrollToHash, 200);
      }
    };
    scrollToHash.tryCount = 0;
    setTimeout(scrollToHash, 300);
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
    function onScroll() {
      document.querySelectorAll(".p-slide__in").forEach(function (element) {
        const sectionTop = element.getBoundingClientRect().top + window.scrollY;
        const windowBottom = window.scrollY + window.innerHeight;
  
        if (element.classList.contains("is-animated")) return; // すでにアニメーション済みなら挙動をスキップ
  
        if (windowBottom > sectionTop + 100) {

  console.log("アニメーション実行", element);
          gsap.to(element,{
              y: 0,
              delay: 0.5,
              duration: 2,
              autoAlpha: 1,
              ease: "power4.out"
            }
          );
          element.classList.add("is-animated");
        }
      });
    }
  
    onScroll();
    window.addEventListener("scroll", onScroll);
  });
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded 発火！');
    

    // 要素の取得
    const modalElement = document.querySelector('.p-modal__portfolio');
    const closedButton = document.querySelector('.p-modal__close');
    let swiperInstance = null;
  
    console.log('modalElement:', modalElement);
    console.log('closedButton:', closedButton);
  
    // モーダルデータ
    const portfolioDataList = [
      // hamburger (data-index="0")
      [
        {
          img: 'http://portfolio.local/wp-content/uploads/2025/06/hamburger.webp',
          title: 'Hamburger(架空)',
        },
        {
          img: 'http://portfolio.local/wp-content/uploads/2025/06/hamburger-description.webp',
          title: 'Hamburger(架空)の詳細',
        },
      ],
      // portfolio (data-index="1")
      [
        {
          img: 'http://portfolio.local/wp-content/uploads/2025/06/portfolio.webp',
          title: 'Portfolio',
        },
        {
          img: 'http://portfolio.local/wp-content/uploads/2025/06/portfolio-description.webp',
          title: 'Portfolioの詳細',
        },
      ],
    ];
  
    // =================================
    // モーダルを開く処理
    // =================================
    function openModal(startIndex) {
      console.log('モーダルを開く処理開始:', startIndex);
      
      // データが存在するかチェック
      if (!portfolioDataList[startIndex]) {
        console.error('指定されたインデックスのデータが存在しません:', startIndex);
        return;
      }
  
      // ScrollSmootherを停止
      const smoother = ScrollSmoother.get();
      if (smoother) smoother.paused(true);
  
      // スライドコンテンツを作成
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
  
      // 既存のSwiperインスタンスを破棄
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
  
      // モーダルを表示
      modalElement.classList.remove('is-close'); // is-closeクラスを削除
      modalElement.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // スクロール無効化
  
      // Swiperを初期化（少し遅延させる）
      setTimeout(() => {
        swiperInstance = new Swiper(".swiper", {
          loop: false,
          initialSlide: 0,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 1,
          autoHeight: true,
          preventInteractionOnTransition: true,
          on: {
            init: function() {
              console.log('Swiper 初期化成功！');
              this.update();
              this.slideTo(0, 0);
            },
          },
        });
      }, 50); // 50ms後に初期化
    }
  
    // =================================
    // モーダルを閉じる処理
    // =================================
    function closeModal() {
      console.log('モーダルを閉じる処理開始');
      
      // モーダルを非表示
      modalElement.classList.remove('is-open');
      document.body.style.overflow = ''; // スクロール有効化
  
      // アニメーション完了後にクリーンアップ
      setTimeout(() => {
        // Swiperインスタンスを破棄
        if (swiperInstance) {
          swiperInstance.destroy(true, true);
          swiperInstance = null;
        }
        
        // スライドコンテンツをクリア
        const wrapper = document.querySelector('.swiper-wrapper');
        if (wrapper) {
          wrapper.innerHTML = '';
        }
        
        // ScrollSmootherを再開
        const smoother = ScrollSmoother.get();
        if (smoother) smoother.paused(false);
        
      }, 400); // CSSのtransition時間と合わせる
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
