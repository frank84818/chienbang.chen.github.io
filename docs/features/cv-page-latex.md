# Feature Spec: LaTeX-Driven Multi-language CV

## 1. Objective
建立一個專業的履歷頁面，支援直接讀取並渲染 LaTeX 格式的文檔內容。具備多語系切換功能，並提供符合學術/技術圈品味的專業 LaTeX 視覺風格。

## 2. Technical Specs
- **Parsing/Rendering**: 
  - 使用 `react-latex-next` 搭配 `KaTeX` 來處理數學公式與基礎 LaTeX 語法。
  - 對於複雜的 LaTeX 結構（如 `\section`, `\item`），建立一個自定義的「LaTeX-to-React」對照表或解析邏輯，確保渲染結果符合網頁佈局。
- **Internationalization (i18n)**:
  - 在 `src/data/cv/` 目錄下管理不同語系的 `.tex` 內容。
  - 實作切換開關（EN / ZH），動態加載對應的內容。
- **Styling**:
  - **Font**: 採用 **Computer Modern** (LaTeX 預設字體) 的網頁替代方案（如 Latin Modern 或 CMU Serif）。
  - **Layout**: 經典的 LaTeX CV 佈局：大標題、窄邊欄資訊、寬版經歷描述、清晰的水平分割線。

## 3. Data Structure
內容將以字串形式存放在語系檔案中，例如：
```typescript
const cvContent = {
  header: "\\section{Education}",
  experience: "\\item Senior Engineer at..."
}
```

## 4. Acceptance Criteria
- [ ] 頁面能正確渲染 LaTeX 語法（如 $\LaTeX$ 符號）。
- [ ] 切換語言時，內容、日期格式與職稱需同步更新。
- [ ] 視覺風格需呈現出 LaTeX 經典的襯線體與簡約排版。
- [ ] 支援 RWD，在行動裝置上能自動轉為單欄顯示。
