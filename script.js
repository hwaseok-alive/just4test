function openDetail() {
    const overlay = document.getElementById('detail-overlay');
    overlay.classList.remove('hidden');
    // 열리자마자 '표지' 탭 내용 보여주기
    const firstTab = document.querySelector('.tab');
    if (firstTab) switchTab(firstTab, '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(el, name) {
    // 1. 모든 탭에서 active 제거
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // 2. 클릭한 탭에 active 추가
    el.classList.add('active');

    const imgContainer = document.getElementById('image-container');
    const propertyEditor = document.getElementById('property-editor');
    
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
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card">
            </div>
        `;
    }
}
