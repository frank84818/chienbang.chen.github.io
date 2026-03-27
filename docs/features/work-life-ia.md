# Feature Spec: Work/Life Information Architecture

## 1. Objective
重新組織網站結構，將內容歸類為 "Work" (專業) 與 "Life" (生活) 兩大領域。

## 2. IA Structure
- **/ (Home)**: 入口與模式切換中心。
- **/work**: Work 領域主頁。
  - **/work/cv**: 原 CV 頁面。
- **/life**: Life 領域主頁。
  - **/life/wedding**: 原 Wedding 頁面。

## 3. Acceptance Criteria
- [ ] 存取 `/work/cv` 需能正確渲染原本的履歷內容。
- [ ] 存取 `/life/wedding` 需能正確渲染原本的婚禮內容。
- [ ] 導航欄需反映此層級結構。
