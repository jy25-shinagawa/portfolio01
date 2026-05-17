<!-- 
========================================
ИНТЕГРАЦИЯ И ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ
========================================

Этот файл содержит полезные примеры для интеграции 
страницы входа с вашим существующим проектом.
-->

<!-- ============================================
1. ИНТЕГРАЦИЯ С ГЛАВНОЙ СТРАНИЦЕЙ
============================================ -->

<!-- Добавьте в index.html кнопку входа в навигацию: -->

<!--
<nav class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="login.html" class="btn-login">Login</a>
</nav>
-->

<!-- CSS для кнопки входа: -->
<!--
.btn-login {
    background: linear-gradient(135deg, var(--secondary), #D2BE96) !important;
    color: var(--dark) !important;
    padding: 10px 25px !important;
    border-radius: 20px !important;
    font-weight: 600 !important;
    transition: all 0.3s ease !important;
}

.btn-login:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 10px 25px rgba(210, 189, 150, 0.4) !important;
}
-->

<!-- ============================================
2. СИНХРОНИЗАЦИЯ ЯЗЫКОВ МЕЖДУ СТРАНИЦАМИ
============================================ -->

<!--
Добавьте этот код в оба script.js файла (главную страницу и login):
-->

<!--
// Синхронизация выбранного языка при изменении на другой странице
function synchronizeLanguageAcrossPages() {
    // При изменении языка на login.html
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            // Сохранить в sessionStorage для синхронизации
            sessionStorage.setItem('lastSelectedLanguage', e.target.value);
        });
    }
    
    // При загрузке страницы - проверить предыдущий выбор
    const lastLanguage = sessionStorage.getItem('lastSelectedLanguage');
    if (lastLanguage) {
        changeLanguage(lastLanguage);
    }
}

// Вызовите при загрузке страницы
document.addEventListener('DOMContentLoaded', synchronizeLanguageAcrossPages);
-->

<!-- ============================================
3. ОТПРАВКА ДАННЫХ НА СЕРВЕР
============================================ -->

<!--
Замените имитацию на реальный API запрос в login-script.js:
-->

<!--
// БЫЛО: Имитация загрузки
setTimeout(() => {
    // ...
}, 1500);

// СТАЛО: Реальный запрос на сервер
fetch('https://api.example.com/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,
        password: password,
        rememberMe: rememberMe
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Login failed');
    }
    return response.json();
})
.then(data => {
    console.log('Login successful:', data);
    
    // Сохранить токен
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userId', data.userId);
    
    // Показать успешное сообщение
    loadingSpinner.classList.remove('show');
    successMessage.classList.add('show');
    
    // Перенаправить
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 2000);
})
.catch(error => {
    console.error('Error:', error);
    loadingSpinner.classList.remove('show');
    
    const currentLang = localStorage.getItem('preferred-lang') || 'en';
    showError('email', 'Login failed. Please try again.');
});
-->

<!-- ============================================
4. ЗАЩИТА МАРШРУТОВ (ROUTE PROTECTION)
============================================ -->

<!--
Добавьте этот код в главную страницу (index.html) 
для защиты от несанкционированного доступа:
-->

<!--
<script>
    // Проверить, авторизован ли пользователь
    function checkAuthentication() {
        const authToken = localStorage.getItem('authToken');
        const isProtectedPage = window.location.pathname.includes('dashboard');
        
        if (isProtectedPage && !authToken) {
            // Перенаправить на страницу входа
            window.location.href = 'login.html';
        }
    }
    
    // Вызвать при загрузке
    document.addEventListener('DOMContentLoaded', checkAuthentication);
    
    // Функция выхода (logout)
    function logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('rememberedEmail');
        window.location.href = 'login.html';
    }
</script>
-->

<!-- ============================================
5. РАСШИРЕННАЯ ВАЛИДАЦИЯ (BACKEND)
============================================ -->

<!--
Пример backend эндпоинта (Node.js/Express):
-->

/*
app.post('/api/login', async (req, res) => {
    const { email, password, rememberMe } = req.body;
    
    // Валидация на сервере
    if (!validateEmail(email)) {
        return res.status(400).json({ 
            error: 'Invalid email format' 
        });
    }
    
    if (password.length < 6) {
        return res.status(400).json({ 
            error: 'Password must be at least 6 characters' 
        });
    }
    
    try {
        // Поиск пользователя в БД
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(401).json({ 
                error: 'Email or password incorrect' 
            });
        }
        
        // Проверка пароля
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ 
                error: 'Email or password incorrect' 
            });
        }
        
        // Создание JWT токена
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        // Логирование входа
        await LoginLog.create({
            userId: user._id,
            timestamp: new Date(),
            ipAddress: req.ip
        });
        
        res.json({
            token: token,
            userId: user._id,
            email: user.email,
            name: user.name
        });
        
    } catch (error) {
        res.status(500).json({ 
            error: 'Server error' 
        });
    }
});
*/

<!-- ============================================
6. ДВУХФАКТОРНАЯ АУТЕНТИФИКАЦИЯ (2FA)
============================================ -->

<!--
HTML элемент для 2FA кода:
-->

<!--
<div id="2fa-container" style="display: none;" class="form-group">
    <label for="2fa-code" data-i18n="2fa-code-label">Enter 2FA Code</label>
    <div class="input-wrapper">
        <span class="input-icon">🔐</span>
        <input 
            type="text" 
            id="2fa-code" 
            name="2fa-code" 
            placeholder="000000"
            maxlength="6"
            required
        >
    </div>
</div>

<script>
    // Показать поле 2FA если требуется
    async function handle2FA(userId) {
        const twoFAContainer = document.getElementById('2fa-container');
        twoFAContainer.style.display = 'block';
        
        // Запросить вввод 2FA кода
        // ...
    }
</script>
-->

<!-- ============================================
7. СОЦИАЛЬНАЯ АУТЕНТИФИКАЦИЯ (OAUTH)
============================================ -->

<!--
Пример интеграции с Google OAuth:
-->

<!--
<!-- Google SDK -->
<script src="https://accounts.google.com/gsi/client" async defer></script>

<script>
    window.onload = function () {
        google.accounts.id.initialize({
            client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
            callback: handleCredentialResponse
        });
        
        google.accounts.id.renderButton(
            document.querySelector('.google-btn'),
            { theme: "outline", size: "large" }
        );
    };
    
    function handleCredentialResponse(response) {
        // response.credential содержит JWT
        console.log("Encoded JWT ID token: " + response.credential);
        
        // Отправить на сервер для проверки
        fetch('/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: response.credential
            })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('authToken', data.token);
            window.location.href = 'dashboard.html';
        });
    }
</script>
-->

<!-- ============================================
8. ОБРАБОТКА ЗАБЫТОГО ПАРОЛЯ
============================================ -->

<!--
HTML страница для восстановления пароля:
-->

<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Forgot Password</title>
    <link rel="stylesheet" href="login-style.css">
</head>
<body>
    <div class="login-container">
        <div class="login-form-container">
            <div class="glassmorphism-card">
                <div class="form-header">
                    <h2>Reset Password</h2>
                    <p>Enter your email to receive reset link</p>
                </div>
                
                <form id="forgot-form">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <div class="input-wrapper">
                            <span class="input-icon">✉️</span>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                required
                            >
                        </div>
                    </div>
                    
                    <button type="submit" class="btn-submit">
                        <span>Send Reset Link</span>
                        <span>→</span>
                    </button>
                </form>
                
                <div class="form-footer">
                    <p>Remember your password?</p>
                    <a href="login.html">Go back to login</a>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        document.getElementById('forgot-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            
            try {
                const response = await fetch('/api/auth/forgot-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email })
                });
                
                if (response.ok) {
                    alert('Reset link sent to your email');
                    window.location.href = 'login.html';
                } else {
                    alert('Email not found');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    </script>
</body>
</html>
-->

<!-- ============================================
9. КЭШИРОВАНИЕ И ПРОИЗВОДИТЕЛЬНОСТЬ
============================================ -->

<!--
Оптимизация производительности:
-->

/*
// Кэш переводов для избежания повторной обработки
const translationCache = new Map();

function getCachedTranslation(lang, key) {
    const cacheKey = `${lang}_${key}`;
    
    if (translationCache.has(cacheKey)) {
        return translationCache.get(cacheKey);
    }
    
    const translation = loginTranslations[lang][key];
    translationCache.set(cacheKey, translation);
    
    return translation;
}

// Отложенная загрузка скриптов
function lazyLoadScripts() {
    const scripts = [
        'analytics.js',
        'tracking.js',
        'notifications.js'
    ];
    
    window.addEventListener('load', () => {
        scripts.forEach(script => {
            const scriptEl = document.createElement('script');
            scriptEl.src = script;
            scriptEl.async = true;
            document.body.appendChild(scriptEl);
        });
    });
}
*/

<!-- ============================================
10. АНАЛИТИКА И ЛОГИРОВАНИЕ
============================================ -->

/*
// Отслеживание попыток входа
function trackLoginAttempt(email, success) {
    const event = {
        type: 'login_attempt',
        email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3'), // Скрыть часть email
        success: success,
        timestamp: new Date().toISOString(),
        language: localStorage.getItem('preferred-lang'),
        userAgent: navigator.userAgent
    };
    
    // Отправить на сервер аналитики
    fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
    }).catch(err => console.error('Analytics error:', err));
}

// Использование:
loginForm.addEventListener('submit', async (e) => {
    // ... валидация ...
    
    trackLoginAttempt(email, true);  // После успешного входа
});
*/

<!-- ============================================
11. БЕЗОПАСНОСТЬ (SECURITY BEST PRACTICES)
============================================ -->

/*
// 1. Никогда не сохраняйте пароль в localStorage
// ❌ НЕПРАВИЛЬНО:
localStorage.setItem('userPassword', password);

// ✅ ПРАВИЛЬНО:
// Только сохраняйте токены и безопасные данные

// 2. Используйте HTTPS
// ❌ НЕПРАВИЛЬНО:
fetch('http://api.example.com/login', ...);

// ✅ ПРАВИЛЬНО:
fetch('https://api.example.com/login', ...);

// 3. Добавьте CSRF защиту
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
fetch('/api/login', {
    method: 'POST',
    headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
});

// 4. Rate limiting (на сервере)
// Ограничьте количество попыток входа с одного IP

// 5. Sanitize input
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
*/

<!-- ============================================
12. ТЕСТИРОВАНИЕ
============================================ -->

/*
// Примеры для тестирования:

// Тест валидации email
const testEmails = [
    'valid@example.com',      // ✓ Валидный
    'invalid.email',          // ✗ Невалидный (нет @)
    'test@',                  // ✗ Невалидный (нет домена)
    '@example.com',           // ✗ Невалидный (нет имени)
];

testEmails.forEach(email => {
    console.log(`${email}: ${validateEmail(email)}`);
});

// Тест валидации пароля
const testPasswords = [
    '12345',          // ✗ Меньше 6 символов
    '123456',         // ✓ Ровно 6 символов
    'MyPassword123',  // ✓ Больше 6 символов
];

testPasswords.forEach(pwd => {
    console.log(`${pwd}: ${validatePassword(pwd)}`);
});

// Тест смены языка
['en', 'ja', 'zh', 'de', 'it', 'es', 'fr', 'ko', 'ru'].forEach(lang => {
    changeLanguage(lang);
    console.log(`Language changed to: ${lang}`);
});
*/

<!-- ============================================
13. ВСПОМОГАТЕЛЬНЫЕ CSS КЛАССЫ
============================================ -->

/*
// Используйте эти классы для быстрого форматирования
*/

<!-- Показать элемент с анимацией -->
<!--
<div class="show">
    <!-- будет видимым с opacity: 1 -->
</div>

<!-- Скрыть элемент -->
<!--
<div class="hidden">
    <!-- будет скрыт -->
</div>

<!-- Эффект загрузки -->
<!--
<div class="loading">
    <div class="spinner"></div>
</div>

<!-- Эффект успеха -->
<!--
<div class="success">
    <span class="success-icon">✅</span>
    <p>Success message</p>
</div>

<!-- Эффект ошибки -->
<!--
<div class="error">
    <span class="error-icon">❌</span>
    <p>Error message</p>
</div>
-->

<!-- ============================================
КОНЕЦ ПРИМЕРОВ И ИНТЕГРАЦИИ
============================================ -->
