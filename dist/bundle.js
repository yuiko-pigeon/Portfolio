gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
const tl = gsap.timeline({ paused: true });
tl.fromTo(
  ".p-menu",
  {
    autoAlpha: 0,
    right: "-100%"
  },
  //p-menuの挙動に合わせる
  {
    autoAlpha: 1,
    duration: 1.5,
    right: "0%"
  }
);
const hamburger = document.querySelector("#js-hamburger");
const hamburgerClose = document.querySelector("#js-hamburger-close");
const closeButton = document.querySelector("#js-close-button");
const nav = document.querySelector("#js-nav");
const fix = document.querySelector("#js-wrapper");
const menuClose = document.querySelectorAll(".js-menu-close");
const scrollFix = document.querySelector("#js-content");
console.log("scrollFix:", scrollFix);
let menuOpen = false;
const wrapper = document.querySelector("#smooth-wrapper");
const content = document.querySelector("#smooth-content");
if (wrapper && content) {
  try {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true
    });
    console.log("ScrollSmoother initialized", smoother);
  } catch (error) {
    console.error("ScrollSmoother initialization failed:", error);
  }
} else {
  console.warn("ScrollSmoother elements(#js-wrapper or .js-fix.content-wrapper) not found, skipping initialization");
}
if (wpData.isFrontPage && hamburger && hamburgerClose && nav && closeButton) {
  tl.eventCallback("onComplete", () => {
    hamburger.style.borderRadius = "0";
  });
  tl.eventCallback("onReverseComplete", () => {
    hamburger.style.borderRadius = "50%";
  });
  hamburger.addEventListener("click", function() {
    if (!menuOpen) {
      nav.classList.add("open");
      fix.classList.add("fix");
      hamburgerClose.style.borderRadius = "0";
      closeButton.classList.add("is-appear");
      tl.play().timeScale(1);
      if (smoother) {
        smoother.paused(true);
      } else {
        console.warn("ScrollSmoother not initialized, skipping pause");
      }
      menuOpen = true;
    }
  });
  hamburgerClose.addEventListener("click", function() {
    if (menuOpen) {
      nav.classList.remove("open");
      fix.classList.remove("fix");
      hamburger.style.borderRadius = "50%";
      closeButton.classList.remove("is-appear");
      tl.timeScale(1).reverse();
      if (smoother) {
        smoother.paused(false);
      }
      menuOpen = false;
    }
  });
  menuClose.forEach(function(close) {
    close.addEventListener("click", function() {
      if (menuOpen) {
        nav.classList.remove("open");
        fix.classList.remove("fix");
        hamburger.style.borderRadius = "50%";
        closeButton.classList.remove("is-appear");
        tl.timeScale(1).reverse();
        if (smoother) {
          smoother.paused(false);
        }
        menuOpen = false;
      }
    });
  });
} else {
  console.warn("Hamburger menu elements not found, skipping menu functionality");
}
gsap.utils.toArray('a[href^="#"]').forEach(function(a) {
  a.addEventListener("click", function(e) {
    e.preventDefault();
    const target = a.getAttribute("href");
    gsap.to(window, {
      duration: 1,
      ease: "power4.out",
      scrollTo: {
        y: target,
        autoKill: false
      }
    });
  });
});
gsap.to(".p-hero__background", {
  backgroundColor: "rgba(188, 186, 186, 0.63)",
  duration: 3,
  delay: 1
});
console.log("GSAP running", document.querySelector("#js-title-hero"));
gsap.fromTo("#js-title-hero", {
  y: 100,
  autoAlpha: 0
}, {
  y: 0,
  duration: 5,
  //delay: 5,
  ease: "power4.out",
  autoAlpha: 1
});
document.addEventListener("DOMContentLoaded", function() {
  function onScroll() {
    document.querySelectorAll(".p-slide__in").forEach(function(element) {
      const sectionTop = element.getBoundingClientRect().top + window.scrollY;
      const windowBottom = window.scrollY + window.innerHeight;
      if (element.classList.contains("is-animated")) return;
      if (windowBottom > sectionTop + 100) {
        console.log("アニメーション実行", element);
        gsap.to(
          element,
          {
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
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded 発火！");
  const modalElement = document.querySelector(".p-modal__portfolio");
  const closedButton = document.querySelector(".p-modal__close");
  let swiperInstance = null;
  console.log("modalElement:", modalElement);
  console.log("closedButton:", closedButton);
  const portfolioDataList = [
    // hamburger (data-index="0")
    [
      {
        img: "http://portfolio.local/wp-content/uploads/2025/06/hamburger.webp",
        title: "Hamburger(架空)"
      },
      {
        img: "http://portfolio.local/wp-content/uploads/2025/06/hamburger-description.webp",
        title: "Hamburger(架空)の詳細"
      }
    ],
    // portfolio (data-index="1")
    [
      {
        img: "http://portfolio.local/wp-content/uploads/2025/06/portfolio.webp",
        title: "Portfolio"
      },
      {
        img: "http://portfolio.local/wp-content/uploads/2025/06/portfolio-description.webp",
        title: "Portfolioの詳細"
      }
    ]
  ];
  function openModal(startIndex) {
    console.log("モーダルを開く処理開始:", startIndex);
    if (!portfolioDataList[startIndex]) {
      console.error("指定されたインデックスのデータが存在しません:", startIndex);
      return;
    }
    const smoother2 = ScrollSmoother.get();
    if (smoother2) smoother2.paused(true);
    const wrapper2 = document.querySelector(".swiper-wrapper");
    if (!wrapper2) {
      console.error("swiper-wrapper が見つかりません");
      return;
    }
    wrapper2.innerHTML = "";
    const portfolioData = portfolioDataList[startIndex];
    portfolioData.forEach((data) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.innerHTML = `
          <img src="${data.img}" alt="${data.title}" style="width: 100%; height: auto;">
          <h3 style="text-align: center; margin-top: 10px;">${data.title}</h3>
        `;
      wrapper2.appendChild(slide);
    });
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
    modalElement.classList.remove("is-close");
    modalElement.classList.add("is-open");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      swiperInstance = new Swiper(".swiper", {
        loop: false,
        initialSlide: 0,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: 1,
        autoHeight: true,
        preventInteractionOnTransition: true,
        on: {
          init: function() {
            console.log("Swiper 初期化成功！");
            this.update();
            this.slideTo(0, 0);
          }
        }
      });
    }, 50);
  }
  function closeModal() {
    console.log("モーダルを閉じる処理開始");
    modalElement.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
      const wrapper2 = document.querySelector(".swiper-wrapper");
      if (wrapper2) {
        wrapper2.innerHTML = "";
      }
      const smoother2 = ScrollSmoother.get();
      if (smoother2) smoother2.paused(false);
    }, 400);
  }
  document.querySelectorAll(".js-open-modal").forEach((item) => {
    console.log("クリックイベント登録:", item);
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const index = parseInt(item.getAttribute("data-index"), 10);
      console.log("クリックされました。インデックス:", index);
      if (isNaN(index)) {
        console.error("data-index が正しく設定されていません:", item);
        return;
      }
      openModal(index);
    });
  });
  if (closedButton) {
    closedButton.addEventListener("click", closeModal);
  } else {
    console.error("閉じるボタンが見つかりません");
  }
  if (modalElement) {
    modalElement.addEventListener("click", (e) => {
      if (e.target === modalElement) {
        closeModal();
      }
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalElement.classList.contains("is-open")) {
      closeModal();
    }
  });
  console.log("モーダル機能の初期化完了");
});
