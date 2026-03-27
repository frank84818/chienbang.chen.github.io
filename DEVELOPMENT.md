# Development Process: SDD & TDD Hybrid

This project follows a rigorous development workflow combining **Spec-Driven Development (SDD)** and **Test-Driven Development (TDD)** to ensure high code quality and alignment with requirements.

## 🛠️ Development Workflow

Every new feature or significant change must follow these three phases:

### Phase 1: Specification (SDD)
Before writing any code, you must define the feature's behavior and constraints.
1. Create a new specification file in `docs/features/<feature-name>.md`.
2. Define:
   - **Objective**: What is the goal of this feature?
   - **User Stories**: Who is it for and what do they want to do?
   - **Technical Specs**: Component structure, state management, API interactions.
   - **Acceptance Criteria**: Specific, measurable conditions that must be met.

### Phase 2: Testing (TDD)
Write tests based on the acceptance criteria defined in the specification.
1. Create a test file (e.g., `src/components/MyComponent.test.tsx`).
2. Implement test cases that cover all acceptance criteria.
3. **Run tests**: They should fail initially (Red stage).

### Phase 3: Implementation
Write the minimum amount of code required to pass the tests.
1. Implement the feature in `src/`.
2. **Run tests**: Ensure all tests pass (Green stage).
3. **Refactor**: Clean up the code while ensuring tests remain green.

## 📱 Responsive Web Design (RWD) Mandate
所有新開發的頁面與組件 **必須** 支援 RWD。
1. **Mobile First**: 優先考慮行動裝置的排版，再透過 Tailwind 的 `md:`, `lg:`, `xl:` 等前綴擴展至桌面版。
2. **Breakpoints**: 確保在 375px (Mobile), 768px (Tablet), 1024px (Laptop), 1440px+ (Desktop) 下均無跑版或橫向捲軸。
3. **Typography**: 字體大小需隨螢幕寬度自動調整（使用 `text-base md:text-lg` 等方式）。

## ✅ Completion Criteria
...
3. **100% of the associated tests pass.**
4. **Verified RWD compatibility across all major breakpoints.**

## 🧪 Testing Tools
- **Runner**: [Vitest](https://vitest.dev/)
- **Library**: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Environment**: [jsdom](https://github.com/jsdom/jsdom)

## 🚀 Commands
- `npm run test`: Run all tests once.
- `npm run test:watch`: Run tests in interactive watch mode.
- `npm run test:ui`: Open Vitest UI for a visual testing experience.
