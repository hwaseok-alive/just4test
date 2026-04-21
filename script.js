function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    document.getElementById('home-content').classList.add('low-opacity');
    switchTab(document.querySelector('.tab'), '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
    document.getElementById('home-content').classList.remove('low-opacity');
}

function switchTab(el, name) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    const cleanName = name.replace('◈ ', '');
    const infoPanel = document.getElementById('info-panel');
    const imgContainer = document.getElementById('image-container');
    const titleElement = document.getElementById('info-title');
    
    imgContainer.innerHTML = ''; 
    infoPanel.classList.remove('hidden-block');
    titleElement.innerText = cleanName;

    if (cleanName === '표지') {
        // 표지: ad45cb.jpg를 중앙 영역 가득 표시
        imgContainer.innerHTML = `<img src="https://i.imgur.com/ad45cb.jpg" class="content-img">`;
        infoPanel.classList.add('hidden-block');
    } 
    else if (cleanName === '속성') {
        // 속성: 캐릭터 이미지 + 우측 블록 유지
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
    } 
    else if (cleanName === '물품') {
        infoPanel.classList.add('hidden-block');
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" id="i1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" id="i2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" id="i3">
            </div>
        `;
        setTimeout(() => document.getElementById('i1').classList.add('animate'), 100);
        setTimeout(() => document.getElementById('i2').classList.add('animate'), 300);
        setTimeout(() => document.getElementById('i3').classList.add('animate'), 500);
    } 
    else if (cleanName === '문화') {
        imgContainer.innerHTML = ''; 
        infoPanel.classList.add('hidden-block');
    }

    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'charFade 0.4s ease-out';
}
