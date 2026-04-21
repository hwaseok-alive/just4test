// 상세 페이지 열기
function openDetail() {
    const overlay = document.getElementById('detail-overlay');
    overlay.classList.remove('hidden');
    switchTab(null, '표지');
}

// 닫기
function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

// 탭 전환 및 텍스트 상태 관리
function switchTab(el, name) {
    const wrapper = document.getElementById('main-wrapper');
    if (!wrapper) return;

    const cleanName = name.replace('◈ ', '').trim();

    // 1. 화면 새로 그리기 (문화 탭 제외)
    wrapper.innerHTML = `
        <nav class="ui-side-tabs">
            <div class="tab ${cleanName === '표지' ? 'active' : ''}" onclick="switchTab(this, '표지')">◈ 표지</div>
            <div class="tab ${cleanName === '속성' ? 'active' : ''}" onclick="switchTab(this, '속성')">◈ 속성</div>
            <div class="tab ${cleanName === '물품' ? 'active' : ''}" onclick="switchTab(this, '물품')">◈ 물품</div>
        </nav>
        <div id="image-container" class="ui-content-area"></div>
    `;

    const imgContainer = document.getElementById('image-container');

    // 2. 컨텐츠 분기
    if (cleanName === '표지') {
        // [수정] 표지 이미지를 더 왼쪽으로 배치하기 위해 새로운 컨테이너 추가
        imgContainer.innerHTML = `<div class="cover-img-container"><img src="https://i.imgur.com/VWWbpQ7.png" class="content-img"></div>`;
    } 
    else if (cleanName === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
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
        setTimeout(() => {
            ['card1', 'card2', 'card3'].forEach(id => {
                const card = document.getElementById(id);
                if(card) card.classList.add('show');
            });
        }, 50);
    }

    // 모바일 스크롤 보정
    if (window.innerWidth <= 1024) {
        window.scrollTo(0, 0);
        wrapper.scrollTo(0, 0);
    }
}
