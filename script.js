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
    // 탭 상태 업데이트
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    const cleanName = name.replace('◈ ', '');
    const infoPanel = document.getElementById('info-panel');
    const titleElement = document.getElementById('info-title');
    const imgContainer = document.getElementById('image-container');
    const infoContent = document.getElementById('info-content');

    // 초기화
    imgContainer.innerHTML = ''; 
    infoContent.innerHTML = ''; 
    infoPanel.classList.remove('hidden-block');
    titleElement.innerText = cleanName;

    // 탭별 분기
    if (cleanName === '표지') {
        // [수정] 표지: 말씀하신 VWWbpQ7.png 이미지를 중앙 영역에 표시, 우측 블록 삭제
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
        infoPanel.classList.add('hidden-block');
    } 
    else if (cleanName === '속성') {
        // 속성: 캐릭터 이미지 표시, 우측 블록 유지
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
    } 
    else if (cleanName === '물품') {
        // 물품: 카드 3장 순차 애니메이션, 우측 블록 삭제
        infoPanel.classList.add('hidden-block');
        
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" id="card-1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" id="card-2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" id="card-3">
            </div>
        `;

        // 카드별 순차 애니메이션 실행
        setTimeout(() => { document.getElementById('card-1').classList.add('animate'); }, 100);
        setTimeout(() => { document.getElementById('card-2').classList.add('animate'); }, 300);
        setTimeout(() => { document.getElementById('card-3').classList.add('animate'); }, 500);
    } 
    else if (cleanName === '문화') {
        // 문화: 모두 삭제
        infoPanel.classList.add('hidden-block');
    }

    // 애니메이션 리셋
    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'slideIn 0.5s ease-out';
}
