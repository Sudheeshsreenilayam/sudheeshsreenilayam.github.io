# 🧠 Understanding Multicollinearity in Linear Regression using R

This project explores how **multicollinearity** affects the interpretation of linear regression models using synthetic data. It demonstrates the behavior of correlated predictors, compares simple vs. multiple regression models, and shows how a single outlier can influence regression diagnostics.

---

## 🔍 Project Overview

- Simulated two predictors: `x1` and `x2`, with high correlation (~0.83)
- Created a linear relationship with response variable `y`
- Compared regression models:
  - `y ~ x1`
  - `y ~ x2`
  - `y ~ x1 + x2`
- Added a **high-leverage outlier** and analyzed model diagnostics

---

## 💡 Key Learnings

- **Multicollinearity** can make a meaningful variable appear insignificant
- **Diagnostic plots** reveal leverage, residuals, and influence
- Always evaluate model assumptions and investigate anomalies visually

---

## 🧾 Files Included

| File | Description |
|------|-------------|
| `linear_regression_analysis.Rmd` | Main R Markdown code with commentary |
| `linear_regression_analysis.html` | Final rendered HTML output (viewable in browser) |
| `README.md` | This file |

---

## 🧰 Tools Used

- R (version ≥ 4.3)
- `stats` and `graphics` (base packages)
- R Markdown + xelatex for rendering
- IDE: Visual Studio Code with R extension

## 🔗 View Report Online

You can view the full interactive report here:  
👉 [Click to View Project](https://sudheeshsreenilayam.github.io/R-Projects/Linear-Regression-Multicollinearity-R/linear_regression_analysis.html)


---

## 🧑‍💻 Author

**Sudheesh Sreenilayam**  
📎 [Connect on LinkedIn](https://www.linkedin.com/in/ssudheesh)

---

> 💬 Feedback or suggestions? Feel free to open an issue or fork the repo!

