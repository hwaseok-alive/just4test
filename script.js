function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    // 무조건 '표지' 탭부터 시작
    const firstTab = document.querySelector('.tab');
    switchTab(firstTab, '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(el, name) {
    // 1. 모든 탭 비활성화 및 선택 효과
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    const uiWrapper = document.querySelector('.ui-wrapper');
    const cleanName = name.replace('◈ ', '').trim();

    // 2. 기존 내용물 싹 비우기 (중앙 이미지 + 우측 속성창 모두 삭제)
    uiWrapper.innerHTML = `
        <nav class="ui-side-tabs">
            <div class="tab ${cleanName === '표지' ? 'active' : ''}" onclick="switchTab(this, '표지')">◈ 표지</div>
            <div class="tab ${cleanName === '속성' ? 'active' : ''}" onclick="switchTab(this, '속성')">◈ 속성</div>
            <div class="tab ${cleanName === '물품' ? 'active' : ''}" onclick="switchTab(this, '물품')">◈ 물품</div>
            <div class="tab ${cleanName === '문화' ? 'active' : ''}" onclick="switchTab(this, '문화')">◈ 문화</div>
        </nav>
        <div id="image-container" class="ui-content-area"></div>
    `;

    const imgContainer = document.getElementById('image-container');

    // 3. 각 탭별 컨텐츠 주입
    if (cleanName === '표지') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (cleanName === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        // [핵심] 속성 탭일 때만 속성창 코드 추가
        const aside = document.createElement('aside');
        aside.className = 'property-panel';
        aside.innerHTML = `
            <h1 class="editor-title" style="color:#ff6022; font-size:24px;">속성</h1>
            <div style="height:1px; background:#333; margin:15px 0;"></div>
            <div class="editor-body">
                <p style="line-height:1.6;">Cardo의 상세 정보입니다.</p>
            </div>
        `;
        uiWrapper.appendChild(aside);
    } 
    else if (cleanName === '물품') {
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" id="c1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" id="c2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" id="c3">
            </div>
        `;
        // 애니메이션 효과
        setTimeout(() => document.getElementById('c1').style.cssText = "opacity:1; transform:translateY(0)", 100);
        setTimeout(() => document.getElementById('c2').style.cssText = "opacity:1; transform:translateY(0)", 300);
        setTimeout(() => document.getElementById('c3').style.cssText = "opacity:1; transform:translateY(0)", 500);
    }
}
