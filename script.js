document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.getElementById('main-enter-img');
    const exitBtn = document.getElementById('global-exit-btn');

    if (mainImg) mainImg.onclick = openDetail;
    if (exitBtn) exitBtn.onclick = closeDetail;
});

function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    // 시작할 때 무조건 '표지' 탭 활성화
    const firstTab = document.querySelector('.tab');
    if (firstTab) switchTab(firstTab, '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(el, name) {
    // 모든 탭 비활성화
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
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
        // 물품 리스트 재생성
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" alt="물품1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" alt="물품2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" alt="물품3">
            </div>
        `;
    }
}
