function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    // 하트 투명도 조절
    document.getElementById('home-content').classList.add('low-opacity');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
    // 하트 투명도 복구
    document.getElementById('home-content').classList.remove('low-opacity');
}

function switchTab(el, name) {
    // 1. 모든 탭에서 active 제거
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    
    // 2. 현재 클릭한 탭만 active (주황색 고정)
    el.classList.add('active');

    // 3. 타이틀 텍스트 추출 및 우측 제목 주황색 설정 보조
    const cleanName = name.replace('◈ ', '');
    const title = document.getElementById('info-title');
    title.innerText = cleanName;
    title.style.color = "#ff6022"; // JS에서도 한 번 더 색상 강조

    document.getElementById('info-content').innerHTML = `<p>${cleanName} 섹션 데이터입니다.</p>`;

    // 4. 오른쪽 정보 패널 애니메이션 재생
    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'slideIn 0.5s ease-out';
}
