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
    
    imgContainer.innerHTML = ''; 
    infoPanel.classList.add('hidden-block');

    if (cleanName === '표지') {
        // 표지 이미지를 화면 꽉 차게 삽입
        imgContainer.innerHTML = `<img src="https://i.imgur.com/ad45cb.jpg" class="content-img">`;
    } 
    else if (cleanName === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        infoPanel.classList.remove('hidden-block');
        document.getElementById('info-title').innerText = "속성";
        document.getElementById('info-content').innerText = "캐릭터의 세부 속성 데이터입니다.";
    } 
    else if (cleanName === '물품') {
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
}
