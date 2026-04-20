function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    document.getElementById('home-content').classList.add('low-opacity'); // 하트 10% 투명도
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
    document.getElementById('home-content').classList.remove('low-opacity'); // 하트 복구
}

function switchTab(el, name) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    document.getElementById('tab-label').innerText = name;
    document.getElementById('info-title').innerText = name;
    document.getElementById('info-text').innerText = `${name} 섹션의 상세 데이터입니다.`;

    const charImg = document.getElementById('main-char-img');
    const book = document.getElementById('culture-book');

    if (name === '문화') {
        charImg.classList.add('blur');
        book.classList.remove('hidden');
    } else {
        charImg.classList.remove('blur');
        book.classList.add('hidden');
    }

    // 정보창 애니메이션 리셋
    const animBox = document.getElementById('info-anim-box');
    animBox.style.animation = 'none';
    void animBox.offsetWidth;
    animBox.style.animation = 'slideIn 0.5s ease-out';
}
