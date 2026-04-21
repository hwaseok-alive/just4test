function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    document.getElementById('home-content').classList.add('low-opacity');
    // 처음 입장 시 '표지' 탭 실행
    switchTab(document.querySelector('.tab'), '표지');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
    document.getElementById('home-content').classList.remove('low-opacity');
}

function switchTab(el, name) {
    // 모든 탭의 active 클래스 제거
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // 클릭한 탭에 active 추가
    el.classList.add('active');

    const cleanName = name.replace('◈ ', '');
    const imgContainer = document.getElementById('image-container');
    const propertyEditor = document.getElementById('property-editor');
    
    // 이전 이미지 콘텐츠 초기화
    imgContainer.innerHTML = ''; 
    // [중요] 모든 탭에서 일단 우측 속성 블록을 숨김
    propertyEditor.classList.add('hidden-block');

    // 탭별 콘텐츠 분기
    if (cleanName === '표지') {
        // 표지: 표지 이미지를 중앙 영역에 표시, 우측 블록은 숨김 유지
        imgContainer.innerHTML = `<img src="https://i.imgur.com/VWWbpQ7.png" class="content-img">`;
    } 
    else if (cleanName === '속성') {
        // [수정] 속성: 캐릭터 이미지는 왼쪽 탭 옆으로, 우측 속성 편집 블록은 노출
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
        propertyEditor.classList.remove('hidden-block'); // 오직 속성 탭에서만 보이기
    } 
    else if (cleanName === '물품') {
        // 물품: 카드 3장 순차 애니메이션 표시, 우측 블록은 숨김 유지
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" id="card-1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" id="card-2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" id="card-3">
            </div>
        `;
        // 카드 순차 애니메이션 실행
        setTimeout(() => document.getElementById('card-1').classList.add('animate'), 100);
        setTimeout(() => document.getElementById('card-2').classList.add('animate'), 300);
        setTimeout(() => document.getElementById('card-3').classList.add('animate'), 500);
    } 
    else if (cleanName === '문화') {
        // 문화: 모든 콘텐츠 삭제 (완전 빈 공간)
    }
}
