# Feature Spec: Home Page - Modern Minimalist (Next.js Style)

## 1. Objective
重新設計首頁，採用類似 Next.js 官網的現代簡約風格，強調乾淨的排版、細緻的陰影與漸層，並確保完美的 RWD 行動裝置相容性。

## 2. User Stories
- 作為使用者，我希望在電腦上看到大氣且具現代感的佈局。
- 作為行動裝置使用者，我希望導航與內容能自動適應螢幕大小，保持易讀性。
- 作為使用者，我希望頂部能清晰顯示個人姓名與導航菜單（Menubar）。

## 3. Technical Specs
- **Style Archetype**: [Next.js Website](https://nextjs.org/)
- **Visual Elements**:
  - **Typography**: 使用系統字體家族，強調粗體標題。
  - **Background**: 純白或極簡淺灰背景，搭配細微的網格或漸層感。
  - **Cards**: 使用細緻邊框（border-gray-100）與懸停後的升起陰影效果。
- **Layout Structure**:
  - **Top**: Sticky Navigation Bar (已存在，需優化外觀)。
  - **Hero Section**: 居中對齊，大標題、副標題與行動呼籲按鈕（CTA）。
  - **Feature Grid**: 響應式網格（行動 1 欄，桌面 2 欄）。

## 4. Acceptance Criteria
- [ ] 頂部導航欄需包含個人姓名與各分頁連結。
- [ ] Hero Section 在行動裝置上需自動縮放字級。
- [ ] 頁面需使用 `max-w` 限制內容寬度，避免在超寬螢幕上過度展開。
- [ ] 採用漸變文字 (Gradient Text) 或細緻的 UI 元素來體現現代感。
