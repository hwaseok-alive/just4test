// 상세 페이지 열기
function openDetail() {
    const overlay = document.getElementById('detail-overlay');
    overlay.classList.remove('hidden');
    // 처음 들어오면 무조건 '표지' 탭 실행
    switchTab(null, '표지');
}

// 닫기
function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

// 탭 전환 시스템
function switchTab(el, name) {
    const wrapper = document.getElementById('main-wrapper');
    if (!wrapper) return;

    const cleanName = name.replace('◈ ', '').trim();

    // 1. 화면 구조 초기화 (매번 새로 그려서 속성창 잔상 방지)
    wrapper.innerHTML = `
        <nav class="ui-side-tabs">
            <div class="tab ${cleanName === '표지' ? 'active' : ''}" onclick="switchTab(this, '표지')">◈ 표지</div>
            <div class="tab ${cleanName === '속성' ? 'active' : ''}" onclick="switchTab(this, '속성')">◈ 속성</div>
            <div class="tab ${cleanName === '물품' ? 'active' : ''}" onclick="switchTab(this, '물품')">◈ 물품</div>
            <div class="tab ${cleanName === '문화' ? 'active' : ''}" onclick="switchTab(this, '문화')">◈ 문화</div>
        </nav>
        <div id="image-container" class="ui-content-area"></div>
    `;

    const imgContainer = document.getElementById('image-container');

    // 2. 탭별 컨텐츠 로드
    if (cleanName === '표지') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (cleanName === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        // 속성 탭일 때만 패널 추가
        const panel = document.createElement('aside');
        panel.className = 'property-panel';
        panel.innerHTML = `
            <h1 class="editor-title">속성</h1>
            <div style="height:1px; background:#444; margin-bottom:20px;"></div>
            <p style="line-height:1.6; color:#ccc;">Cardo의 상세 정보입니다.</p>
        `;
        wrapper.appendChild(panel);
    } 
    else if (cleanName === '물품') {
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" id="card1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" id="card2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" id="card3">
            </div>
        `;
        // 애니메이션 효과
        setTimeout(() => {
            ['card1', 'card2', 'card3'].forEach(id => {
                const card = document.getElementById(id);
                if(card) card.classList.add('show');
            });
        }, 50);
    }

    // 모바일 배려: 탭 클릭 시 컨텐츠 영역 최상단으로 스크롤 이동
    if (window.innerWidth <= 1024) {
        window.scrollTo(0, 0);
        wrapper.scrollTo(0, 0);
    }
}
