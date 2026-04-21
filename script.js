* { box-sizing: border-box; margin: 0; padding: 0; }
body, html { width: 100%; height: 100%; background: #000; color: #fff; font-family: 'Malgun Gothic', sans-serif; overflow: hidden; }

/* 도입부: 중앙 정렬 및 호버 효과 */
#home-screen { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; text-align: center; }
#main-enter-img { 
    width: 80%; max-width: 500px; cursor: pointer; 
    transition: transform 0.3s ease; 
}
#main-enter-img:hover { transform: scale(1.05); }
.guide-text { font-size: 20px; color: #888; margin-top: 30px; letter-spacing: 2px; }

/* 오버레이 */
#detail-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.98); z-index: 100; display: flex; flex-direction: column; }
#detail-overlay.hidden { display: none !important; }

/* EXIT 버튼 */
.ui-header { width: 100%; padding: 20px 40px; display: flex; justify-content: flex-end; z-index: 1000; }
.exit-btn { background: none; border: 1px solid #fff; color: #fff; cursor: pointer; padding: 5px 15px; font-size: 12px; }

/* PC 레이아웃: 왼쪽 탭과 중앙 이미지 정렬 */
.ui-wrapper { flex: 1; display: flex; align-items: center; padding: 0 60px; gap: 50px; overflow: hidden; }

/* 왼쪽 탭: 크게 보이고 마우스 올리면 밀리는 효과 */
.ui-side-tabs { display: flex; flex-direction: column; gap: 30px; width: 220px; min-width: 220px; }
.tab { 
    font-size: 22px; color: rgba(255,255,255,0.3); cursor: pointer; 
    transition: 0.3s ease; border-left: 4px solid transparent; padding-left: 15px; 
}
.tab:hover { color: #fff; transform: translateX(10px); }
.tab.active { color: #ff6022 !important; border-left-color: #ff6022; font-weight: bold; }

/* 중앙 이미지 영역 및 물품 리스트 */
.ui-content-area { flex: 1; display: flex; justify-content: center; align-items: center; height: 100%; }
.content-img { max-width: 100%; max-height: 80vh; object-fit: contain; }

.item-list { display: flex; gap: 30px; justify-content: center; align-items: center; width: 100%; }
.item-card { 
    max-height: 65vh; width: auto; border-radius: 10px; 
    transition: transform 0.3s; cursor: pointer; 
}
.item-card:hover { transform: scale(1.08); }

/* 모바일 대응: 탭 상단 고정 */
@media (max-width: 768px) {
    .ui-wrapper { flex-direction: column; padding: 80px 20px 20px; overflow-y: auto; }
    .ui-side-tabs { 
        position: fixed; top: 0; left: 0; width: 100%; flex-direction: row; 
        justify-content: space-around; background: #000; padding: 15px 0; 
        z-index: 900; border-bottom: 1px solid #333; 
    }
    .tab { font-size: 16px; border-left: none; padding-left: 0; border-bottom: 3px solid transparent; }
    .tab:hover { transform: none; }
    .tab.active { border-bottom-color: #ff6022; }
    .item-list { flex-direction: column; }
    .item-card { width: 90%; max-height: none; }
}
