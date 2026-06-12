# QA Fresher Training Task – Part 2

## Overview

This project demonstrates advanced Playwright automation concepts using TypeScript.

### Objectives

- Handle multiple browser tabs and windows
- Implement network mocking
- Create reusable Playwright fixtures
- Generate reports and traces
- Investigate failures using debugging tools
- Improve framework maintainability

---

# Technology Stack

- Playwright
- TypeScript
- Node.js

---

# Project Structure

```
QA_Trainee_Task_Part2
├── part2_day1/
│   ├── output/
│   │   ├── Network mocking.png
│   │   └── Multiple tabs.png
│   ├── pages/
│   │   ├── BrowserWindowsPage.ts
│   │   └── BookStorePage.ts
│   ├── tests/
│   │   ├── network-mocking.spec.ts
│   │   └── tabs.spec.ts
│   ├── playwright.config.ts
│   └── package.json
├── part2_day2/
│   ├── fixtures/
│   │   └── baseFixture.ts
│   ├── output/
│   ├── pages/
│   │   ├── BrowserWindowsPage.ts
│   │   └── BookStorePage.ts
│   ├── tests/
│   │   ├── networkMocking.spec.ts
│   │   ├── browserWindows.spec.ts
│   │   ├── failures.spec.ts
│   │   └── timeouts.spec.ts
│   ├── utils/
│   │   └── commonUtils.ts
│   ├── playwright.config.ts
│   └── package.json
└── README.md
```

---

# Day 1 Implementation

## Multiple Tabs & Windows

### TC_001
Verify New Tab button opens a new tab.

### TC_002
Verify content of newly opened tab.

### TC_003
Close child tab and switch back to parent.

### TC_004
Verify New Window Message functionality.

### Concepts Covered

- Multiple tabs
- Multiple windows
- Context event handling
- Window switching
- Child page validation

---

## Network Mocking

### TC_005
Mock Books API with custom response.

### TC_006
Mock empty response.

### TC_007
Delay API response.

### Concepts Covered

- page.route()
- route.fulfill()
- route.continue()
- API interception
- Response manipulation

---

# Day 2 Implementation

## Custom Fixtures

### Page Object Fixtures

- BrowserWindowsPage Fixture
- BookStorePage Fixture

### Utility Fixture

- CommonUtils Fixture

### Benefits

- Reusability
- Reduced duplication
- Easier maintenance
- Cleaner test code

---

# Reports & Debugging

## Failure Categories Covered

1. Locator Not Found
2. Assertion Failure
3. URL Mismatch
4. Element Visibility Failure
5. Element Count Failure
6. Text Validation Failure
7. Network Failure
8. Missing Element Interaction

## Timeout Categories Covered

1. Test Timeout
2. Expect Timeout
3. Action Timeout
4. Navigation Timeout

---

# Execution Commands

## Run All Tests

```bash
npx playwright test
```

## Run Browser Window Tests

```bash
npx playwright test tests/browserWindows.spec.ts
```

## Run Network Mocking Tests

```bash
npx playwright test tests/networkMocking.spec.ts
```

## Generate HTML Report

```bash
npx playwright show-report
```

## Open Trace Viewer

```bash
npx playwright show-trace
```

---

# Reporting Configuration

```ts
use: {
  baseURL: 'https://demoqa.com/',
  trace: 'on',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure'
}
```

---

# Deliverables Completed

- Multiple Tab Automation Tests
- Network Mocking Tests
- Page Object Fixtures
- Utility Fixture
- Fixture-Based Tests
- HTML Reports
- Trace Viewer Evidence
- Failure Analysis
- Timeout Analysis
- README Documentation

---

# Learning Outcomes

Through this project the following concepts were learned:

- Advanced Playwright automation
- Browser context management
- Network interception and mocking
- Reusable fixture design
- Debugging with Trace Viewer
- Failure analysis techniques
- Timeout troubleshooting
- Automation framework maintainability

---

