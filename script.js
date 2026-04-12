const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About Me",
        "nav-contact": "Contact",
        "nav-guestbook": "Guest Board",
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
        "contact-desc": "Feel free to contact me if you have any questions!",
        "guestbook-title": "Guest Board",
        "guestbook-desc": "Leave a message! No login required.",
        "guestbook-name-placeholder": "Your Name",
        "guestbook-message-placeholder": "Your Message",
        "guestbook-submit": "Send Message"
    },
    ja: {
        "nav-home": "ホーム",
        "nav-about": "私について",
        "nav-contact": "お問い合わせ",
        "nav-guestbook": "ゲストボード",
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
        "contact-desc": "ご質問がございましたら、お気軽にお問い合わせください！",
        "guestbook-title": "ゲストボード",
        "guestbook-desc": "ログイン不要でメッセージを残せます。",
        "guestbook-name-placeholder": "お名前",
        "guestbook-message-placeholder": "メッセージ",
        "guestbook-submit": "メッセージを送信"
    },
    zh: {
        "nav-home": "首頁",
        "nav-about": "關於我",
        "nav-contact": "聯絡我",
        "nav-guestbook": "留言板",
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
        "contact-desc": "如果有任何問題，歡迎隨時與我聯絡！",
        "guestbook-title": "留言板",
        "guestbook-desc": "無需登入，留下您的訊息！",
        "guestbook-name-placeholder": "您的名字",
        "guestbook-message-placeholder": "您的訊息",
        "guestbook-submit": "送出訊息"
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

    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute("placeholder", translations[lang][key]);
        }
    });

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

    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    changeLanguage(savedLang);

    const messageForm = document.getElementById('message-form');
    const messageList = document.getElementById('message-list');

    // Initialize with example messages if empty
    const initializeExampleMessages = () => {
        const existingMessages = JSON.parse(localStorage.getItem('guestMessages'));
        if (!existingMessages || existingMessages.length === 0) {
            const exampleMessages = [
                {
                    name: "Alex Johnson",
                    text: "Amazing portfolio! The animations are so smooth and creative. Great work!",
                    date: new Date(Date.now() - 86400000).toLocaleString()
                },
                {
                    name: "山田太郎",
                    text: "素晴らしいウェブサイトですね。デザインが本当に美しいです。ポートフォリオの品質に感銘を受けました。",
                    date: new Date(Date.now() - 172800000).toLocaleString()
                },
                {
                    name: "李明",
                    text: "非常漂亮的設計！您的前端開發技能令人印象深刻。祝賀您創建了這麼優秀的作品集！",
                    date: new Date(Date.now() - 259200000).toLocaleString()
                },
                {
                    name: "Sophie Martinez",
                    text: "Love the gradient background and the smooth transitions. This is how modern portfolios should look!",
                    date: new Date(Date.now() - 345600000).toLocaleString()
                },
                {
                    name: "田中花子",
                    text: "多言語対応が素晴らしいですね。UXの考慮が素晴らしい。",
                    date: new Date(Date.now() - 432000000).toLocaleString()
                }
            ];
            localStorage.setItem('guestMessages', JSON.stringify(exampleMessages));
        }
    };

    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('guestMessages')) || [];
        messageList.innerHTML = '';

        if (messages.length === 0) {
            messageList.innerHTML = '<p class="no-messages">No messages yet. Be the first to leave a message!</p>';
            return;
        }

        messages.forEach((msg, index) => {
            const msgEl = document.createElement('div');
            msgEl.classList.add('message-item', 'scroll-trigger');
            msgEl.style.transitionDelay = `${index * 0.1}s`;

            msgEl.innerHTML = `
                <div class="message-header">
                    <strong>${msg.name}</strong>
                    <span class="message-date">${msg.date}</span>
                </div>
                <p class="message-text">${msg.text}</p>
            `;
            messageList.appendChild(msgEl);
        });

        // Observe new messages for animation
        const newMessages = document.querySelectorAll('.message-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        newMessages.forEach((el) => observer.observe(el));
    };

    // Initialize example messages
    initializeExampleMessages();
    loadMessages();

    if (messageForm) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('guest-name').value;
            const textInput = document.getElementById('guest-message').value;

            if (nameInput.trim() !== '' && textInput.trim() !== '') {
                const messages = JSON.parse(localStorage.getItem('guestMessages')) || [];

                const newMsg = {
                    name: nameInput,
                    text: textInput,
                    date: new Date().toLocaleString()
                };

                messages.unshift(newMsg);
                localStorage.setItem('guestMessages', JSON.stringify(messages));

                messageForm.reset();
                loadMessages();
            }
        });
    }
});