# Feature Spec: Page Template System

## 1. Objective
建立一個可重用的 `PageTemplate` 組件，讓不同性質的分頁（如 CV 與 Wedding）能共用結構但呈現不同的視覺風格，並能自動或手動顯示其子頁面。

## 2. User Stories
- 作為開發者，我希望 `/cv` 和 `/wedding` 能有不同的主題色與字體風格。
- 作為使用者，在 `/cv` 頁面中，我希望能看到該類別下的所有子頁面導航。

## 3. Technical Specs
- **Component**: `src/components/PageTemplate.tsx`
- **Props**:
  - `title`: 頁面標題。
  - `theme`: 決定風格（如 'professional' | 'romantic'）。
  - `subPages`: 包含 `{ name, href }` 的陣列，用於顯示子導航。
  - `children`: 頁面實際內容。
- **Styling**: 根據 `theme` 屬性動態切換 Tailwind 類名。

## 4. Acceptance Criteria
- [ ] 需能根據傳入的 `theme` 改變背景色或文字風格。
- [ ] 若傳入 `subPages`，需渲染子導航連結。
- [ ] 子導航需與主導航有視覺上的層次區分。
