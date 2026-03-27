# Feature Spec: Root Layout

## 1. Objective
提供網站所有頁面共享的基礎 HTML 結構，包含字體設定、全域樣式加載以及基本的 SEO Metadata。

## 2. User Stories
- 作為使用者，我希望在不同頁面間切換時，網站的基礎風格（如背景色、字體）保持一致。
- 作為搜尋引擎，我希望每個頁面都有正確的語系宣告（lang="en" 或 "zh-Hant"）。

## 3. Technical Specs
- **File**: `src/app/layout.tsx`
- **Components**: 包含 `<html>` 與 `<body>` 標籤。
- **Styling**: 引入 `globals.css` (Tailwind)。
- **Metadata**: 設定全域標題與描述。

## 4. Acceptance Criteria
- [ ] 根節點必須包含 `lang="en"` (或指定語系)。
- [ ] 必須正確渲染 `children` 內容。
- [ ] 必須引入 Tailwind CSS 基礎樣式。
- [ ] 標題與描述需符合 SEO 基本需求。
