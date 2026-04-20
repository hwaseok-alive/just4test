function openDetail() {
    // 상세창 보이기
    document.getElementById('detail-overlay').classList.remove('hidden');
    // 첫 화면 하트/문구 투명도 10%로 낮추기
    document.getElementById('home-content').classList.add('low-opacity');
}

function closeDetail() {
    // 상세창 숨기기
    document.getElementById('detail-overlay').classList.add('hidden');
    // 첫 화면 하트/문구 투명도 다시 100%로 복구
    document.getElementById('home-content').classList.remove('low-opacity');
}

function switchTab(el, name) {
    // 탭 활성화 변경
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    // 텍스트 업데이트
    document.getElementById('tab-label').innerText = name;
    document.getElementById('info-title').innerText = name;
    document.getElementById('info-content').innerHTML = `<p>${name} 섹션의 상세 데이터입니다.</p><p>이미지와 탭이 영상과 유사하게 작동합니다.</p>`;

    // 오른쪽 텍스트 애니메이션 재실행
    const box = document.getElementById('info-anim-box');
    box.style.animation = 'none';
    void box.offsetWidth; 
    box.style.animation = 'slideIn 0.5s ease-out';
}
