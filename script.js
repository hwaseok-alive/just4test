function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

function switchTab(element, tabName) {
    // 1. 모든 탭 비활성화
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(t => t.classList.remove('active'));
    
    // 2. 현재 탭 활성화
    element.classList.add('active');
    
    // 3. 제목 변경
    document.getElementById('tab-label').innerText = tabName;
    document.getElementById('info-title').innerText = tabName;

    // 4. 오른쪽 텍스트 애니메이션 초기화 (다시 나타나게 함)
    const wrapper = document.getElementById('info-wrapper');
    wrapper.style.animation = 'none';
    wrapper.offsetHeight; // 브라우저가 애니메이션 리셋을 인식하게 함
    wrapper.style.animation = 'slideRight 0.6s ease-out forwards';

    // 5. 내용 변경
    const content = document.getElementById('info-content');
    content.innerHTML = `<p>${tabName} 섹션의 상세 내용입니다. 테스트 문구 출력 중...</p>`;
}
