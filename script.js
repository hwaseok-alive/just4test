function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    document.getElementById('home-content').classList.add('low-opacity');
    // 처음 입장 시 '표지' 탭 로드
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
    const infoPanel = document.getElementById('info-panel');
    const imgContainer = document.getElementById('image-container');
    const titleElement = document.getElementById('info-title');
    
    // 이전 콘텐츠 초기화
    imgContainer.innerHTML = ''; 
    infoPanel.classList.remove('hidden-block'); // 일단 보이기
    titleElement.innerText = cleanName;

    // 탭별 콘텐츠 분기
    if (cleanName === '표지') {
        // [수정] 표지: 왼쪽 탭 옆 중앙에 전체 이미지 표시, 오른쪽 블록 제거
        imgContainer.innerHTML = `<img src="https://i.imgur.com/ad45cb.jpg" class="content-img">`;
        infoPanel.classList.add('hidden-block');
    } 
    else if (cleanName === '속성') {
        // 속성: 캐릭터 이미지 표시, 오른쪽 블록 유지
        imgContainer.innerHTML = `<img src="https://i.imgur.com/l03409J.png" class="content-img">`;
    } 
    else if (cleanName === '물품') {
        // 물품: 캐릭터 제거, 순차 애니메이션 카드 표시, 오른쪽 블록 제거
        infoPanel.classList.add('hidden-block');
        imgContainer.innerHTML = `
            <div class="item-list">
                <img src="https://i.imgur.com/UBQIzgK.png" class="item-card" id="i1">
                <img src="https://i.imgur.com/UZkRJ1V.png" class="item-card" id="i2">
                <img src="https://i.imgur.com/Za0T3xy.png" class="item-card" id="i3">
            </div>
        `;
        // 카드 순차 애니메이션 실행
        setTimeout(() => document.getElementById('i1').classList.add('animate'), 100);
        setTimeout(() => document.getElementById('i2').classList.add('animate'), 300);
        setTimeout(() => document.getElementById('i3').classList.add('animate'), 500);
    } 
    else if (cleanName === '문화') {
        // 문화: 캐릭터 및 오른쪽 블록 제거 (완전 빈 공간)
        infoPanel.classList.add('hidden-block');
    }

    // 정보창 애니메이션 리셋
    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'charFade 0.4s ease-out';
}
