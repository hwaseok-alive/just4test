function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    document.getElementById('home-content').classList.add('low-opacity');
    // 입장 시 기본 '표지' 탭 활성화
    switchTab(document.querySelector('.tab'), '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
    document.getElementById('home-content').classList.remove('low-opacity');
}

function switchTab(el, name) {
    // 1. 탭 활성화 스타일 변경
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
        t.style.color = "rgba(255,255,255,0.3)";
    });
    el.classList.add('active');
    el.style.color = "#ff6022";

    const cleanName = name.replace('◈ ', '');
    const infoPanel = document.getElementById('info-panel');
    const titleElement = document.getElementById('info-title');
    const imgContainer = document.getElementById('image-container');
    const infoContent = document.getElementById('info-content');

    // 초기화: 이미지, 텍스트, 우측 블록 표시 상태
    imgContainer.innerHTML = ''; 
    infoContent.innerHTML = ''; 
    infoPanel.classList.remove('hidden-block'); // 우측 블록 일단 보이기
    titleElement.innerText = cleanName;

    // 2. 탭별 이미지 및 우측 블록 표시 분기 처리
    if (cleanName === '표지') {
        // 표지: 배경 이미지 표시, 우측 블록 삭제
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="full-bg-img">`;
        infoPanel.classList.add('hidden-block');
    } 
    else if (cleanName === '속성') {
        // 속성: 캐릭터 이미지 표시, 우측 블록 유지
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="char-img">`;
    } 
    else if (cleanName === '물품') {
        // 물품: 캐릭터 삭제, 카드 3장 순차 애니메이션, 우측 블록 삭제
        infoPanel.classList.add('hidden-block');
        
        // 카드 이미지 구조 주입
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" id="card-1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" id="card-2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" id="card-3">
            </div>
        `;

        // 카드별 순차 애니메이션 실행 (0.2초 간격)
        setTimeout(() => { document.getElementById('card-1').classList.add('animate'); }, 200);
        setTimeout(() => { document.getElementById('card-2').classList.add('animate'); }, 400);
        setTimeout(() => { document.getElementById('card-3').classList.add('animate'); }, 600);
    } 
    else if (cleanName === '문화') {
        // 문화: 캐릭터 및 우측 블록 삭제
        infoPanel.classList.add('hidden-block');
    }

    // 3. 우측 정보 패널 슬라이드 애니메이션 재생 (문화 제외)
    if (cleanName !== '문화' && cleanName !== '물품' && cleanName !== '표지') {
        const box = document.getElementById('info-anim-box');
        box.style.animation = 'none';
        void box.offsetWidth; 
        box.style.animation = 'slideIn 0.5s ease-out';
    }
}
