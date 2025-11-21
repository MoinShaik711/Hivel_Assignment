# Hivel Assignment – Polynomial Constant Calculation

## 📌 Problem Statement
The assessment provides polynomial roots in a **JSON file**, where each root value is encoded using different numeral bases.  
The task is:
1. Read the JSON file.
2. Decode each value using its given base.
3. Use the decoded values as polynomial roots.
4. Compute the **constant term C** of the polynomial.
5. Print the value of **C**.

### Key Notes
- If the polynomial has `k = m + 1` roots, then it is a polynomial of degree `m`.
- Polynomial structure:  
  **P(x) = (x - r1)(x - r2)(x - r3) ... (x - rk)**
- Therefore, the constant term is:  
  **C = (-1)^k × (r1 × r2 × r3 × … × rk)**  
  *(Sign depends on degree; multiplication used here directly.)*

---

## 📁 Project Structure
Hivel_Assignment/
│-- solution.js
│-- test1.json
│-- test2.json
│-- README.md