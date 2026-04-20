function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(el, name) {
    // 탭 스타일 변경
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    // 텍스트 내용 변경
    document.getElementById('tab-label').innerText = name;
    document.getElementById('info-title').innerText = name;
    document.getElementById('info-content').innerHTML = `<p>${name} 섹션 데이터입니다.</p>`;

    // 애니메이션 리셋 (다시 나타나는 효과)
    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'slideIn 0.5s ease-out';
}
