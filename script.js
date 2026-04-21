function openDetail() {
    const overlay = document.getElementById('detail-overlay');
    overlay.classList.remove('hidden');
    switchTab(null, '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(el, name) {
    const wrapper = document.getElementById('main-wrapper');
    if (!wrapper) return;

    const cleanName = name.replace('◈ ', '').trim();

    wrapper.innerHTML = `
        <nav class="ui-side-tabs">
            <div class="tab ${cleanName === '표지' ? 'active' : ''}" onclick="switchTab(this, '표지')">◈ 표지</div>
            <div class="tab ${cleanName === '속성' ? 'active' : ''}" onclick="switchTab(this, '속성')">◈ 속성</div>
            <div class="tab ${cleanName === '물품' ? 'active' : ''}" onclick="switchTab(this, '물품')">◈ 물품</div>
        </nav>
        <div id="image-container" class="ui-content-area"></div>
    `;

    const imgContainer = document.getElementById('image-container');

    if (cleanName === '표지') {
        imgContainer.innerHTML = `<div class="cover-img-container"><img src="https://i.imgur.com/VWWbpQ7.png" class="content-img"></div>`;
    } 
    else if (cleanName === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        const panel = document.createElement('aside');
        panel.className = 'property-panel';
        panel.innerHTML = `
            <h1 class="editor-title">속성</h1>
            <div style="height:1px; background:#444; margin-bottom:20px;"></div>
            <div class="property-text">
                마도학이란 것은 날 때부터 카르도와 가까운 것이었다. 부모가 그의 손에 조각칼을 쥐여 주며 어릴 적부터 귀에 못이 박히도록 하던 말이고 또 자신의 손으로도 느낄 수 있던 것이었으니. 카르도의 부모는 유명한 조각공이었다. 아버지는 석재를, 어머니는 목재를 다루었는데 그것이 본 예술품에게도 닿은 것이었다.<br><br>
                영국의 한적한 시골 동네에서 카르도의 집안은 나름 유명세를 탔다. 부족할 것 없이 살았으며 또한 유명한 이들의 얼굴을 본따 만든 조각을 만들기도 했으니 집안은 충분히 부유할 뿐이었다. 다만 그렇게 사는 이들에게 클리셰적으로 따라오는 한 고민이 있었으니, 그것이 바로 존재의 이유였다.<br><br>
                지금껏 그들의 말을 따라 살았던 삶에는 카르도 본인의 이야기는 존재하지 않았다. 발을 우측부터 내딛으라는 말에 습관을 고쳤으며, 안경을 올릴 때에는 옆의 안경 다리를 잡고 올리라는 말을 따라야만 했다. 그리하여 카르도는 늘 자신의 방과 집 밖의 세상을 궁금해했다. 출품된 지 40년, 그는 드디어 밖으로 나올 수 있었다.<br><br>
                작은 가방에 필요한 짐만을 넣어 밖으로 내달렸다. 석재 가루 속에 살았던 터라 채도가 낮고 흐릿한 시야 속에서도 안경만이 자신이 내달릴 길을 선명하게 비추었다. 가자, 그래, 그곳으로 가자. 프랑스, 파리로 가는 거다. 그곳에는 많은 것이 있다더라. 많은 예술가들이 존재한다더라! 나는, 그곳에서 내 걸음을 내딛을 것이다. 카르도는 그렇게 생각했다.
            </div>
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

    if (window.innerWidth <= 1024) {
        window.scrollTo(0, 0);
        wrapper.scrollTo(0, 0);
    }
}
