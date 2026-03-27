# Feature Spec: Enhanced WebGL & Theme Synchronization

## 1. Objective
強化 Work 模式的 WebGL 背景，加入低軌衛星與電波通訊視覺要素。同時修復深淺色模式切換時視覺無差異的問題，確保網站能正確偵測並響應系統主題。

## 2. Technical Specs
- **WebGL - Work Mode**:
  - **Satellite**: 建立一個沿著極地軌道或傾斜軌道運行的 LEO 衛星模型（簡單幾何體）。
  - **Radio Waves**: 實作從地面站（或衛星）發出的擴散電波波紋（使用透明環狀幾何體）。
  - **Atmosphere**: 加入一個淡雅的地球大氣邊緣感。
- **Theme Synchronization**:
  - **CSS Variables**: 在 `globals.css` 中定義強對比的深淺色變數。
  - **Tailwind Dark Mode**: 在組件中全面使用 `dark:` 類名。
  - **Work Mode Style**: 
    - Light: 科技白/淺藍，高透明度網格。
    - Dark: 深邃太空藍/科技黑，發光電子元件感。
  - **Life Mode Style**:
    - Light: 日系米白/暖陽，明亮清新。
    - Dark: 靜謐深夜藍/月光色，沉靜溫馨。

## 3. Acceptance Criteria
- [ ] 瀏覽器切換深淺色模式時，背景色、文字顏色及組件邊框需有明顯變化。
- [ ] Work 背景需能看到移動的小點（衛星）與擴散的圓環（電波）。
- [ ] 確保 WebGL 效能穩定，不造成過度卡頓。
