window.onload = function() {
    const mainImg = document.getElementById('main-enter-img');
    if (mainImg) {
        mainImg.addEventListener('click', openDetail);
        mainImg.addEventListener('touchstart', openDetail);
    }
};

function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    switchTab(document.querySelector('.tab'), '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(el, name) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    const cleanName = name.replace('◈ ', '');
    const imgContainer = document.getElementById('image-container');
    const propertyEditor = document.getElementById('property-editor');
    
    imgContainer.innerHTML = ''; 
    propertyEditor.classList.add('hidden-block');

    if (cleanName === '표지') {
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (cleanName === '속성') {
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
