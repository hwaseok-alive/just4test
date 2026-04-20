function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    // 메인 화면 하트를 10% 투명도로 조절
    document.getElementById('home-content').classList.add('low-opacity');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
    // 메인 화면 하트를 다시 100%로 복구
    document.getElementById('home-content').classList.remove('low-opacity');
}

function switchTab(el, name) {
    // 모든 탭에서 active 클래스 제거
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // 클릭한 탭에만 active 추가 (주황색으로 변함)
    el.classList.add('active');

    // 상단 라벨 및 우측 타이틀 변경
    document.getElementById('tab-label').innerText = name;
    document.getElementById('info-title').innerText = name;
    document.getElementById('info-content').innerHTML = `<p>${name} 섹션 데이터입니다.</p><p>리버스 1999 스타일 레이아웃이 유지됩니다.</p>`;

    // 애니메이션 리셋
    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'slideIn 0.5s ease-out';
}
