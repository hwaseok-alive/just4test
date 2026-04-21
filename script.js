function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    document.getElementById('home-content').classList.add('low-opacity');
    // 처음 열 때 무조건 '표지' 탭 실행
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
    const imgContainer = document.getElementById('image-container');
    const infoPanel = document.getElementById('info-panel');
    
    imgContainer.innerHTML = ''; 
    infoPanel.classList.add('hidden-block');

    if (cleanName === '표지') {
        // [수정] 보내주신 정확한 이미지 주소 적용
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (cleanName === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        infoPanel.classList.remove('hidden-block'); // 속성에서만 정보창 노출
        document.getElementById('info-title').innerText = "속성";
    } 
    else if (cleanName === '물품') {
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" id="c1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" id="c2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" id="c3">
            </div>
        `;
        setTimeout(() => document.getElementById('c1').classList.add('animate'), 100);
        setTimeout(() => document.getElementById('c2').classList.add('animate'), 250);
        setTimeout(() => document.getElementById('c3').classList.add('animate'), 400);
    }
}
