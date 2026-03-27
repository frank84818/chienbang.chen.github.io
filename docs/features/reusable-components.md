# Feature Spec: Reusable UI Components

## 1. Objective
將主頁及各分頁中重複出現的視覺元素（如 Feature Card, Hero Section）提取為獨立組件，透過參數控管風格與內容，提高代碼維護性。

## 2. Components
- **`FeatureCard`**: 
  - Props: `title`, `description`, `icon`, `href`, `theme` (work | life), `footerText`.
  - Logic: 根據 `theme` 自動切換 Tailwind 顏色與懸停動畫。
- **`HeroSection`**:
  - Props: `badge`, `title`, `highlightTitle`, `description`, `primaryCTA`, `secondaryCTA`, `theme`.
  - Logic: 處理標題換行與漸層文字效果。

## 3. Acceptance Criteria
- [ ] 主頁代碼應大幅簡化，重複的 JSX 結構應消失。
- [ ] 組件需具備良好的 TypeScript 型別定義。
- [ ] 支援 RWD，確保在不同螢幕下表現一致。
