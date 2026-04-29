# PrestaShop Registration QA Task

This project contains automated end-to-end tests for the PrestaShop demo website registration flow using Playwright.

## Tested Scenarios

### Positive Test
- User can successfully register with valid data

### Negative Tests
- Registration fails with invalid email format
- Registration shows validation for empty required fields

---

## Tech Stack
- Playwright
- JavaScript
- Node.js

---

## Installation

```bash
npm install
```
---

## Run All Tests

```bash
npx playwright test
```
---

## Run Specific Test File

```bash
npx playwright test tests/register.spec.js
```
---

## Run in UI Mode

```bash
npx playwright test --ui
```