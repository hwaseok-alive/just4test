function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    // 무조건 첫 번째 탭(표지) 실행
    const tabs = document.querySelectorAll('.tab');
    switchTab(tabs[0], '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(el, name) {
    // 1. 탭 활성화
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    const imgContainer = document.getElementById('image-container');
    const propertyEditor = document.getElementById('property-editor');
    
    // 2. 초기화 (속성창 숨기기 및 이미지 비우기)
    imgContainer.innerHTML = ''; 
    propertyEditor.classList.add('hidden-block');

    const cleanName = name.replace('◈ ', '').trim();

    if (cleanName === '표지') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (cleanName === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        propertyEditor.classList.remove('hidden-block');
    } 
    else if (cleanName === '물품') {
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" id="card1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" id="card2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" id="card3">
            </div>
        `;
        // 순차적 애니메이션 실행
        setTimeout(() => document.getElementById('card1').classList.add('show'), 100);
        setTimeout(() => document.getElementById('card2').classList.add('show'), 300);
        setTimeout(() => document.getElementById('card3').classList.add('show'), 500);
    }
}
