# Feature Spec: Modern Markdown-Driven CV

## 1. Objective
捨棄複雜且易出錯的 LaTeX 渲染，改用更靈活、易讀且支援強大樣式化的 Markdown 格式。目標是打造一個類似 GitHub Readme 或現代技術文件風格的高質感專業履歷。

## 2. Technical Specs
- **Engine**: 使用 `react-markdown` 解析 `.md` 檔案內容。
- **Styling**: 
  - 使用 `@tailwindcss/typography` (prose class) 作為基礎樣式。
  - 自定義 `prose` 類名以符合現代簡約美學（如細緻的間距、更優雅的字體組合）。
- **i18n**: 透過讀取 `src/data/cv/cv-en.md` 與 `src/data/cv/cv-zh.md` 實現。
- **UI Enhancements**:
  - **Glassmorphism Sidebar**: 側邊欄顯示個人資訊，具備毛玻璃效果。
  - **Animated Sections**: 進入頁面時的淡入效果。
  - **Modern Typography**: 標題使用 `font-black`，內文使用高品質無襯線字體。

## 3. Acceptance Criteria
- [ ] 頁面需能正確解析並渲染 Markdown 的標題、清單、粗體與連結。
- [ ] 視覺上需具備明顯的層次感，不再是單調的白底黑字。
- [ ] 支援多語系即時切換。
- [ ] 支援列印模式，列印時需自動優化為紙本排版。
