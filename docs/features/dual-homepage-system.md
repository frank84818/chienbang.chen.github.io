# Feature Spec: Dual Homepage & RWD Optimization

## 1. Objective
實作一個具備 RWD 大版面且能切換 Work/Life 模式的主頁，並支援系統深淺色模式。

## 2. Technical Specs
- **State Management**: 使用 React State 紀錄目前選取的模式 (`work` | `life`)。
- **Theme Detection**: 
  - 使用 CSS `prefers-color-scheme` 處理深淺色。
  - 使用 `window.matchMedia` 在客戶端初始化時偵測系統主題。
- **RWD & Desktop Layout**:
  - 在寬螢幕上，使用 `max-w-[1440px]` 並增加字體大小。
  - 捨棄「窄版手機風格」，利用寬版網格展示更多資訊。

## 3. Visual Styles
- **Work Mode**: 
  - 主題：衛星通信、信號處理（波形、數據點、網格）。
  - 色調：冷色調（深藍、靛藍、科技黑）。
- **Life Mode**:
  - 主題：旅遊、攝影（柔和光影、底片感、留白）。
  - 色調：日系清新（米白、淺綠、大地色、柔和粉）。

## 4. Acceptance Criteria
- [ ] 主頁需提供一個明顯的 Toggle 按鈕切換 Work/Life。
- [ ] 切換模式時，整體視覺風格（字體、背景、裝飾元素）需立即轉換。
- [ ] 網頁內容需隨瀏覽器寬度伸展，桌面版不再僅限於中央窄條。
