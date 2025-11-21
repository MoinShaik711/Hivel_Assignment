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

yaml
Copy code

---

## 🧠 How to Run the Code
### Prerequisite
Install Node.js

Check version:
```bash
node -v
Run with Test Case 1
bash
Copy code
node solution.js test1.json
Run with Test Case 2
bash
Copy code
node solution.js test2.json
🟢 Output
Test Case	Output
test1.json	Constant C = 336
test2.json	Constant C = 6.825131192247423e+124

Actual Output Screenshot (VS Code Terminal):

mathematica
Copy code
Constant C = 336
Constant C = 6.825131192247423e+124
🛠 Tech Stack
JavaScript (Node.js)

JSON Input decoding

VS Code + GitHub

👨‍💻 Author
Khaja Moinuddin S

🚀 Submission Summary
All requirements completed:

JSON read ✔

Base decoding ✔

Polynomial constant computation ✔

Printed result ✔

Code deployed on GitHub ✔

yaml
Copy code

---

# Next step for you:
- Open `README.md` in VS Code
- Paste everything above
- Save
- Run:
git add README.md
git commit -m "Add detailed README"
git push origin main