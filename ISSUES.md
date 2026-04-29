## ISSUES REPORT

---

### 1. Cart quantity message remains after changing product variant

**Type:** Functional / UX Issue

**Severity:** Medium

**Steps to Reproduce:**

- Add 1 “Hummingbird Printed Sweater” in size S to the cart (ensure it is the only item in the cart).
- Open the product details page for “Hummingbird Printed Sweater.”
- Verify the message at the top: “Your cart contains 1 of these products.”
- Change the size attribute from S to M.

**Expected Result:**
The cart message should disappear or update, since size M has not been added to the cart.

**Actual Result:**
The message “Your cart contains 1 of these products.” remains visible after switching to size M.

**Impact:**
This may confuse users into thinking size M is already in the cart.

---

### 2. Products with selectable attributes can be added directly from product listing without variant confirmation

**Type:** Usability Issue

**Severity:** Low

**Steps to Reproduce:**

- Go to the homepage product listing section.
- Find “Hummingbird Printed Sweater” product card.
- Click Quick add to cart button in a product card.

**Expected Result:**
Users should be prompted to choose product attributes (such as size) before adding the item to the cart.

**Actual Result:**
The product is automatically added to the cart with a default size (S) without explicit user confirmation.

**Impact:**
Users may unintentionally add the wrong product variant.

---

### 3. Cart item cannot be removed by manually entering quantity 0

**Type:** Usability Issue

**Severity:** Low

**Steps to Reproduce:**

- Add a product to the cart.
- Open the cart page.
- Try entering “0” directly into the quantity field instead number 1.

**Expected Result:**
Entering 0 should remove the item from the cart or trigger removal.

**Actual Result:**
Users cannot directly remove the product this way and must use the minus button instead.

**Impact:**
This may reduce efficiency and create unnecessary friction for users.