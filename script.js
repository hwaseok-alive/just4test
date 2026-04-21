function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    document.getElementById('home-content').classList.add('low-opacity');
    // 입장 시 기본으로 '표지' 탭 활성화
    switchTab(document.querySelector('.tab'), '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
    document.getElementById('home-content').classList.remove('low-opacity');
}

function switchTab(el, name) {
    // 1. 탭 활성화 스타일
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
        t.style.color = "rgba(255,255,255,0.3)";
    });
    el.classList.add('active');
    el.style.color = "#ff6022";

    // 2. 제목 업데이트 (주황색 강조)
    const cleanName = name.replace('◈ ', '');
    const titleElement = document.getElementById('info-title');
    titleElement.innerText = cleanName;

    // 3. 탭별 이미지 분기 처리 (텍스트 가이드 완전 삭제)
    const imgContainer = document.getElementById('image-container');
    const infoContent = document.getElementById('info-content');
    imgContainer.innerHTML = ''; 
    infoContent.innerHTML = ''; 

    if (cleanName === '표지') {
        // 표지 전용 전체 이미지
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="full-bg-img">`;
    } 
    else if (cleanName === '물품') {
        // 물품 전용 카드 이미지 3개 나란히
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card">
            </div>
        `;
    } 
    else {
        // 그 외 탭(속성, 문화 등) 캐릭터 이미지
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="char-img">`;
    }

    // 4. 정보창 슬라이드 애니메이션 재생
    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'slideIn 0.5s ease-out';
}
