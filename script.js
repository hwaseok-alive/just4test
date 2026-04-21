function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    const firstTab = document.querySelector('.tab');
    switchTab(firstTab, '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(el, name) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    const imgContainer = document.getElementById('image-container');
    const propertyEditor = document.getElementById('property-editor');
    
    imgContainer.innerHTML = ''; 
    // 모든 탭에서 일단 속성창을 숨깁니다 (고정 문제 해결)
    propertyEditor.classList.add('hidden-block');

    const cleanName = name.replace('◈ ', '').trim();

    if (cleanName === '표지') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (cleanName === '속성') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        // '속성' 탭일 때만 속성창을 보여줍니다
        propertyEditor.classList.remove('hidden-block');
    } 
    else if (cleanName === '물품') {
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card">
            </div>
        `;
    }
}
