
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kişisel Gelişim Merkezi</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary-color: #3a7bd5;
            --secondary-color: #00d2ff;
            --dark-color: #333;
            --light-color: #f4f4f4;
            --success-color: #5cb85c;
        }

        body {
            line-height: 1.6;
            background-color: #f9f9f9;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-links li {
            margin-left: 1.5rem;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .nav-links a:hover {
            color: #f0f0f0;
            border-bottom: 2px solid white;
        }

        .mobile-menu-btn {
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/api/placeholder/1200/600') no-repeat center center/cover;
            height: 60vh;
            display: flex;
            align-items: center;
            text-align: center;
            color: white;
            margin-top: 60px;
        }

        .hero-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        .btn {
            display: inline-block;
            background: var(--primary-color);
            color: white;
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .btn:hover {
            background: var(--secondary-color);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* About Section */
        .about {
            padding: 5rem 0;
            background-color: white;
        }

        .section-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .section-header h2 {
            font-size: 2.5rem;
            color: var(--dark-color);
            position: relative;
            padding-bottom: 10px;
        }

        .section-header h2::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        }

        .about-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        .about-text {
            flex: 1;
            min-width: 300px;
            padding: 1rem;
        }

        .about-text h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
        }

        .about-image {
            flex: 1;
            min-width: 300px;
            padding: 1rem;
            text-align: center;
        }

        .about-image img {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* Services Section */
        .services {
            padding: 5rem 0;
            background-color: #f9f9f9;
        }

        .services-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
        }

        .service-card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            transition: all 0.3s ease;
            width: 300px;
            text-align: center;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            padding: 2rem;
            font-size: 3rem;
            color: white;
        }

        .service-content {
            padding: 1.5rem;
        }

        .service-content h3 {
            margin-bottom: 1rem;
            color: var(--dark-color);
        }

        /* Blog Section */
        .blog {
            padding: 5rem 0;
            background-color: white;
        }

        .blog-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
        }

        .blog-card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .blog-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .blog-image {
            height: 200px;
            overflow: hidden;
        }

        .blog-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-image img {
            transform: scale(1.1);
        }

        .blog-content {
            padding: 1.5rem;
        }

        .blog-content h3 {
            margin-bottom: 0.5rem;
            color: var(--dark-color);
        }

        .blog-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: #777;
        }

        .read-more {
            display: inline-block;
            margin-top: 1rem;
            color: var(--primary-color);
            font-weight: bold;
            text-decoration: none;
        }

        .read-more:hover {
            color: var(--secondary-color);
        }

        /* Newsletter */
        .newsletter {
            padding: 5rem 0;
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            color: white;
            text-align: center;
        }

        .newsletter h2 {
            margin-bottom: 1rem;
        }

        .newsletter p {
            max-width: 600px;
            margin: 0 auto 2rem auto;
        }

        .newsletter-form {
            display: flex;
            max-width: 500px;
            margin: 0 auto;
        }

        .newsletter-form input {
            flex: 1;
            padding: 0.8rem;
            border: none;
            border-radius: 5px 0 0 5px;
            font-size: 1rem;
        }

        .newsletter-form button {
            padding: 0 1.5rem;
            background-color: var(--dark-color);
            color: white;
            border: none;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .newsletter-form button:hover {
            background-color: #222;
        }

        /* Footer */
        footer {
            background-color: var(--dark-color);
            color: white;
            padding: 3rem 0 1rem;
        }

        .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .footer-column {
            flex: 1;
            min-width: 250px;
            margin-bottom: 2rem;
        }

        .footer-column h3 {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-column h3::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background: var(--primary-color);
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 0.8rem;
        }

        .footer-links a {
            color: #ddd;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .footer-links a:hover {
            color: white;
            padding-left: 5px;
        }

        .social-links {
            display: flex;
            margin-top: 1rem;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            margin-right: 10px;
            border-radius: 50%;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background-color: var(--primary-color);
            transform: translateY(-3px);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Testimonials */
        .testimonials {
            padding: 5rem 0;
            background-color: #f9f9f9;
        }

        .testimonials-container {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            overflow: hidden;
        }

        .testimonial-slide {
            display: none;
            text-align: center;
            padding: 2rem;
        }

        .testimonial-slide.active {
            display: block;
            animation: fadeIn 1s;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .testimonial-slide img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 1.5rem;
            border: 5px solid white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .testimonial-slide p {
            font-style: italic;
            margin-bottom: 1.5rem;
            color: #555;
        }

        .testimonial-slide h3 {
            color: var(--primary-color);
            margin-bottom: 0.3rem;
        }

        .testimonial-slide .position {
            font-size: 0.9rem;
            color: #777;
        }

        .testimonial-buttons {
            text-align: center;
            margin-top: 2rem;
        }

        .testimonial-btn {
            background-color: #ddd;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: inline-block;
            margin: 0 5px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .testimonial-btn.active {
            background-color: var(--primary-color);
            transform: scale(1.2);
        }

        /* Contact */
        .contact {
            padding: 5rem 0;
            background-color: white;
        }

        .contact-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .contact-info {
            flex: 1;
            min-width: 300px;
            padding: 1rem;
        }

        .contact-info h3 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: var(--primary-color);
        }

        .contact-item {
            display: flex;
            margin-bottom: 1.5rem;
        }

        .contact-icon {
            margin-right: 1rem;
            color: var(--primary-color);
            font-size: 1.5rem;
        }

        .contact-form {
            flex: 1;
            min-width: 300px;
            padding: 1rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-control {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }

        textarea.form-control {
            height: 150px;
            resize: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
                position: absolute;
                top: 60px;
                left: 0;
                background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
                width: 100%;
                flex-direction: column;
                padding: 1rem 0;
                text-align: center;
            }

            .nav-links.show {
                display: flex;
            }

            .nav-links li {
                margin: 1rem 0;
            }

            .mobile-menu-btn {
                display: block;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .about-content, .contact-container {
                flex-direction: column;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 2rem;
            }

            .section-header h2 {
                font-size: 2rem;
            }

            .service-card, .blog-card {
                width: 100%;
            }

            .newsletter-form {
                flex-direction: column;
            }

            .newsletter-form input, .newsletter-form button {
                width: 100%;
                border-radius: 5px;
                margin-bottom: 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <nav>
                <div class="logo">Kişisel Gelişim</div>
                <ul class="nav-links">
                    <li><a href="#anasayfa">Ana Sayfa</a></li>
                    <li><a href="#hakkimizda">Hakkımızda</a></li>
                    <li><a href="#hizmetler">Hizmetler</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#iletisim">İletişim</a></li>
                </ul>
                <div class="mobile-menu-btn" id="mobileMenuBtn">☰</div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="anasayfa">
        <div class="container">
            <div class="hero-content">
                <h1>Kişisel Gelişiminizi Güçlendirin</h1>
                <p>Potansiyelinizi keşfedin, hedeflerinize ulaşın ve hayatınızda olumlu değişimler yaratın.</p>
                <a href="#hizmetler" class="btn">Hizmetlerimizi Keşfedin</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="hakkimizda">
        <div class="container">
            <div class="section-header">
                <h2>Hakkımızda</h2>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>Misyonumuz</h3>
                    <p>Kişisel Gelişim Merkezi olarak, bireylerin kendilerini keşfetmelerine, potansiyellerini en üst düzeye çıkarmalarına ve hayatlarında anlamlı değişimler yaratmalarına yardımcı oluyoruz.</p>
                    <p>2010 yılından bu yana, binlerce kişiye kişisel gelişim yolculuklarında rehberlik ettik. Uzman kadromuz, modern yaklaşımımız ve kişiye özel programlarımızla fark yaratıyoruz.</p>
                    <p>İnanıyoruz ki, herkesin içinde sınırsız bir potansiyel vardır ve doğru rehberlik ile bu potansiyel açığa çıkarılabilir.</p>
                </div>
                <div class="about-image">
                    <img src="/api/placeholder/500/300" alt="Kişisel Gelişim Ekibi">
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="hizmetler">
        <div class="container">
            <div class="section-header">
                <h2>Hizmetlerimiz</h2>
            </div>
            <div class="services-container">
                <div class="service-card">
                    <div class="service-icon">🧠</div>
                    <div class="service-content">
                        <h3>Bireysel Koçluk</h3>
                        <p>Kişisel hedeflerinize ulaşmanız için bire bir koçluk hizmeti sunuyoruz. Uzman koçlarımız, potansiyelinizi en üst düzeye çıkarmanıza yardımcı olacak.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">📚</div>
                    <div class="service-content">
                        <h3>Kişisel Gelişim Atölyeleri</h3>
                        <p>Grup çalışmaları ile kişisel gelişiminizi destekleyen interaktif atölyeler düzenliyoruz. İletişim, liderlik, zaman yönetimi gibi konularda kendinizi geliştirin.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎯</div>
                    <div class="service-content">
                        <h3>Kariyer Danışmanlığı</h3>
                        <p>Kariyerinizde doğru adımları atmanızı sağlayacak profesyonel danışmanlık hizmetimiz ile hedeflerinize daha hızlı ulaşın.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">🧘</div>
                    <div class="service-content">
                        <h3>Mindfulness Eğitimi</h3>
                        <p>Günlük yaşamın stresinden uzaklaşıp, ana odaklanma ve farkındalık becerilerinizi geliştirmenize yardımcı oluyoruz.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
        <div class="container">
            <div class="section-header">
                <h2>Mutlu Katılımcılarımız</h2>
            </div>
            <div class="testimonials-container">
                <div class="testimonial-slide active">
                    <img src="/api/placeholder/200/200" alt="Katılımcı">
                    <p>"Kişisel gelişim programları hayatımda büyük bir değişim yarattı. Kendimi daha iyi tanıyor ve hedeflerime daha kararlı adımlarla ilerliyorum."</p>
                    <h3>Ayşe Yılmaz</h3>
                    <div class="position">Yazılım Mühendisi</div>
                </div>
                <div class="testimonial-slide">
                    <img src="/api/placeholder/200/200" alt="Katılımcı">
                    <p>"Koçluk seansları sayesinde kariyerimde istediğim atılımı gerçekleştirdim. Profesyonel yaklaşımları ve samimi destekleri için teşekkür ederim."</p>
                    <h3>Mehmet Kaya</h3>
                    <div class="position">Pazarlama Yöneticisi</div>
                </div>
                <div class="testimonial-slide">
                    <img src="/api/placeholder/200/200" alt="Katılımcı">
                    <p>"Mindfulness eğitimi ile stres seviyem azaldı ve yaşam kalitem arttı. Kendimi daha dengeli ve huzurlu hissediyorum."</p>
                    <h3>Zeynep Demir</h3>
                    <div class="position">Doktor</div>
                </div>
                <div class="testimonial-buttons">
                    <span class="testimonial-btn active" data-slide="0"></span>
                    <span class="testimonial-btn" data-slide="1"></span>
                    <span class="testimonial-btn" data-slide="2"></span>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section class="blog" id="blog">
        <div class="container">
            <div class="section-header">
                <h2>Blog</h2>
            </div>
            <div class="blog-container">
                <div class="blog-card">
                    <div class="blog-image">
                        <img src="/api/placeholder/400/250" alt="Blog Görseli">
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span>1 Mart 2025</span>
                            <span>Kişisel Gelişim</span>
                        </div>
                        <h3>Etkili Zaman Yönetimi İçin 7 Altın Kural</h3>
                        <p>Zamanınızı daha verimli kullanmak ve hayatınızdaki öncelikleri belirlemenin yollarını öğrenin.</p>
                        <a href="#" class="read-more">Devamını Oku</a>
                    </div>
                </div>
                <div class="blog-card">
                    <div class="blog-image">
                        <img src="/api/placeholder/400/250" alt="Blog Görseli">
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span>25 Şubat 2025</span>
                            <span>Mindfulness</span>
                        </div>
                        <h3>Günlük Hayatta Farkındalık Pratiği</h3>
                        <p>Günlük rutininiz içerisinde mindfulness pratiği yapmanın etkili yolları ve sağladığı faydalar.</p>
                        <a href="#" class="read-more">Devamını Oku</a>
                    </div>
                </div>
                <div class="blog-card">
                    <div class="blog-image">
                        <img src="/api/placeholder/400/250" alt="Blog Görseli">
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span>18 Şubat 2025</span>
                            <span>Liderlik</span>
                        </div>
                        <h3>Liderlik Becerilerinizi Geliştirmenin 5 Yolu</h3>
                        <p>İş hayatında ve özel hayatınızda liderlik vasıflarınızı güçlendirmenin pratik yöntemlerini keşfedin.</p>
                        <a href="#" class="read-more">Devamını Oku</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter">
        <div class="container">
            <h2>Bültenimize Abone Olun</h2>
            <p>Kişisel gelişim ipuçları, etkinlik duyuruları ve yeni blog yazılarımızdan haberdar olmak için e-posta listemize kaydolun.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="E-posta adresiniz" required>
                <button type="submit">Abone Ol</button>
            </form>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="iletisim">
        <div class="container">
            <div class="section-header">
                <h2>İletişim</h2>
            </div>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Bize Ulaşın</h3>
                    <div class="contact-item">
                        <div class="contact-icon">📍</div>
                        <div>
                            <h4>Adres</h4>
                            <p>Atatürk Bulvarı No: 123, Çankaya, Ankara</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📞</div>
                        <div>
                            <h4>Telefon</h4>
                            <p>+90 312 123 45 67</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">✉️</div>
                        <div>
                            <h4>E-posta</h4>
                            <p>info@kisiselgelisim.com</p>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#" title="Facebook">FB</a>
                        <a href="#" title="Twitter">TW</a>
                        <a href="#" title="Instagram">IG</a>
                        <a href="#" title="LinkedIn">LI</a>
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Adınız" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="E-posta adresiniz" required>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Konu" required>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" placeholder="Mesajınız" required></textarea>
                        </div>
                        <button type="submit" class="btn">Mesaj Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-container">
                <div class="footer-column">
                    <h3>Kişisel Gelişim</h3>
                    <p>Potansiyelinizi keşfedin, hedeflerinize ulaşın ve hayatınızda olumlu değişimler yaratın.</p>
                </div>
                <div class="footer-column">
                    <h3>Hızlı Bağlantılar</h3>
                    <ul class="footer-links">
                        <li><a href="#anasayfa">Ana Sayfa</a></li>
                        <li><a href
