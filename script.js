function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    switchTab(null, '표지'); // 초기 실행
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(el, name) {
    const wrapper = document.getElementById('main-wrapper');
    const cleanName = name.replace('◈ ', '').trim();

    // 1. 뼈대 다시 그리기 (이 과정에서 기존 속성창은 완전히 삭제됨)
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

    // 2. 탭 별 컨텐츠 주입
    if (cleanName === '표지') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (cleanName === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        // 오직 '속성' 탭일 때만 우측 패널 생성
        const panel = document.createElement('aside');
        panel.className = 'property-panel';
        panel.innerHTML = `
            <h1 class="editor-title">속성</h1>
            <div style="height:1px; background:#444; margin-bottom:20px;"></div>
            <p>Cardo의 상세 정보입니다.</p>
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
        // 순차 애니메이션
        setTimeout(() => document.getElementById('card1').classList.add('show'), 100);
        setTimeout(() => document.getElementById('card2').classList.add('show'), 300);
        setTimeout(() => document.getElementById('card3').classList.add('show'), 500);
    }
}
