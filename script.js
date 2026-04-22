/* ============================================
   PORTFOLIO - PREMIUM INTERACTIVE ENGINE
   ============================================ */

document.addEventListener("DOMContentLoaded", function() {

    // ========================
    // 1. SCROLL PROGRESS BAR
    // ========================
    const progressBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (progressBar) progressBar.style.width = scrollPercent + '%';
    }, { passive: true });

    // ========================
    // 2. NAV SCROLL EFFECT
    // ========================
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });

    // ========================
    // 3. SMOOTH SCROLL FOR NAV LINKS
    // ========================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ========================
    // 4. FADE-IN OBSERVER (Intersection Observer)
    // ========================
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(el => observer.observe(el));

    // ========================
    // 5. GLOWING CUSTOM CURSOR & PARTICLES
    // ========================
    const cursor = document.getElementById('glow-cursor');
    if (cursor) {
        let lastTime = 0;
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            const now = Date.now();
            if (now - lastTime > 15) {
                createTrailParticle(e.clientX, e.clientY);
                createTrailParticle(e.clientX, e.clientY);
                lastTime = now;
            }
        });

        // Hiệu ứng phình to chớp một cái khi click
        document.addEventListener('mousedown', () => cursor.classList.add('active'));
        document.addEventListener('mouseup', () => cursor.classList.remove('active'));
    }

    // ========================
    // 5. SAKURA PETALS (Improved)
    // ========================
    createSakuraPetals();

    // ========================
    // 6. ESC KEY TO CLOSE MODAL
    // ========================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
});

// SAKURA PETALS ENGINE
function createSakuraPetals() {
    const count = window.innerWidth < 768 ? 12 : 22;
    const body = document.body;

    for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.classList.add('sakura-petal');

        const size = Math.random() * 10 + 8;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDelay = `${Math.random() * 12}s`;
        petal.style.animationDuration = `${Math.random() * 6 + 8}s`;
        petal.style.opacity = (Math.random() * 0.4 + 0.3).toFixed(2);

        body.appendChild(petal);
    }
}

// CURSOR TRAIL ENGINE
function createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'cursor-particle';
    
    // Bảng màu cute mix giữa tone Sakura và Antigravity
    const colors = ['#ff8ca3', '#ffb6c1', '#fecfef', '#a0c4ff', '#9bf6ff', '#ffd6a5'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Random góc quay và quãng đường bay
    const angle = Math.random() * 360;
    const dist = Math.random() * 50 + 15; 
    
    particle.style.setProperty('--rot', `${angle}deg`);
    particle.style.setProperty('--dist', `${dist}px`);
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 800);
}

// DỮ LIỆU DỰ ÁN CHO MODAL
const projectData = {
    "kim-tay-nguyen": {
        title: "Dẫn Chứng: Tiệm Sách Tiếng Anh Kim Tây Nguyên",
        description: "Quản lý tổng thể 3 Fanpage kênh hệ thống. Số liệu dưới đây được trích xuất trực tiếp từ Meta Business Suite đo lường tổng hiệu suất (tăng trưởng) trong 90 ngày qua.",
        stats: [
            { label: "Lượt Xem Nội Dung", value: "9.9 Triệu" },
            { label: "Lượt Tiếp Cận (Reach)", value: "1.3 Triệu" },
            { label: "Tương Tác Nội Dung", value: "105.9K" }
        ],
        details: `
            <p style="margin-bottom: 20px;"><strong><i class="fa-solid fa-link"></i> Fanpage Quản Lý:</strong> <br>
                1. <a href="https://www.facebook.com/kimchung.1982" target="_blank" style="color:var(--accent-1)">Fanpage kimchung.1982</a> <br>
                2. <a href="https://www.facebook.com/profile.php?id=61581203753514" target="_blank" style="color:var(--accent-1)">Fanpage Profile Tiệm Sách</a> <br>
                3. <a href="https://www.facebook.com/KimTayNguyen4.0" target="_blank" style="color:var(--accent-1)">Fanpage KimTayNguyen4.0</a>
            </p>
            
            <h4 style="margin-top: 20px; margin-bottom: 15px; color: var(--text-primary); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">📈 Toàn cảnh Hiệu Suất Hệ Thống (Kim Tây Nguyên):</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 15px; text-align: center;">
                <i class="fa-brands fa-facebook"></i> Facebook · 28 ngày qua: 21/3/2026 – 17/4/2026
            </p>

            <!-- META DASHBOARD GRID -->
            <div class="meta-grid">
                <!-- Lượt xem -->
                <div class="meta-card">
                    <div class="meta-label">👁️ Lượt xem</div>
                    <div class="meta-value">2,6 Triệu</div>
                    <div class="meta-sub" style="margin-top: 10px;">Người xem: 462.133</div>
                    <div class="mini-bar-chart">
                        <div class="mini-bar" style="height:35%"></div>
                        <div class="mini-bar" style="height:50%"></div>
                        <div class="mini-bar" style="height:40%"></div>
                        <div class="mini-bar" style="height:80%"></div>
                        <div class="mini-bar" style="height:60%"></div>
                        <div class="mini-bar" style="height:30%"></div>
                        <div class="mini-bar" style="height:25%"></div>
                        <div class="mini-bar" style="height:20%"></div>
                    </div>
                </div>

                <!-- Lượt tương tác -->
                <div class="meta-card">
                    <div class="meta-label">❤️ Lượt tương tác</div>
                    <div class="meta-value">30,1K</div>
                    <span class="meta-growth"><i class="fa-solid fa-arrow-up"></i> 3,2%</span>
                    <div class="meta-sub">
                        Từ người theo dõi: <strong>15.360</strong> <span class="meta-growth" style="font-size:0.75rem;"><i class="fa-solid fa-arrow-up"></i> 13,2%</span><br>
                        Từ người chưa theo dõi: <strong>14.697</strong>
                    </div>
                </div>

                <!-- Lượt truy cập -->
                <div class="meta-card">
                    <div class="meta-label">🔗 Lượt truy cập trang</div>
                    <div class="meta-value">52,6K</div>
                    <div class="mini-bar-chart">
                        <div class="mini-bar" style="height:40%"></div>
                        <div class="mini-bar" style="height:60%"></div>
                        <div class="mini-bar" style="height:55%"></div>
                        <div class="mini-bar" style="height:80%"></div>
                        <div class="mini-bar" style="height:70%"></div>
                        <div class="mini-bar" style="height:45%"></div>
                        <div class="mini-bar" style="height:35%"></div>
                        <div class="mini-bar" style="height:30%"></div>
                    </div>
                </div>

                <!-- Lượt theo dõi -->
                <div class="meta-card">
                    <div class="meta-label">👥 Lượt theo dõi mới</div>
                    <div class="meta-value">2,9K</div>
                    <span class="meta-growth"><i class="fa-solid fa-arrow-up"></i> 14,6%</span>
                    <div class="meta-sub">
                        Tổng followers thực: <strong>2.624</strong> <span class="meta-growth" style="font-size:0.75rem;"><i class="fa-solid fa-arrow-up"></i> 12,5%</span><br>
                        Lượt bỏ theo dõi: 305 <span class="meta-growth" style="font-size:0.75rem;"><i class="fa-solid fa-arrow-up"></i> 36,2%</span>
                    </div>
                </div>
            </div>

            <!-- DONUT: ORGANIC VS FOLLOWER -->
            <div style="background: linear-gradient(135deg,#fffafb,#fff5f7); padding: 18px; border-radius: 14px; border: 1px solid #ffe3e8; margin: 20px 0;">
                <div class="meta-label" style="font-size:0.85rem; color:var(--text-secondary); font-weight:600; margin-bottom: 10px;">📊 Phân bổ nguồn lượt xem</div>
                <div class="donut-container">
                    <div class="donut" style="background: conic-gradient(var(--accent-1) 0% 58.8%, #e5e7eb 58.8% 100%);"><div class="donut-inner">58,8%</div></div>
                    <div>
                        <div style="font-size:0.9rem; margin-bottom:4px;"><span style="display:inline-block;width:10px;height:10px;background:var(--accent-1);border-radius:50%;margin-right:6px;"></span><strong>58,8%</strong> Từ người chưa theo dõi <em style="color:#22c55e; font-size:0.8rem;">(Organic Reach)</em></div>
                        <div style="font-size:0.9rem;"><span style="display:inline-block;width:10px;height:10px;background:#e5e7eb;border-radius:50%;margin-right:6px;"></span><strong>41,2%</strong> Từ người theo dõi <em style="color:#22c55e; font-size:0.8rem;">(↑13,1%)</em></div>
                    </div>
                </div>
            </div>
            
            <h4 style="margin-top: 20px; margin-bottom: 15px; color: var(--text-primary); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">Một số nội dung tiêu biểu từ fanpage:</h4>
            
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid var(--glass-border);">
                <h4 style="color: var(--text-primary); margin-bottom: 15px;">🌸 Bài viết tiêu biểu: Bầu Cua Tôm Cá</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 30px;">
                    <div style="flex: 1; min-width: 250px;">
                        <ul style="color: var(--text-secondary); margin-bottom: 15px; font-size: 0.95rem;">
                            <li style="margin-bottom: 10px;"><strong>Lượt Tương Tác:</strong> <span style="color:var(--accent-1); font-weight:bold; font-size: 1.1rem;">1,300+ Reactions</span></li>
                            <li style="margin-bottom: 10px;"><strong>Lượt Chia Sẻ:</strong> <span style="color:var(--accent-1); font-weight:bold; font-size: 1.1rem;">821 Shares</span></li>
                            <li style="margin-bottom: 10px;"><strong>Bình luận:</strong> 29 Comments</li>
                        </ul>
                        <a href="https://www.facebook.com/photo/?fbid=3521612304646716&set=a.355873627887282" target="_blank" class="btn-secondary" style="padding: 8px 15px; font-size: 0.9rem; margin-top: 10px; display: inline-flex;"><i class="fa-brands fa-facebook" style="margin-right: 5px;"></i> Click xem Bài viết gốc</a>
                    </div>
                    <div style="flex: 1; min-width: 250px; text-align: center;">
                        <img src="post1.png" onerror="this.parentElement.style.display='none'" alt="Bầu cua tôm cá" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
                    </div>
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid var(--glass-border);">
                <h4 style="color: var(--text-primary); margin-bottom: 15px;">📚 Bài viết viral: List phim Học Tiếng Anh</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 30px;">
                    <div style="flex: 1; min-width: 250px;">
                        <ul style="color: var(--text-secondary); margin-bottom: 15px; font-size: 0.95rem;">
                            <li style="margin-bottom: 10px;"><strong>Lượt Tương Tác:</strong> <span style="color:var(--accent-1); font-weight:bold; font-size: 1.1rem;">1,100+ Reactions</span></li>
                            <li style="margin-bottom: 10px;"><strong>Lượt Chia Sẻ:</strong> <span style="color:var(--accent-1); font-weight:bold; font-size: 1.1rem;">1,400+ Shares</span></li>
                            <li style="margin-bottom: 10px;"><strong>Bình luận:</strong> 58 Comments</li>
                        </ul>
                        <p style="color: var(--text-secondary); font-size: 0.95rem;"><strong>Nội dung:</strong> Chia sẻ lộ trình tự học tiếng Anh 3 bước qua các bộ phim Âu Mỹ. Chạm đúng nhu cầu tự học nên lượt Share cực xịn.</p>
                        <a href="https://www.facebook.com/share/p/1Aqp7iP6KG/" target="_blank" class="btn-secondary" style="padding: 8px 15px; font-size: 0.9rem; margin-top: 10px; display: inline-flex;"><i class="fa-brands fa-facebook" style="margin-right: 5px;"></i> Click xem Bài viết gốc</a>
                    </div>
                    <div style="flex: 1; min-width: 250px; text-align: center;">
                        <img src="post2.png" onerror="this.parentElement.style.display='none'" alt="Học tiếng Anh qua phim" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
                    </div>
                </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 15px; border: 1px solid var(--glass-border);">
                <h4 style="color: var(--text-primary); margin-bottom: 15px;">💰 Bài viết chuyển đổi Sales: Giới thiệu Tài khoản Razkids</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 30px;">
                    <div style="flex: 1; min-width: 250px;">
                        <ul style="color: var(--text-secondary); margin-bottom: 15px; font-size: 0.95rem;">
                            <li style="margin-bottom: 10px;"><strong>Lượt Tương Tác:</strong> <span style="color:var(--accent-1); font-weight:bold; font-size: 1.1rem;">274 Reactions</span></li>
                            <li style="margin-bottom: 10px;"><strong>Lượt Chia Sẻ (Đẩy phủ sóng):</strong> <span style="color:var(--accent-1); font-weight:bold; font-size: 1.1rem;">626 Shares</span></li>
                            <li style="margin-bottom: 10px;"><strong>Bình luận (Tạo Lead mượt):</strong> <span style="color:var(--accent-1); font-weight:bold; font-size: 1.1rem;">106 Comments</span></li>
                        </ul>
                        <p style="color: var(--text-secondary); font-size: 0.95rem;"><strong>Mục tiêu Phễu Content:</strong> Viết hướng dẫn cực chi tiết về cách phụ huynh khai thác "thư viện 3.000+ sách" Razkids hiệu quả nhất. Không bán hàng trực diện, thay vào đó tạo nhu cầu cấp bách (Pain point).<br> <br><strong>Kết quả:</strong> Giúp <strong>bùng nổ doanh thu bán tài khoản Razkids</strong> trong tháng đó với hơn trăm bình luận xin tư vấn.</p>
                        <a href="https://www.facebook.com/share/p/1EEFuD3pbu/" target="_blank" class="btn-secondary" style="padding: 8px 15px; font-size: 0.9rem; margin-top: 10px; display: inline-flex;"><i class="fa-brands fa-facebook" style="margin-right: 5px;"></i> Click xem Bài viết gốc</a>
                    </div>
                    <div style="flex: 1; min-width: 250px; text-align: center;">
                        <img src="post3.png" onerror="this.parentElement.style.display='none'" alt="Tài khoản Razkids" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
                    </div>
                </div>
            </div>
            
            <h4 style="margin-top: 30px; margin-bottom: 20px; color: var(--text-primary); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">📸 Tủ Kính Dẫn Chứng Thành Quả</h4>
            <div class="masonry-gallery">
                <img class="masonry-item" src="ktn-gallery-1.jpg" onerror="this.style.display='none'">
                <img class="masonry-item" src="ktn-gallery-2.jpg" onerror="this.style.display='none'">
                <img class="masonry-item" src="ktn-gallery-3.jpg" onerror="this.style.display='none'">
                <img class="masonry-item" src="ktn-gallery-4.jpg" onerror="this.style.display='none'">
                <img class="masonry-item" src="ktn-gallery-5.jpg" onerror="this.style.display='none'">
                <img class="masonry-item" src="ktn-gallery-6.jpg" onerror="this.style.display='none'">
                <img class="masonry-item" src="ktn-gallery-7.jpg" onerror="this.style.display='none'">
                <img class="masonry-item" src="ktn-gallery-8.jpg" onerror="this.style.display='none'">
            </div>
        `
    },
    // Chừa sẵn không gian cho Dự án Hạt Giống Phương Nam
    "phuong-nam": {
        title: "Dẫn Chứng: Công ty Hạt Giống Phương Nam",
        description: "Trực tiếp lên kế hoạch và sản xuất Short Video cho hệ thống Fanpage. Góp phần bùng nổ hiệu suất tiếp cận và <strong>doanh thu tăng trưởng gấp 22 lần!</strong>",
        stats: [
            { label: "Lượt Xem Tích Lũy", value: "8.5 Triệu" },
            { label: "Tăng Trưởng Follower", value: "+10.6K" },
            { label: "Doanh Thu (Tháng 1 -> 3)", value: "500k 🚀 11 Triệu" }
        ],
        details: `
            <p style="margin-bottom: 20px;"><strong><i class="fa-solid fa-link"></i> Fanpage Quản Lý:</strong> <br>
                1. <a href="https://www.facebook.com/profile.php?id=61583396253583" target="_blank" style="color:var(--accent-1); font-weight:bold;">Đà Lạt Farm</a> (Fanpage Traffic nòng cốt)<br>
                2. <a href="https://www.facebook.com/profile.php?id=61585127330742" target="_blank" style="color:var(--accent-1); font-weight:bold;">Đà Lạt Seeds&Garden</a> (Kênh bán hàng)
            </p>
            
            <h4 style="margin-top: 20px; margin-bottom: 15px; color: var(--text-primary); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">📈 Toàn cảnh Hiệu Suất Tăng Trưởng (Đà Lạt Farm):</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 15px; text-align: center;">
                <i class="fa-brands fa-facebook"></i> Facebook · 28 ngày qua: 21/3/2026 – 17/4/2026
            </p>

            <!-- META DASHBOARD GRID -->
            <div class="meta-grid">
                <!-- Lượt xem -->
                <div class="meta-card">
                    <div class="meta-label">👁️ Lượt xem</div>
                    <div class="meta-value">8,5 Triệu</div>
                    <span class="meta-growth"><i class="fa-solid fa-arrow-up"></i> 393%</span>
                    <div class="meta-sub">Người xem: 3.974.356 <span class="meta-growth" style="font-size:0.75rem;"><i class="fa-solid fa-arrow-up"></i> 343,1%</span></div>
                    <div class="mini-bar-chart">
                        <div class="mini-bar" style="height:15%"></div>
                        <div class="mini-bar" style="height:18%"></div>
                        <div class="mini-bar" style="height:12%"></div>
                        <div class="mini-bar" style="height:25%"></div>
                        <div class="mini-bar" style="height:45%"></div>
                        <div class="mini-bar" style="height:60%"></div>
                        <div class="mini-bar" style="height:100%"></div>
                        <div class="mini-bar" style="height:85%"></div>
                    </div>
                </div>

                <!-- Lượt tương tác -->
                <div class="meta-card">
                    <div class="meta-label">❤️ Lượt tương tác</div>
                    <div class="meta-value">119,2K</div>
                    <span class="meta-growth"><i class="fa-solid fa-arrow-up"></i> 416,8%</span>
                    <div class="meta-sub">
                        Từ người theo dõi: <strong>5.110</strong> <span class="meta-growth" style="font-size:0.75rem;"><i class="fa-solid fa-arrow-up"></i> 415,1%</span><br>
                        Từ người chưa theo dõi: <strong>114.109</strong> <span class="meta-growth" style="font-size:0.75rem;"><i class="fa-solid fa-arrow-up"></i> 416,8%</span>
                    </div>
                </div>

                <!-- Lượt truy cập -->
                <div class="meta-card">
                    <div class="meta-label">🔗 Lượt truy cập trang</div>
                    <div class="meta-value">25,9K</div>
                    <span class="meta-growth"><i class="fa-solid fa-arrow-up"></i> 243,7%</span>
                    <div class="mini-bar-chart">
                        <div class="mini-bar" style="height:20%"></div>
                        <div class="mini-bar" style="height:30%"></div>
                        <div class="mini-bar" style="height:35%"></div>
                        <div class="mini-bar" style="height:55%"></div>
                        <div class="mini-bar" style="height:70%"></div>
                        <div class="mini-bar" style="height:90%"></div>
                        <div class="mini-bar" style="height:100%"></div>
                        <div class="mini-bar" style="height:80%"></div>
                    </div>
                </div>

                <!-- Lượt theo dõi -->
                <div class="meta-card">
                    <div class="meta-label">👥 Lượt theo dõi mới</div>
                    <div class="meta-value">10,6K</div>
                    <span class="meta-growth"><i class="fa-solid fa-arrow-up"></i> 309,1%</span>
                    <div class="meta-sub">
                        Tổng followers thực: <strong>10.457</strong> <span class="meta-growth" style="font-size:0.75rem;"><i class="fa-solid fa-arrow-up"></i> 311,7%</span>
                    </div>
                </div>
            </div>

            <!-- DONUT: ORGANIC VS FOLLOWER -->
            <div style="background: linear-gradient(135deg,#fffafb,#fff5f7); padding: 18px; border-radius: 14px; border: 1px solid #ffe3e8; margin: 20px 0;">
                <div class="meta-label" style="font-size:0.85rem; color:var(--text-secondary); font-weight:600; margin-bottom: 10px;">📊 Phân bổ nguồn lượt xem</div>
                <div class="donut-container">
                    <div class="donut"><div class="donut-inner">98,4%</div></div>
                    <div>
                        <div style="font-size:0.9rem; margin-bottom:4px;"><span style="display:inline-block;width:10px;height:10px;background:var(--accent-1);border-radius:50%;margin-right:6px;"></span><strong>98,4%</strong> Từ người chưa theo dõi <em style="color:#22c55e; font-size:0.8rem;">(Organic Reach)</em></div>
                        <div style="font-size:0.9rem;"><span style="display:inline-block;width:10px;height:10px;background:#e5e7eb;border-radius:50%;margin-right:6px;"></span><strong>1,6%</strong> Từ người theo dõi</div>
                    </div>
                </div>
            </div>

            <!-- REVENUE CHART -->
            <div style="background: rgba(255,140,163,0.08); padding: 20px; border-radius: 14px; border: 1px solid var(--accent-1); margin-bottom: 25px;">
                <h5 style="color: var(--accent-1); font-size: 1.1rem; margin-bottom: 12px;">🔥 Chuyển đổi Doanh thu qua Facebook</h5>
                <div class="revenue-bar-wrap">
                    <span class="revenue-label">Tháng 1</span>
                    <div class="revenue-track">
                        <div class="revenue-fill" style="width: 4.5%; background: linear-gradient(90deg, #fda4af, #fb7185);">500k</div>
                    </div>
                </div>
                <div class="revenue-bar-wrap">
                    <span class="revenue-label">Tháng 2</span>
                    <div class="revenue-track">
                        <div class="revenue-fill" style="width: 35%; background: linear-gradient(90deg, #fb7185, #f43f5e);">~4 Triệu</div>
                    </div>
                </div>
                <div class="revenue-bar-wrap">
                    <span class="revenue-label">Tháng 3</span>
                    <div class="revenue-track">
                        <div class="revenue-fill" style="width: 100%; background: linear-gradient(90deg, #f43f5e, #e11d48);">11 Triệu VNĐ 🚀</div>
                    </div>
                </div>
            </div>

            <h4 style="margin-top: 20px; margin-bottom: 15px; color: var(--text-primary); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">🤖 Thích nghi Công nghệ: Tối Ưu Nguồn Vốn Bằng AI Video</h4>
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid var(--glass-border);">
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Trong quá trình làm việc, tôi luôn nỗ lực tìm tòi và áp dụng các công cụ mới để nâng cao hiệu suất. Để <strong>tối ưu chi phí sản xuất</strong> cho công ty thay vì phải thuê Voice Talent, tôi đã chủ động viết kịch bản và <strong>tạo hàng loạt chuỗi Video lồng giọng nói bằng AI cực kỳ tự nhiên</strong>. Dưới đây là 2 sản phẩm Video AI mà tôi đã thực hiện, mang lại chỉ số tương tác rất tích cực:</p>
                
                <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                    <!-- Video 1 -->
                    <div style="flex: 1; min-width: 250px; background: rgba(0,0,0,0.02); padding: 15px; border-radius: 10px; border: 1px solid rgba(0,0,0,0.05);">
                        <h5 style="color: var(--accent-1); margin-bottom: 10px;">1. Mẹo chăm cây (Trộn Bia & Đường)</h5>
                        <ul style="color: var(--text-secondary); margin-bottom: 15px; font-size: 0.9rem; padding-left: 15px;">
                            <li style="margin-bottom: 5px;"><strong>Tương tác:</strong> <span style="font-weight:bold;">28.6K Likes</span></li>
                            <li style="margin-bottom: 5px;"><strong>Phủ sóng lan truyền:</strong> <span style="color:var(--accent-1); font-weight:bold;">6.3K Shares</span></li>
                            <li style="margin-bottom: 5px;"><strong>Bình luận:</strong> 248 Comments</li>
                        </ul>
                        <a href="https://www.facebook.com/share/r/1Do92p44UD/" target="_blank" class="btn-secondary" style="padding: 5px 12px; font-size: 0.85rem; display: inline-flex;"><i class="fa-brands fa-facebook" style="margin-right: 5px;"></i> Xem Video 1</a>
                        <div style="margin-top: 15px; text-align: center;">
                            <img src="ai_video1.png" onerror="this.parentElement.style.display='none'" alt="Video AI 1" style="width: 100%; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
                        </div>
                    </div>

                    <!-- Video 2 -->
                    <div style="flex: 1; min-width: 250px; background: rgba(0,0,0,0.02); padding: 15px; border-radius: 10px; border: 1px solid rgba(0,0,0,0.05);">
                        <h5 style="color: var(--accent-1); margin-bottom: 10px;">2. Giải đố Nông nghiệp (Rau Tiến Vua)</h5>
                        <ul style="color: var(--text-secondary); margin-bottom: 15px; font-size: 0.9rem; padding-left: 15px;">
                            <li style="margin-bottom: 5px;"><strong>Tương tác:</strong> <span style="font-weight:bold;">5.9K Likes</span></li>
                            <li style="margin-bottom: 5px;"><strong>Thảo luận cực kỳ sôi nổi:</strong> <span style="color:var(--accent-1); font-weight:bold;">415 Comments</span></li>
                        </ul>
                        <a href="https://www.facebook.com/share/r/183ogMSkgr/" target="_blank" class="btn-secondary" style="padding: 5px 12px; font-size: 0.85rem; display: inline-flex;"><i class="fa-brands fa-facebook" style="margin-right: 5px;"></i> Xem Video 2</a>
                        <div style="margin-top: 15px; text-align: center;">
                            <img src="ai_video2.png" onerror="this.parentElement.style.display='none'" alt="Video AI 2" style="width: 100%; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
                        </div>
                    </div>
                </div>
            </div>
            

        `
    },
    // Chừa sẵn không gian cho Dự án Free-club
    "free-club": {
        title: "Dẫn Chứng: CLB Sách Tiếng Anh cho Trẻ Em Free-club",
        description: "Copy Writer phụ trách sản xuất nội dung organic, duy trì lịch đăng bài ổn định 3 bài/tuần trong suốt 4 tháng.",
        stats: [
            { label: "Tăng trưởng Followers", value: "+3.000" },
            { label: "Chiến lược", value: "100% Organic" },
            { label: "Tần suất", value: "3 Bài/Tuần" }
        ],
        details: `
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid var(--glass-border);">
                <h4 style="color: var(--text-primary); margin-bottom: 15px;">📝 Thành tích nổi bật</h4>
                <ul style="color: var(--text-secondary); font-size: 0.95rem; padding-left: 20px;">
                    <li style="margin-bottom: 10px;"><strong>Tăng trưởng:</strong> Đưa trang từ <span style="color:var(--accent-1); font-weight:bold;">20.000</span> lên <span style="color:var(--accent-1); font-weight:bold;">23.000 người theo dõi</span> chỉ trong 4 tháng, hoàn toàn bằng nội dung tự nhiên (không chạy quảng cáo).</li>
                    <li style="margin-bottom: 10px;"><strong>Nội dung:</strong> Viết bài chia sẻ mẹo học tiếng Anh cho trẻ em, review sách thiếu nhi song ngữ, tạo mini-game tương tác để giữ chân cộng đồng phụ huynh.</li>
                    <li style="margin-bottom: 10px;"><strong>Kỹ năng thể hiện:</strong> Copywriting chuẩn SEO Facebook, lên lịch Content Calendar, duy trì tần suất đăng bài đều đặn giúp thuật toán ưu ái phân phối.</li>
                </ul>
            </div>
            

        `
    }
};

// ========================
// HÀM MỞ MODAL (Premium Animation)
// ========================
window.openModal = function(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    const statsHtml = data.stats.map(s => `
        <div class="stat-box">
            <h4>${s.value}</h4>
            <p style="margin:0; font-size: 0.9rem;">${s.label}</p>
        </div>
    `).join('');

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="modal-layout-wrapper" style="display: flex; gap: 30px; position: relative;">
            
            <!-- CỘT NỘI DUNG CHÍNH -->
            <div style="flex: 1; min-width: 0;">
                <h2 style="color: var(--text-primary); margin-bottom: 10px; font-size: clamp(1.5rem, 3vw, 2rem);">${data.title}</h2>
                <p style="font-size: 1.1rem; color: var(--text-secondary);">${data.description}</p>
                <div class="modal-stats">${statsHtml}</div>
                <div class="modal-details" style="text-align: left;">
                    ${data.details}
                </div>
            </div>
            
            <!-- CỘT CHIBI CHUYÊN DỤNG (BÊN PHẢI) -->
            <div class="chibi-side-panel" style="width: 180px; flex-shrink: 0; position: relative;">
                <div style="position: sticky; top: 40px; pointer-events: none; animation: popUpPresenter 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; transform-origin: bottom center;">
                    <img src="chibi-standing-transparent.png" alt="Thảo Tâm Chibi" style="width: 100%; filter: drop-shadow(-5px 5px 12px rgba(255,107,139,0.3));" onerror="this.style.display='none'">
                </div>
            </div>
            
        </div>
    `;

    const modal = document.getElementById('project-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Smooth scroll modal to top
    const content = modal.querySelector('.modal-content');
    if (content) content.scrollTop = 0;
};

// ========================
// HÀM ĐÓNG MODAL
// ========================
window.closeModal = function() {
    const modal = document.getElementById('project-modal');
    const content = modal.querySelector('.modal-content');

    // Fade out animation
    if (content) {
        content.style.animation = 'modalSlideOut 0.3s ease forwards';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            content.style.animation = '';
        }, 280);
    } else {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Đóng modal khi bấm ra ngoài
window.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) closeModal();
});
