// 상세창 열기
function openDetail() {
    document.getElementById('detail-overlay').classList.remove('hidden');
}

// 상세창 닫기
function closeDetail() {
    document.getElementById('detail-overlay').classList.add('hidden');
}

// 탭 전환 기능
function switchTab(tabName) {
    // 탭 제목 변경
    document.getElementById('current-tab-title').innerText = tabName;
    document.getElementById('content-title').innerText = tabName;
    document.getElementById('content-body').innerText = `${tabName} 섹션의 테스트 내용입니다.`;

    // 활성화 버튼 스타일 변경
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        if (btn.innerText === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}