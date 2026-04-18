// Thêm hiệu ứng xuất hiện từ từ (fade in) khi bạn cuộn trang xuống
document.addEventListener("DOMContentLoaded", function() {
    // Tìm tất cả các thành phần có class "fade-in"
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Khi thành phần đó xuất hiện trên màn hình
            if (entry.isIntersecting) {
                // Thêm class 'visible' để kích hoạt hiệu ứng CSS
                entry.target.classList.add('visible');
                // Tùy chọn: dừng theo dõi sau khi đã xuất hiện
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // 10% phần tử xuất hiện trên màn hình thì chạy hiệu ứng
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // HIỆU ỨNG HOA ANH ĐÀO RƠI
    createSakuraPetals();
});

function createSakuraPetals() {
    const sakuraCount = 25; // Số lượng hoa anh đào
    const body = document.querySelector('body');
    for (let i = 0; i < sakuraCount; i++) {
        let petal = document.createElement('div');
        petal.classList.add('sakura-petal');
        
        let size = Math.random() * 10 + 8; // Size từ 8px đến 18px
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        
        let leftPosition = Math.random() * 100; // Xuất hiện ngẫu nhiên theo chiều ngang
        petal.style.left = `${leftPosition}vw`;
        
        let delay = Math.random() * 10; // Thời gian trễ
        petal.style.animationDelay = `${delay}s`;
        
        let duration = Math.random() * 5 + 7; // Rơi trong 7s - 12s
        petal.style.animationDuration = `${duration}s`;
        
        body.appendChild(petal);
    }
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
            
            <h4 style="margin-top: 20px; margin-bottom: 15px; color: var(--text-primary); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">📈 Toàn cảnh Hiệu Suất Sinh Lời (Meta Insights - 90 Ngày):</h4>
            <div style="background: #fffafb; padding: 20px; border-radius: 12px; border: 1px dashed var(--accent-2); margin-bottom: 30px; text-align: center;">
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;"><b>📊 Báo cáo từ hệ thống Meta Business Suite (90 ngày gần nhất):</b></p>
                <img src="meta.png" onerror="this.parentElement.style.display='none'" alt="Meta Insights" style="width: 100%; max-width: 600px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
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
            <div style="background: #fffafb; padding: 20px; border-radius: 12px; border: 1px dashed var(--accent-2); margin-bottom: 30px; text-align: center;">
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;"><b>📊 Báo cáo Meta Insights – Tăng trưởng phi mã 392%:</b></p>
                <img src="meta_dalat.png" onerror="this.parentElement.style.display='none'" alt="Đà Lạt Farm Meta" style="width: 100%; max-width: 600px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <div style="margin-top: 15px; text-align: left; background: rgba(255,140,163,0.1); padding: 15px; border-radius: 10px; border: 1px solid var(--accent-1);">
                    <h5 style="color: var(--accent-1); font-size: 1.1rem; margin-bottom: 5px;">🔥 Điểm nhấn Chuyển đổi Kinh doanh:</h5>
                    <p style="margin:0; color: var(--text-primary); font-size: 0.95rem; line-height: 1.5;">Bằng chiến lược nội dung Video đánh đúng tệp khách hàng mua hạt giống hữu cơ, mức độ phủ sóng của page đã dẫn đến sự bùng nổ doanh thu bán hàng qua Facebook: Tăng vọt từ mức <strong>500.000 VNĐ/tháng (Tháng 1)</strong> lên đến <strong>11.000.000 VNĐ/tháng (Tổng kết Tháng 3)</strong>, một hiệu suất tăng trưởng không tưởng đối với mảng Nông nghiệp Cây trồng!</p>
                </div>
            </div>

            <h4 style="margin-top: 20px; margin-bottom: 15px; color: var(--text-primary); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px;">🤖 Dẫn chứng Kỹ năng: Tối Ưu Chi Phí Bằng AI Video</h4>
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid var(--glass-border);">
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Bên cạnh năng lực quay dựng thông thường, mình có độ nhạy bén với công nghệ kỹ thuật số. Để <strong>tối ưu tuyệt đối chi phí sản xuất</strong> cho công ty thay vì thuê Voice Talent trọn gói, mình đã chủ động viết kịch bản và <strong>tạo hàng loạt chuỗi Video lồng giọng nói bằng AI cực kỳ tự nhiên</strong>. Dưới đây là 2 sản phẩm Video AI tạo ra chỉ số tương tác "khủng" cho kênh:</p>
                
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

// HÀM MỞ MODAL
window.openModal = function(projectId) {
    const data = projectData[projectId];
    if(!data) return;
    
    let statsHtml = data.stats.map(s => `
        <div class="stat-box">
            <h4>${s.value}</h4>
            <p style="margin:0; font-size: 0.9rem;">${s.label}</p>
        </div>
    `).join('');

    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
        <h2 style="color: var(--text-primary); margin-bottom: 10px; font-size: clamp(1.5rem, 3vw, 2rem);">${data.title}</h2>
        <p style="font-size: 1.1rem; color: var(--text-secondary);">${data.description}</p>
        <div class="modal-stats">${statsHtml}</div>
        <div class="modal-details" style="text-align: left;">
            ${data.details}
        </div>
    `;
    
    document.getElementById("project-modal").style.display = "block";
    document.body.style.overflow = "hidden"; // Ngăn cuộn trang
}

// HÀM ĐÓNG MODAL
window.closeModal = function() {
    document.getElementById("project-modal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Đóng modal khi bấm ra ngoài phần nội dung đen
window.onclick = function(event) {
    const modal = document.getElementById("project-modal");
    if (event.target == modal) {
        closeModal();
    }
}

