# Feature Spec: Global Navigation System

## 1. Objective
建立一個全域可見的導航欄，讓使用者能在不同分頁間快速切換，並清晰知道目前所處位置。

## 2. User Stories
- 作為使用者，我希望在任何頁面都能看到導航欄。
- 作為使用者，點擊導航欄上的連結時，能無縫切換到對應頁面。
- 作為使用者，我希望能從導航欄的視覺回饋（如顏色變化）得知目前所在的頁面。

## 3. Technical Specs
- **Component**: `src/components/Navigation.tsx`
- **Logic**: 使用 `next/navigation` 的 `usePathname` 來判斷當前活躍路徑。
- **Links**: 使用 `next/link` 實現客戶端導航。
- **Styles**: 使用 Tailwind CSS 處理 `active` 狀態。

## 4. Acceptance Criteria
- [ ] 導航欄需包含 "Home", "CV", "Wedding" 三個連結。
- [ ] 當前頁面對應的連結需有明顯的視覺區分（Active state）。
- [ ] 點擊連結需能正確導向目標路徑。
- [ ] 導航欄需在全網頁面顯示。
