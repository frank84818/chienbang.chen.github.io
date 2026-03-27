# Feature Spec: Core Routing

## 1. Objective
定義網站的核心路由結構，確保不同目的的內容（首頁、履歷、婚禮）能透過獨立的 URL 存取。

## 2. User Stories
- 作為使用者，我希望能透過 `/cv` 看到個人履歷頁。
- 作為使用者，我希望能透過 `/wedding` 看到婚禮資訊頁。
- 作為使用者，輸入根路徑 `/` 時能正確進入首頁。

## 3. Technical Specs
- **File Structure**:
  - `src/app/page.tsx` -> `/`
  - `src/app/cv/page.tsx` -> `/cv`
  - `src/app/wedding/page.tsx` -> `/wedding`
- **Compatibility**: 必須在 Safari, Firefox, Chrome, Edge 正常渲染。
- **Export**: 支援 `output: 'export'` 靜態匯出。

## 4. Acceptance Criteria
- [ ] 訪問 `/` 顯示 "Home" 關鍵字。
- [ ] 訪問 `/cv` 顯示 "CV" 關鍵字。
- [ ] 訪問 `/wedding` 顯示 "Wedding" 關鍵字。
- [ ] 所有頁面均需包裹在 Root Layout 內。
