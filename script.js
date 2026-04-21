// 페이지 로드 시 이벤트 리스너를 확실하게 연결
window.onload = function() {
    const mainImg = document.getElementById('main-enter-img');
    const exitBtn = document.querySelector('.exit-btn');

    // 도입부 이미지 클릭 시 상세페이지 열기
    if (mainImg) {
        mainImg.addEventListener('click', openDetail);
        mainImg.addEventListener('touchstart', openDetail); // 모바일 터치 대응
    }

    // EXIT 버튼 클릭 시 닫기
    if (exitBtn) {
        exitBtn.addEventListener('click', closeDetail);
        exitBtn.addEventListener('touchstart', closeDetail); // 모바일 터치 대응
    }
};

function openDetail() {
    const overlay = document.getElementById('detail-overlay');
    const homeContent = document.getElementById('home-content');
    
    overlay.classList.remove('hidden');
    homeContent.classList.add('low-opacity');
    
    // 열릴 때 첫 번째 탭(표지) 자동 선택
    const firstTab = document.querySelector('.tab');
    if (firstTab) switchTab(firstTab, '표지');
}

function closeDetail() {
    const overlay = document.getElementById('detail-overlay');
    const homeContent = document.getElementById('home-content');
    
    overlay.classList.add('hidden');
    homeContent.classList.remove('low-opacity');
}
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
    const imgContainer = document.getElementById('image-container');
    const propertyEditor = document.getElementById('property-editor');
    
    imgContainer.innerHTML = ''; 
    // 기본적으로 우측 블록 숨김
    propertyEditor.classList.add('hidden-block');

    if (cleanName === '표지') {
        // 표지 이미지 (제공해주신 경로)
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (cleanName === '속성') {
        // 속성: 캐릭터 이미지 + 우측 편집 블록 노출
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        propertyEditor.classList.remove('hidden-block');
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
