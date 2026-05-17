// ==========================================
// TRANSLATIONS DICTIONARY
// ==========================================
const signupTranslations = {
    en: {
        "page-title": "Sign Up - My Interactive Portfolio",
        "welcome-title": "Join Us Today",
        "welcome-subtitle": "Start your creative journey",
        "benefit-1": "Access to Portfolio Tools",
        "benefit-2": "Connect with Professionals",
        "benefit-3": "Grow Your Career",
        "already-account": "Already have an account?",
        "login-here": "Login here",
        "signup-title": "Create Account",
        "signup-subtitle": "Join our community",
        "fullname-label": "Full Name",
        "fullname-placeholder": "John Doe",
        "email-label": "Email Address",
        "email-placeholder": "your@email.com",
        "password-label": "Password",
        "password-placeholder": "••••••••",
        "confirm-label": "Confirm Password",
        "confirm-placeholder": "••••••••",
        "terms-agree": "I agree to the",
        "terms-link": "Terms & Conditions",
        "newsletter": "Subscribe to our newsletter",
        "signup-button": "Create Account",
        "divider": "or sign up with",
        "signup-success": "Account created successfully! Redirecting...",
        "password-requirements": "Password Requirements",
        "req-length": "At least 8 characters",
        "req-upper": "One uppercase letter",
        "req-lower": "One lowercase letter",
        "req-number": "One number",
        "req-special": "One special character (!@#$%)",
        "strength-weak": "Weak",
        "strength-medium": "Medium",
        "strength-strong": "Strong",
        "error-fullname": "Please enter your full name",
        "error-fullname-short": "Name must be at least 2 characters",
        "error-invalid-email": "Please enter a valid email address",
        "error-email-taken": "This email is already registered",
        "error-password-short": "Password must be at least 8 characters",
        "error-password-weak": "Password is too weak",
        "error-passwords-match": "Passwords do not match",
        "error-terms": "You must accept the terms and conditions",
        "error-required-field": "This field is required"
    },
    ja: {
        "page-title": "新規登録 - My Interactive Portfolio", // 'サインアップ' changed to standard '新規登録'
        "welcome-title": "今すぐ始めましょう！", // "Let's get started now!" - much more inviting
        "welcome-subtitle": "クリエイティブな旅への第一歩", // "The first step to a creative journey"
        "benefit-1": "限定ポートフォリオツールの利用",
        "benefit-2": "プロフェッショナルとの繋がり",
        "benefit-3": "キャリアのさらなる発展",
        "already-account": "すでにアカウントをお持ちですか？",
        "login-here": "ログインはこちら", // Cleaner UI string
        "signup-title": "アカウント作成",
        "signup-subtitle": "コミュニティに参加する",
        "fullname-label": "お名前", // 'フルネーム' is technically fine, but 'お名前' is the golden standard
        "fullname-placeholder": "山田 太郎",
        "email-label": "メールアドレス",
        "email-placeholder": "your@email.com",
        "password-label": "パスワード",
        "password-placeholder": "••••••••",
        "confirm-label": "パスワード（確認用）", // More native than "パスワードを確認"
        "confirm-placeholder": "••••••••",
        "terms-agree": "利用規約に同意する", // Combined with terms-link context smoothly
        "terms-link": "利用規約",
        "newsletter": "ニュースレターを購読する",
        "signup-button": "アカウントを作成する", // Active button verb phrase
        "divider": "または他のアカウントで登録",
        "signup-success": "アカウントを作成しました！移動しています...",
        "password-requirements": "パスワードの設定条件",
        "req-length": "8文字以上",
        "req-upper": "大文字1文字以上",
        "req-lower": "小文字1文字以上",
        "req-number": "数字1文字以上",
        "req-special": "記号1文字以上 (!@#$%)",
        "strength-weak": "弱い",
        "strength-medium": "標準", // "Medium" is usually "標準" (Standard) or "普通" (Normal) in Japanese security indicators
        "strength-strong": "強い",
        "error-fullname": "お名前を入力してください",
        "error-fullname-short": "お名前は2文字以上で入力してください",
        "error-invalid-email": "有効なメールアドレスを入力してください",
        "error-email-taken": "このメールアドレスは既に登録されています",
        "error-password-short": "パスワードは8文字以上で入力してください",
        "error-password-weak": "パスワードの強度が不足しています",
        "error-passwords-match": "パスワードが一致しません",
        "error-terms": "利用規約への同意が必要です",
        "error-required-field": "この項目は必須です"
    },
    zh: {
        "page-title": "註冊 - My Interactive Portfolio",
        "welcome-title": "立即加入我們",
        "welcome-subtitle": "開啟您的創意旅程",
        "benefit-1": "使用作品集專屬工具",
        "benefit-2": "與行業專家建立聯繫",
        "benefit-3": "加速您的職業發展",
        "already-account": "已經有帳戶嗎？",
        "login-here": "點此登入",
        "signup-title": "建立帳戶",
        "signup-subtitle": "加入我們的創意社群", // Changed "社區" (physical neighborhood) to "社群" (online community)
        "fullname-label": "姓名", // Shortened from "全名" to standard form label "姓名"
        "fullname-placeholder": "李明",
        "email-label": "電子郵件",
        "email-placeholder": "your@email.com",
        "password-label": "密碼",
        "password-placeholder": "••••••••",
        "confirm-label": "確認密碼",
        "confirm-placeholder": "••••••••",
        "terms-agree": "我已閱讀並同意",
        "terms-link": "服務條款與隱私政策", // "Terms & Conditions" is more naturally rendered this way
        "newsletter": "訂閱我們的新聞通訊",
        "signup-button": "註冊帳戶",
        "divider": "或使用以下方式註冊",
        "signup-success": "帳戶建立成功！網頁跳轉中...",
        "password-requirements": "密碼強度要求",
        "req-length": "包含至少 8 個字元",
        "req-upper": "包含至少一個大寫字母",
        "req-lower": "包含至少一個小寫字母",
        "req-number": "包含至少一個數字",
        "req-special": "包含至少一個特殊符號 (!@#$%)",
        "strength-weak": "弱",
        "strength-medium": "中",
        "strength-strong": "強",
        "error-fullname": "請輸入您的姓名",
        "error-fullname-short": "姓名必須至少 2 個字元",
        "error-invalid-email": "請輸入有效的電子郵件地址",
        "error-email-taken": "此電子郵件已被註冊",
        "error-password-short": "密碼長度至少需 8 個字元",
        "error-password-weak": "密碼強度太弱",
        "error-passwords-match": "兩次輸入的密碼不相符",
        "error-terms": "您必須接受服務條款項目",
        "error-required-field": "此欄位為必填項目" // Fixed "字段" -> "欄位"
    },
    de: {
        "page-title": "Registrieren - My Interactive Portfolio",
        "welcome-title": "Komm an Bord!", // Much cooler and dynamic than "Treten Sie uns heute bei"
        "welcome-subtitle": "Starte deine kreative Reise", // Casual "deine"
        "benefit-1": "Zugriff auf Portfolio-Tools",
        "benefit-2": "Vernetze dich mit Profis",
        "benefit-3": "Präsentiere deine Karriere",
        "already-account": "Hast du bereits ein Konto?", // Casual
        "login-here": "Hier einloggen",
        "signup-title": "Konto erstellen",
        "signup-subtitle": "Werde Teil unserer Community", // Fixed the church/town hall "Gemeinde" issue!
        "fullname-label": "Vollständiger Name",
        "fullname-placeholder": "Max Mustermann", // Localized placeholder name
        "email-label": "E-Mail-Adresse",
        "email-placeholder": "your@email.com",
        "password-label": "Passwort",
        "password-placeholder": "••••••••",
        "confirm-label": "Passwort bestätigen",
        "confirm-placeholder": "••••••••",
        "terms-agree": "Ich stimme den zu:",
        "terms-link": "AGB und Datenschutzbestimmungen", // Standard German digital term instead of direct literal translation
        "newsletter": "Ich möchte den Newsletter abonnieren",
        "signup-button": "Konto erstellen",
        "divider": "oder registrieren über",
        "signup-success": "Konto erfolgreich erstellt! Du wirst weitergeleitet...",
        "password-requirements": "Passwort-Anforderungen",
        "req-length": "Mindestens 8 Zeichen",
        "req-upper": "Ein Großbuchstabe",
        "req-lower": "Ein Kleinbuchstabe",
        "req-number": "Eine Zahl",
        "req-special": "Ein Sonderzeichen (!@#$%)",
        "strength-weak": "Schwach",
        "strength-medium": "Mittel",
        "strength-strong": "Stark",
        "error-fullname": "Bitte gib deinen vollständigen Namen ein", // Standardized to casual "deinen / gib"
        "error-fullname-short": "Der Name muss mindestens 2 Zeichen lang sein",
        "error-invalid-email": "Bitte gib eine gültige E-Mail-Adresse ein",
        "error-email-taken": "Diese E-Mail-Adresse ist bereits vergeben",
        "error-password-short": "Das Passwort muss mindestens 8 Zeichen lang sein",
        "error-password-weak": "Das Passwort ist zu schwach",
        "error-passwords-match": "Die Passwörter stimmen nicht überein",
        "error-terms": "Du musst den AGB zustimmen",
        "error-required-field": "Dieses Feld ist erforderlich"
    },
    iit: {
        "page-title": "Registrazione - My Interactive Portfolio",
        "welcome-title": "Unisciti a noi!", // Punchier and more welcoming
        "welcome-subtitle": "Inizia il tuo viaggio creativo",
        "benefit-1": "Accesso a strumenti esclusivi",
        "benefit-2": "Connettiti con i professionisti",
        "benefit-3": "Dai un impulso alla tua carriera",
        "already-account": "Hai già un account?",
        "login-here": "Accedi qui",
        "signup-title": "Crea Account",
        "signup-subtitle": "Entra nella nostra community", // 'Community' is heavily preferred over 'comunità' in modern Italian tech
        "fullname-label": "Nome e cognome", // More natural field labeling than "Nome Completo"
        "fullname-placeholder": "Mario Rossi", // Standard Italian placeholder name
        "email-label": "Email",
        "email-placeholder": "your@email.com",
        "password-label": "Password",
        "password-placeholder": "••••••••",
        "confirm-label": "Conferma password",
        "confirm-placeholder": "••••••••",
        "terms-agree": "Accetto i",
        "terms-link": "Termini e le Condizioni", // Added grammatical article 'le' so it combines perfectly in line
        "newsletter": "Iscriviti alla newsletter",
        "signup-button": "Registrati", // Active concise submit label
        "divider": "oppure registrati con",
        "signup-success": "Account creato con successo! Un momento...",
        "password-requirements": "Requisiti della password",
        "req-length": "Almeno 8 caratteri",
        "req-upper": "Una lettera maiuscola",
        "req-lower": "Una lettera minuscola",
        "req-number": "Un numero",
        "req-special": "Un carattere speciale (!@#$%)",
        "strength-weak": "Debole",
        "strength-medium": "Media", // Changed to feminine to match implicit 'robustezza' (strength)
        "strength-strong": "Forte",
        "error-fullname": "Inserisci il tuo nome e cognome",
        "error-fullname-short": "Il nome deve contenere almeno 2 caratteri",
        "error-invalid-email": "Inserisci un indirizzo email valido",
        "error-email-taken": "Questa email risulta già registrata",
        "error-password-short": "La password deve contenere almeno 8 caratteri",
        "error-password-weak": "La password è troppo debole",
        "error-passwords-match": "Le password non corrispondono",
        "error-terms": "È necessario accettare i Termini e le Condizioni",
        "error-required-field": "Questo campo è obbligatorio"
    },
    es: {
        "page-title": "Registrarse - My Interactive Portfolio",
        "welcome-title": "¡Únete a nosotros!",
        "welcome-subtitle": "Inicia tu viaje creativo",
        "benefit-1": "Acceso a herramientas exclusivas",
        "benefit-2": "Conéctate con profesionales",
        "benefit-3": "Impulsa tu carrera profesional",
        "already-account": "¿Ya tienes una cuenta?",
        "login-here": "Inicia sesión aquí",
        "signup-title": "Crear cuenta",
        "signup-subtitle": "Únete a nuestra comunidad",
        "fullname-label": "Nombre completo",
        "fullname-placeholder": "Juan Pérez", // Localized placeholder name
        "email-label": "Correo electrónico", // Removed the wordy "Dirección de"
        "email-placeholder": "your@email.com",
        "password-label": "Contraseña",
        "password-placeholder": "••••••••",
        "confirm-label": "Confirmar contraseña",
        "confirm-placeholder": "••••••••",
        "terms-agree": "Acepto los",
        "terms-link": "Términos y Condiciones",
        "newsletter": "Suscribirme al boletín informativo",
        "signup-button": "Registrarse", // Better button state word
        "divider": "o regístrate con",
        "signup-success": "¡Cuenta creada con éxito! Redirigiendo...",
        "password-requirements": "Requisitos de seguridad", // More standard tech context phrase
        "req-length": "Al menos 8 caracteres",
        "req-upper": "Una letra mayúscula",
        "req-lower": "Una letra minúscula",
        "req-number": "Un número",
        "req-special": "Un carácter especial (!@#$%)",
        "strength-weak": "Débil",
        "strength-medium": "Media", // Matches gender context of "fuerza/seguridad"
        "strength-strong": "Fuerte",
        "error-fullname": "Por favor, ingresa tu nombre completo",
        "error-fullname-short": "El nombre debe tener al menos 2 caracteres",
        "error-invalid-email": "Ingresa un correo electrónico válido",
        "error-email-taken": "Este correo ya se encuentra registrado",
        "error-password-short": "La contraseña debe tener al menos 8 caracteres",
        "error-password-weak": "La contraseña es demasiado débil",
        "error-passwords-match": "Las contraseñas no coinciden",
        "error-terms": "Debes aceptar los términos y condiciones para continuar",
        "error-required-field": "Este campo es obligatorio"
    },
    fr: {
        "page-title": "Inscription - My Interactive Portfolio",
        "welcome-title": "Rejoins-nous !", // Casual, interactive tone + space
        "welcome-subtitle": "Commence ton parcours créatif",
        "benefit-1": "Accès aux outils de portfolio",
        "benefit-2": "Connecte avec des professionnels",
        "benefit-3": "Booste ta carrière",
        "already-account": "Tu as déjà un compte ?", // Typography space added
        "login-here": "Connecte-toi ici",
        "signup-title": "Créer un compte",
        "signup-subtitle": "Rejoins notre community", // "Community" or "Communauté" work smoothly here
        "fullname-label": "Nom complet",
        "fullname-placeholder": "Jean Dupont", // Localized placeholder
        "email-label": "Email",
        "email-placeholder": "your@email.com",
        "password-label": "Mot de passe",
        "password-placeholder": "••••••••",
        "confirm-label": "Confirmer le mot de passe",
        "confirm-placeholder": "••••••••",
        "terms-agree": "J'accepte les",
        "terms-link": "Conditions Générales d'Utilisation", // Native standard term (CGU)
        "newsletter": "S'abonner à la newsletter", // Fixed the regional Canadian "infolettre" phrase
        "signup-button": "S'inscrire",
        "divider": "ou s'inscrire avec",
        "signup-success": "Compte créé avec succès ! Redirection...",
        "password-requirements": "Exigences du mot de passe",
        "req-length": "Au moins 8 caractères",
        "req-upper": "Une lettre majuscule",
        "req-lower": "Une lettre minuscule",
        "req-number": "Un chiffre",
        "req-special": "Un caractère spécial (!@#$%)",
        "strength-weak": "Faible",
        "strength-medium": "Moyen",
        "strength-strong": "Fort",
        "error-fullname": "Entre ton nom complet, s'il te plaît", // Standardized to casual
        "error-fullname-short": "Le nom doit contenir au moins 2 caractères",
        "error-invalid-email": "Entre une adresse e-mail valide",
        "error-email-taken": "Cet e-mail est déjà enregistré",
        "error-password-short": "Le mot de passe doit contenir au moins 8 caractères",
        "error-password-weak": "Le mot de passe est trop faible",
        "error-passwords-match": "Les mots de passe ne correspondent pas",
        "error-terms": "Tu dois accepter les conditions générales",
        "error-required-field": "Ce champ est obligatoire"
    },
    ko: {
        "page-title": "회원가입 - My Interactive Portfolio", // '가입' changed to formal web term '회원가입'
        "welcome-title": "지금 시작해보세요!", // "Start right now!" - way more natural
        "welcome-subtitle": "크리에이티브한 여정의 시작",
        "benefit-1": "포트폴리오 전용 툴 이용",
        "benefit-2": "업계 전문가들과의 네트워킹",
        "benefit-3": "성공적인 커리어 발전",
        "already-account": "이미 계정이 있으신가요?",
        "login-here": "여기서 로그인",
        "signup-title": "계정 만들기",
        "signup-subtitle": "우리 커뮤니티와 함께하세요",
        "fullname-label": "이름", // "전체 이름" sounds like a translated passport form field. Just "이름" is standard.
        "fullname-placeholder": "홍길동",
        "email-label": "이메일",
        "email-placeholder": "your@email.com",
        "password-label": "비밀번호",
        "password-placeholder": "••••••••",
        "confirm-label": "비밀번호 확인",
        "confirm-placeholder": "••••••••",
        "terms-agree": "아래 내용에 동의합니다:",
        "terms-link": "이용약관 및 개인정보처리방침", // Standard localized legal combo label
        "newsletter": "뉴스레터 구독하기",
        "signup-button": "가입하기",
        "divider": "또는 소셜 계정으로 가입", // Fixed the mechanical "다음으로 가입" translation
        "signup-success": "회원가입이 완료되었습니다! 잠시 후 이동합니다...",
        "password-requirements": "비밀번호 설정 기준",
        "req-length": "최소 8자 이상",
        "req-upper": "대문자 1개 이상 포함",
        "req-lower": "소문자 1개 이상 포함",
        "req-number": "숫자 1개 이상 포함",
        "req-special": "특수문자 1개 이상 포함 (!@#$%)",
        "strength-weak": "낮음", // Strength metrics use 낮음/보통/높음 instead of 약함/강함 in modern K-UX
        "strength-medium": "보통",
        "strength-strong": "높음",
        "error-fullname": "이름을 입력해 주세요",
        "error-fullname-short": "이름은 최소 2자 이상이어야 합니다",
        "error-invalid-email": "올바른 이메일 형식을 입력해 주세요",
        "error-email-taken": "이미 가입된 이메일 주소입니다",
        "error-password-short": "비밀번호는 최소 8자 이상이어야 합니다",
        "error-password-weak": "비밀번호 안전도가 너무 낮습니다",
        "error-passwords-match": "비밀번호가 일치하지 않습니다",
        "error-terms": "이용약관 동의가 필요합니다",
        "error-required-field": "필수 입력 항목입니다"
    },
    ru: {
        "page-title": "Регистрация - My Interactive Portfolio",
        "welcome-title": "Присоединяйтесь к нам!", // Fixed the grammatically incorrect "Присоединитесь"
        "welcome-subtitle": "Начните свой творческий путь",
        "benefit-1": "Доступ к инструментам портфолио",
        "benefit-2": "Связь с профессионалами",
        "benefit-3": "Развитие вашей карьеры",
        "already-account": "Уже есть аккаунт?", // Friendly "аккаунт" instead of corporate "учетная запись"
        "login-here": "Войти",
        "signup-title": "Создать аккаунт",
        "signup-subtitle": "Станьте частью нашего сообщества",
        "fullname-label": "Имя и фамилия", // More accurate field context than literal "Полное имя"
        "fullname-placeholder": "Иван Петров",
        "email-label": "Email", // Modern Russian design interface convention
        "email-placeholder": "your@email.com",
        "password-label": "Пароль",
        "password-placeholder": "••••••••",
        "confirm-label": "Подтвердите пароль",
        "confirm-placeholder": "••••••••",
        "terms-agree": "Я принимаю условия",
        "terms-link": "Пользовательского соглашения", // Matches case structure for smooth dynamic text strings
        "newsletter": "Подписаться на рассылку новостей",
        "signup-button": "Зарегистрироваться",
        "divider": "или через социальные сети", // Looks much cleaner on an authentication line separator
        "signup-success": "Аккаунт успешно создан! Переходим к сайту...",
        "password-requirements": "Требования к паролю",
        "req-length": "Не менее 8 символов",
        "req-upper": "Минимум одна заглавная буква",
        "req-lower": "Минимум одна строчная буква",
        "req-number": "Минимум одна цифра",
        "req-special": "Минимум один спецсимвол (!@#$%)",
        "strength-weak": "Слабый",
        "strength-medium": "Средний",
        "strength-strong": "Надежный", // "Надежный" (Reliable) is used for good passwords instead of "Сильный" (Strong)
        "error-fullname": "Пожалуйста, введите свое имя и фамилию",
        "error-fullname-short": "Имя должно содержать не менее 2 символов",
        "error-invalid-email": "Пожалуйста, введите корректный email",
        "error-email-taken": "Этот email уже зарегистрирован в системе",
        "error-password-short": "Пароль должен содержать не менее 8 символов",
        "error-password-weak": "Этот пароль слишком простой",
        "error-passwords-match": "Пароли не совпадают",
        "error-terms": "Необходимо принять условия пользовательского соглашения",
        "error-required-field": "Это обязательное поле"
    }
};

// ==========================================
// LANGUAGE MANAGEMENT
// ==========================================
function changeLanguage(lang) {
    localStorage.setItem('preferred-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (signupTranslations[lang] && signupTranslations[lang][key]) {
            element.textContent = signupTranslations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (signupTranslations[lang] && signupTranslations[lang][key]) {
            element.placeholder = signupTranslations[lang][key];
        }
    });

    document.body.style.opacity = '1';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    document.getElementById('language-select').value = savedLang;
    changeLanguage(savedLang);
});

// ==========================================
// VALIDATION FUNCTIONS
// ==========================================
const validateFullName = (name) => {
    return name.trim().length >= 2;
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
};

const getPasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength++;

    if (strength <= 2) return 'weak';
    if (strength <= 3) return 'medium';
    return 'strong';
};

const showError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);

    if (field && errorElement) {
        field.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
};

const clearError = (fieldId) => {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);

    if (field && errorElement) {
        field.classList.remove('error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
};

// ==========================================
// PASSWORD STRENGTH INDICATOR
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const strengthFill = document.getElementById('strength-fill');
    const strengthText = document.getElementById('strength-text');
    const requirementsModal = document.getElementById('requirements-modal');

    if (passwordInput) {
        passwordInput.addEventListener('focus', () => {
            requirementsModal.classList.add('show');
        });

        passwordInput.addEventListener('blur', () => {
            requirementsModal.classList.remove('show');
        });

        passwordInput.addEventListener('input', () => {
            const password = passwordInput.value;
            const strength = getPasswordStrength(password);
            const currentLang = localStorage.getItem('preferred-lang') || 'en';

            strengthFill.classList.remove('weak', 'medium', 'strong');
            strengthFill.classList.add(strength);

            strengthText.textContent = signupTranslations[currentLang][`strength-${strength}`];
            strengthText.classList.remove('weak', 'medium', 'strong');
            strengthText.classList.add(strength);

            // Update requirements
            updateRequirements(password);
        });
    }
});

// ==========================================
// UPDATE REQUIREMENTS DISPLAY
// ==========================================
function updateRequirements(password) {
    const requirements = {
        'req-length': password.length >= 8,
        'req-upper': /[A-Z]/.test(password),
        'req-lower': /[a-z]/.test(password),
        'req-number': /[0-9]/.test(password),
        'req-special': /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    };

    Object.keys(requirements).forEach(reqId => {
        const element = document.getElementById(reqId);
        const check = element.querySelector('.requirement-check');

        if (requirements[reqId]) {
            element.classList.add('met');
            check.textContent = '✓';
        } else {
            element.classList.remove('met');
            check.textContent = '○';
        }
    });
}

// ==========================================
// PASSWORD VISIBILITY TOGGLE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-password');
    const confirmInput = document.getElementById('confirm-password');
    const toggleConfirm = document.getElementById('toggle-confirm');

    if (toggleButton && passwordInput) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleButton.querySelector('.eye-icon').textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                toggleButton.querySelector('.eye-icon').textContent = '👁️';
            }
        });
    }

    if (toggleConfirm && confirmInput) {
        toggleConfirm.addEventListener('click', (e) => {
            e.preventDefault();

            if (confirmInput.type === 'password') {
                confirmInput.type = 'text';
                toggleConfirm.querySelector('.eye-icon').textContent = '🙈';
            } else {
                confirmInput.type = 'password';
                toggleConfirm.querySelector('.eye-icon').textContent = '👁️';
            }
        });
    }
});

// ==========================================
// FORM SUBMISSION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm-password');
    const termsInput = document.getElementById('terms');
    const successMessage = document.getElementById('success-message');
    const loadingSpinner = document.getElementById('loading-spinner');

    if (signupForm) {
        // Real-time validation
        fullnameInput.addEventListener('blur', () => {
            const name = fullnameInput.value.trim();
            const currentLang = localStorage.getItem('preferred-lang') || 'en';

            if (name === '') {
                showError('fullname', signupTranslations[currentLang]['error-required-field']);
            } else if (!validateFullName(name)) {
                showError('fullname', signupTranslations[currentLang]['error-fullname-short']);
            } else {
                clearError('fullname');
            }
        });

        emailInput.addEventListener('blur', () => {
            const email = emailInput.value.trim();
            const currentLang = localStorage.getItem('preferred-lang') || 'en';

            if (email === '') {
                showError('email', signupTranslations[currentLang]['error-required-field']);
            } else if (!validateEmail(email)) {
                showError('email', signupTranslations[currentLang]['error-invalid-email']);
            } else {
                clearError('email');
            }
        });

        passwordInput.addEventListener('blur', () => {
            const password = passwordInput.value;
            const currentLang = localStorage.getItem('preferred-lang') || 'en';

            if (password === '') {
                showError('password', signupTranslations[currentLang]['error-required-field']);
            } else if (!validatePassword(password)) {
                showError('password', signupTranslations[currentLang]['error-password-weak']);
            } else {
                clearError('password');
            }
        });

        confirmInput.addEventListener('blur', () => {
            const confirm = confirmInput.value;
            const password = passwordInput.value;
            const currentLang = localStorage.getItem('preferred-lang') || 'en';

            if (confirm === '') {
                showError('confirm-password', signupTranslations[currentLang]['error-required-field']);
            } else if (confirm !== password) {
                showError('confirm-password', signupTranslations[currentLang]['error-passwords-match']);
            } else {
                clearError('confirm-password');
            }
        });

        // Form submission
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const fullname = fullnameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            const confirm = confirmInput.value;
            const termsAccepted = termsInput.checked;
            const newsletter = document.getElementById('newsletter').checked;
            const currentLang = localStorage.getItem('preferred-lang') || 'en';

            let isValid = true;

            // Validate all fields
            if (fullname === '') {
                showError('fullname', signupTranslations[currentLang]['error-required-field']);
                isValid = false;
            } else if (!validateFullName(fullname)) {
                showError('fullname', signupTranslations[currentLang]['error-fullname-short']);
                isValid = false;
            } else {
                clearError('fullname');
            }

            if (email === '') {
                showError('email', signupTranslations[currentLang]['error-required-field']);
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('email', signupTranslations[currentLang]['error-invalid-email']);
                isValid = false;
            } else {
                clearError('email');
            }

            if (password === '') {
                showError('password', signupTranslations[currentLang]['error-required-field']);
                isValid = false;
            } else if (!validatePassword(password)) {
                showError('password', signupTranslations[currentLang]['error-password-weak']);
                isValid = false;
            } else {
                clearError('password');
            }

            if (confirm === '') {
                showError('confirm-password', signupTranslations[currentLang]['error-required-field']);
                isValid = false;
            } else if (confirm !== password) {
                showError('confirm-password', signupTranslations[currentLang]['error-passwords-match']);
                isValid = false;
            } else {
                clearError('confirm-password');
            }

            if (!termsAccepted) {
                showError('terms', signupTranslations[currentLang]['error-terms']);
                isValid = false;
            } else {
                clearError('terms');
            }

            if (!isValid) return;

            // Show loading spinner
            loadingSpinner.classList.add('show');

            // Simulate API call (replace with actual API)
            setTimeout(() => {
                // Save user data
                const userData = {
                    fullname,
                    email,
                    newsletter,
                    createdAt: new Date().toISOString()
                };

                localStorage.setItem('userEmail', email);
                localStorage.setItem('userFullname', fullname);

                // Hide spinner and show success
                loadingSpinner.classList.remove('show');
                successMessage.classList.add('show');

                console.log('Signup data:', userData);

                // Redirect after delay
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            }, 1500);
        });
    }
});

// ==========================================
// SOCIAL SIGNUP BUTTONS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const socialButtons = document.querySelectorAll('.social-btn');

    socialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const buttonTitle = button.getAttribute('title');
            console.log(`Social signup attempted: ${buttonTitle}`);

            const spinner = document.getElementById('loading-spinner');
            spinner.classList.add('show');

            setTimeout(() => {
                spinner.classList.remove('show');
                alert(`${buttonTitle} signup would be processed here`);
            }, 1000);
        });
    });
});

// ==========================================
// TERMS LINK
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const termsLink = document.querySelector('.terms-link');

    if (termsLink) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Terms & Conditions page would open here');
        });
    }
});
