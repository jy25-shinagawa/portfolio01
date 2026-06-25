window.tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          mono: ['"Fira Code"', 'monospace'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        }
      }
    }
  };
  
  const translations = {
    en: {
      label: "English", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navGuestbook: "Guestbook",
      heroGreeting: "Available for New Projects", heroTitle: "Hi, I'm a",
      heroDesc: "I build high-performance web applications that couple elegant architecture with clean, responsive user interfaces. Welcome to my creative playground.",
      heroCTA: "Leave a Message", heroSecondaryCTA: "View Work",
      aboutTitle: "About Me", aboutText: "I am a passionate software engineer with extensive experience crafting responsive front-end layouts and designing robust serverless integrations.",
      skillsTitle: "Skills & Technologies", projectsTitle: "Featured Work",
      projectTagWeb: "Web Application", projectTagCreative: "Creative Project",
      projectTitle1: "Cloud Command Board", projectDesc1: "An elegant enterprise console application built to coordinate microservices.",
      projectTitle2: "E-Commerce Design System", projectDesc2: "A comprehensive system framework that streamlines the checkout checkout funnel UI.",
      projectView: "View Case Study", projectViewFile: "View Portfolio File",
      guestbookTitle: "Guest Board", gbAuthRequired: "You must sign in with an account to write messages."
    },
    ja: {
      label: "日本語", navAbout: "自己紹介", navSkills: "スキル", navProjects: "実績", navGuestbook: "掲示板",
      heroGreeting: "新規案件受付中", heroTitle: "こんにちは、私は",
      heroDesc: "洗練されたアーキテクチャとクリーンでレスポンシブなUIを融合させた高性能Webアプリケーションを構築します。",
      heroCTA: "メッセージを残す", heroSecondaryCTA: "実績を見る",
      aboutTitle: "私について", aboutText: "私はレスポンシブなフロントエンドレイアウトの作成と堅牢なサーバーレス統合の設計において豊富な経験を持つソフトウェアエンジニアです。",
      skillsTitle: "スキルと技術", projectsTitle: "主要実績",
      projectTagWeb: "ウェブアプリケーション", projectTagCreative: "クリエイティブプロジェクト",
      projectTitle1: "クラウドコマンドボード", projectDesc1: "マイクロサービスを調整するために構築された洗練されたエンタープライズコンソールアプリケーション。",
      projectTitle2: "ECデザインシステム", projectDesc2: "チェックアウトファンネルUIを合理化する包括的なシステムフレームワーク。",
      projectView: "ケーススタディを見る", projectViewFile: "ポートフォリオファイルを見る",
      guestbookTitle: "掲示板", gbAuthRequired: "メッセージを書き込むにはログインが必要です。"
    },
    zh: {
      label: "繁體中文", navAbout: "關於我", navSkills: "專業技能", navProjects: "精選專案", navGuestbook: "留言板",
      heroGreeting: "可接受新項目委託", heroTitle: "妳好，我是",
      heroDesc: "我構建兼具優雅架構與簡潔、響應式用戶界面相結合的高性能 Web 應用程序。歡迎來到我的創意遊樂場。",
      heroCTA: "留下訊息", heroSecondaryCTA: "查看作品",
      aboutTitle: "關於我", aboutText: "我是一名充滿熱情的軟件工程師，在構建響應式前端布局和設計強大的無服務器整合方面擁有豐富的經驗。",
      skillsTitle: "核心技能與技術", projectsTitle: "精選作品展示",
      projectTagWeb: "網路應用程式", projectTagCreative: "創意項目",
      projectTitle1: "雲端指揮控制面板", projectDesc1: "專為協調微服務而構建的企業級控制台應用程序。",
      projectTitle2: "電子商務設計系統", projectDesc2: "一個簡化結帳流程 UI 的綜合系統框架。",
      projectView: "查看個案研究", projectViewFile: "查看作品集檔案",
      guestbookTitle: "訪客留言板", gbAuthRequired: "您必須登入帳號才能撰寫留言。"
    }
  };
  
  let currentUser = null;
  let activeLang = 'en';
  
  window.showToast = function(message) {
    alert(message);
  };
  
  window.changeLanguage = function(lang) {
    if (!translations[lang]) return;
    activeLang = lang;
    
    const currentLangLabel = document.getElementById('current-lang-label');
    if(currentLangLabel) currentLangLabel.innerText = translations[lang].label;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.innerText = translations[lang][key];
    });
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("lang-btn");
    const langDropdown = document.getElementById("lang-dropdown");
  
    if(langBtn && langDropdown) {
      langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle("hidden");
      });
      document.addEventListener("click", () => langDropdown.classList.add("hidden"));
    }
  
    document.querySelectorAll(".lang-opt-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        window.changeLanguage(e.target.getAttribute("data-lang"));
      });
    });
  
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
      });
    }
  
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if(mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
    }
  
    document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      handleAuthSuccess({ name: email.split('@')[0] });
    });
  
    document.getElementById('signup-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('signup-username').value;
      handleAuthSuccess({ name: username });
    });
  
    renderAuthHeader();
  });
  
  function renderAuthHeader() {
    const container = document.getElementById('auth-header-container');
    if(!container) return;
  
    if(currentUser) {
      container.innerHTML = `
        <span class="text-xs font-semibold">${currentUser.name}</span>
        <button onclick="handleLogout()" class="px-3 py-1.5 border border-slate-200 dark:border-slate-800 text-xs font-semibold rounded-xl hover:bg-red-500 hover:text-white transition">Log Out</button>
      `;
      document.getElementById('gb-auth-warning').classList.add('hidden');
      document.getElementById('gb-post-form').classList.remove('hidden');
    } else {
      container.innerHTML = `
        <button onclick="openAuthModal('login')" class="px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-xl transition hover:bg-blue-700">Log In</button>
      `;
      document.getElementById('gb-auth-warning').classList.remove('hidden');
      document.getElementById('gb-post-form').classList.add('hidden');
    }
  }
  
  function handleAuthSuccess(user) {
    currentUser = user;
    renderAuthHeader();
    closeAuthModal();
    window.showToast("Authentication Successful!");
  }
  
  window.handleLogout = function() {
    currentUser = null;
    renderAuthHeader();
    window.showToast("Logged out clean.");
  };
  
  window.openAuthModal = function(mode) {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('div').classList.remove('scale-95');
    window.switchAuthTab(mode);
  };
  
  window.closeAuthModal = function() {
    const modal = document.getElementById('auth-modal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('div').classList.add('scale-95');
  };
  
  window.switchAuthTab = function(tab) {
    const loginBtn = document.getElementById("tab-login-btn");
    const signupBtn = document.getElementById("tab-signup-btn");
    const loginContent = document.getElementById("login-tab-content");
    const signupContent = document.getElementById("signup-tab-content");
  
    if(tab === 'login') {
      loginBtn.className = "w-1/2 pb-3 text-blue-600 border-b-2 border-blue-600";
      signupBtn.className = "w-1/2 pb-3 text-slate-400 hover:text-slate-600";
      loginContent.classList.remove("hidden");
      signupContent.classList.add("hidden");
    } else {
      signupBtn.className = "w-1/2 pb-3 text-emerald-600 border-b-2 border-emerald-600";
      loginBtn.className = "w-1/2 pb-3 text-slate-400 hover:text-slate-600";
      signupContent.classList.remove("hidden");
      loginContent.classList.add("hidden");
    }
  };