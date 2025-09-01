// إضافة تأثيرات للكروت
document.addEventListener('DOMContentLoaded', function() {
    // تأثير ظهور الكروت تدريجياً
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // تأثير النقر على الكروت
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // تأثير التمرير السلس للروابط
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // تأثير ظهور العناصر عند التمرير
    const heroBox = document.querySelector('.hero-box');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroBox && heroContent) {
        heroBox.style.opacity = '0';
        heroBox.style.transform = 'translateY(50px)';
        heroBox.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            heroBox.style.opacity = '1';
            heroBox.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // تأثير الأيقونات في الفوتر
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
    
    // تأثير ظهور كروت الصفحات الفرعية
    const pageCards = document.querySelectorAll('.quotation-card, .summary-card, .doc-card, .video-card, .team-card');
    pageCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
    
    // تأثير ظهور معرض الصور
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px) scale(0.9)';
        item.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
        }, 300 + (index * 200));
    });
});

// إضافة تأثيرات إضافية للتفاعل
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(25, 32, 47, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #19202f 0%, #2a3441 100%)';
        header.style.backdropFilter = 'none';
    }
});

// تحسين تجربة المستخدم على الأجهزة المحمولة
function handleMobileMenu() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    if (window.innerWidth <= 768) {
        nav.style.display = 'none';
        
        // إضافة زر القائمة للموبايل
        if (!document.querySelector('.mobile-menu-btn')) {
            const mobileBtn = document.createElement('button');
            mobileBtn.className = 'mobile-menu-btn';
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileBtn.style.cssText = `
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            `;
            
            mobileBtn.addEventListener('click', function() {
                nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
            });
            
            header.querySelector('.container').appendChild(mobileBtn);
        }
    } else {
        nav.style.display = 'flex';
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        if (mobileBtn) mobileBtn.remove();
    }
}

// استدعاء دالة القائمة عند تحميل الصفحة وتغيير حجم النافذة
window.addEventListener('load', handleMobileMenu);
window.addEventListener('resize', handleMobileMenu);

// إضافة تأثيرات إضافية للكروت
document.addEventListener('DOMContentLoaded', function() {
    // تأثير النقر على كروت الصفحات الفرعية
    const pageCards = document.querySelectorAll('.quotation-card, .summary-card, .doc-card, .video-card, .team-card');
    pageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // تأثير الأزرار
    const buttons = document.querySelectorAll('.download-btn, .watch-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // تأثير أيقونات التواصل الاجتماعي في كروت الفريق
    const teamSocialIcons = document.querySelectorAll('.social-icon');
    teamSocialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // تأثير مهارات الفريق
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px)';
        skill.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
    
    // تأثير معرض الصور
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        // تأثير النقر على عناصر المعرض
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
        
        // تأثير التمرير فوق الصور
        const image = item.querySelector('img');
        if (image) {
            item.addEventListener('mouseenter', function() {
                image.style.transform = 'scale(1.1)';
            });
            
            item.addEventListener('mouseleave', function() {
                image.style.transform = 'scale(1)';
            });
        }
    });
    
    // تأثير ظهور العناصر عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const galleryObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, observerOptions);
    
    galleryItems.forEach(item => {
        galleryObserver.observe(item);
    });
}); 

