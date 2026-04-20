function openDetail() {
    const overlay = document.getElementById('detail-overlay');
    overlay.classList.remove('hidden');
}

function closeDetail() {
    const overlay = document.getElementById('detail-overlay');
    overlay.classList.add('hidden');
}

function switchTab(element, tabName) {
    // 모든 탭 비활성화
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(t => t.classList.remove('active'));
    
    // 클릭한 탭 활성화
    element.classList.add('active');
    
    // 제목 및 내용 변경
    document.getElementById('tab-label').innerText = tabName;
    document.getElementById('info-title').innerText = tabName.toUpperCase();
    
    const content = document.getElementById('info-content');
    content.innerHTML = `
        <p style="color:#ccc;">[ ${tabName} ] 섹션의 상세 데이터입니다.</p>
        <div style="margin-top:20px; padding:15px; border:1px dashed #555;">
            테스트용으로 출력되는 게임 스타일 텍스트입니다. 
            리버스: 1999의 느낌을 살리기 위해 레이아웃을 조정했습니다.
        </div>
    `;
}
