const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About Me",
        "nav-contact": "Contact",
        "hero-hello": "Hello, I'm ",
        "hero-name-suffix": ".",
        "hero-subtitle": "Designer & Frontend Developer",
        "hero-btn": "View Portfolio",
        "about-title": "About Me",
        "about-desc": "I build interactive, engaging, and highly animated web experiences. I believe the web should be fun, fluid, and full of life.",
        "card1-title": "Design",
        "card1-desc": "Creating beautiful, user-centric interfaces.",
        "card2-title": "Code",
        "card2-desc": "Writing clean, efficient HTML, CSS, and JS.",
        "card3-title": "Animate",
        "card3-desc": "Bringing static pages to life with motion.",
        "contact-title": "Contact",
        "contact-desc": "Feel free to contact me if you have any questions!"
    },
    ja: {
        "nav-home": "ホーム",
        "nav-about": "私について",
        "nav-contact": "お問い合わせ",
        "hero-hello": "こんにちは、",
        "hero-name-suffix": "です",
        "hero-subtitle": "デザイナー ＆ フロントエンドエンジニア",
        "hero-btn": "ポートフォリオを見る",
        "about-title": "私について",
        "about-desc": "インタラクティブで魅力的な、アニメーション豊かなウェブ体験を構築しています。ウェブは楽しく、スムーズで、活気に満ちているべきだと信じています。",
        "card1-title": "デザイン",
        "card1-desc": "美しく、ユーザー中心のインターフェースを作成します。",
        "card2-title": "コーディング",
        "card2-desc": "クリーンで効率的なHTML, CSS, JavaScriptを記述します。",
        "card3-title": "アニメーション",
        "card3-desc": "静的なページに動きを与え、命を吹き込みます。",
        "contact-title": "お問い合わせ",
        "contact-desc": "ご質問がございましたら、お気軽にお問い合わせください！"
    },
    zh: {
        "nav-home": "首頁",
        "nav-about": "關於我",
        "nav-contact": "聯絡我",
        "hero-hello": "你好，我是 ",
        "hero-name-suffix": "。",
        "hero-subtitle": "設計師 & 前端開發者",
        "hero-btn": "查看作品集",
        "about-title": "關於我",
        "about-desc": "我致力於打造具互動性、吸引力且動畫豐富的網頁體驗。我相信網頁應該是充滿樂趣、流暢且充滿活力的。",
        "card1-title": "設計",
        "card1-desc": "創造美麗、以使用者為中心的介面。",
        "card2-title": "程式碼",
        "card2-desc": "編寫簡潔、高效的 HTML、CSS 和 JS。",
        "card3-title": "動畫",
        "card3-desc": "透過動態效果讓靜態頁面栩栩如生。",
        "contact-title": "聯絡我",
        "contact-desc": "如果有任何問題，歡迎隨時與我聯絡！"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-selector button').forEach(btn => {
        btn.classList.remove('active');
    });

    const targetBtn = document.getElementById(`btn-${lang}`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }

    localStorage.setItem('preferred-lang', lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-trigger");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    scrollElements.forEach((el) => observer.observe(el));

    const savedLang = localStorage.getItem('preferred-lang') || 'ja';
    changeLanguage(savedLang);
});