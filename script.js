function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    // 하트를 10% 투명도로 만듦
    document.getElementById('home-content').classList.add('low-opacity');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
    // 하트를 다시 100%로 복구
    document.getElementById('home-content').classList.remove('low-opacity');
}

function switchTab(el, name) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    document.getElementById('tab-label').innerText = name;
    document.getElementById('info-title').innerText = name;
    document.getElementById('info-content').innerHTML = `<p>${name} 섹션 데이터입니다.</p>`;

    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'slideIn 0.5s ease-out';
}
