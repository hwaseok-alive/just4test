// 모든 장치에서 확실하게 이벤트를 인식하도록 설정
document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.getElementById('main-enter-img');
    const exitBtn = document.getElementById('global-exit-btn');

    // 도입부 이미지 클릭 이벤트 (PC/모바일 공통)
    if (mainImg) {
        mainImg.onclick = openDetail;
    }

    // EXIT 버튼 클릭 이벤트 (PC/모바일 공통)
    if (exitBtn) {
        exitBtn.onclick = closeDetail;
    }
});

function openDetail() {
    const overlay = document.getElementById('detail-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        // 첫 진입 시 '표지' 탭을 활성화
        const firstTab = document.querySelector('.tab');
        if (firstTab) switchTab(firstTab, '표지');
    }
}

function closeDetail() {
    const overlay = document.getElementById('detail-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

function switchTab(el, name) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    const imgContainer = document.getElementById('image-container');
    const propertyEditor = document.getElementById('property-editor');
    
    imgContainer.innerHTML = ''; 
    propertyEditor.classList.add('hidden-block');

    if (name === '표지') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (name === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        propertyEditor.classList.remove('hidden-block');
    } 
    else if (name === '물품') {
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
