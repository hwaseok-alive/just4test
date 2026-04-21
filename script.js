function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
    // 메인 화면 하트 투명도 10%로 조절
    document.getElementById('home-content').classList.add('low-opacity');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
    // 메인 화면 하트 투명도 복구
    document.getElementById('home-content').classList.remove('low-opacity');
}

function switchTab(el, name) {
    // 1. 모든 탭에서 active 클래스 제거 (전부 하얀색으로 복구)
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    
    // 2. 현재 클릭한 탭에만 active 추가 (주황색 고정)
    el.classList.add('active');

    // 3. 타이틀에서 ◈ 제거하고 텍스트만 우측 정보창에 표시
    const cleanName = name.replace('◈ ', '');
    document.getElementById('info-title').innerText = cleanName;
    document.getElementById('info-content').innerHTML = `<p>${cleanName} 섹션 데이터입니다.</p>`;

    // 4. 오른쪽 정보창 애니메이션 리셋 (슬라이드 효과)
    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'slideIn 0.5s ease-out';
}
