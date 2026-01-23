# 🛒 Superstore Profitability & Strategic Recovery

<a href="./Superstore_Strategy_Deck.pdf" target="_blank">
  <img src="https://img.shields.io/badge/View_Presentation_Deck-FF5733?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white" alt="View Deck">
</a>

This project is a forensic data analysis of a national retail chain's transaction data. The goal was to identify the root causes of profit stagnation and develop a 90-day execution plan to recover lost margins.

---

## 🔍 Project Overview

- Performed **K-Means Clustering** to segment customers by profitability.
- Built a **Multivariate Regression** model to test hypotheses (Shipping vs. Discounting).
- Identified a "Bleeder" customer segment causing 80% of negative margins.
- Developed a tiered discounting strategy to recover **$218k/year**.

---

## 🧪 Key Findings

- **Root Cause:** Indiscriminate discounting (>20%) on "Technology" products was the primary driver of loss ($R^2 > 0.6$).
- **Myth Busted:** Shipping costs were initially blamed but showed a weak correlation with profit loss ($R^2 < 0.2$).
- **Recovery:** Eliminating "Same Day" shipping for standard-tier customers and capping tech discounts would immediately reverse the trend.

---

## 🚀 Impact & Execution Plan

| Phase | Action Item | Expected Impact |
| :--- | :--- | :--- |
| **Month 1** | **Stop the Bleeding:** Hard cap of 15% discount on "Technology" category. | Instant margin recovery of ~8%. |
| **Month 2** | **Shipping Optimization:** Eliminate "Same Day" shipping for non-VIPs. | Reduce logistics overhead by 12%. |
| **Month 3** | **Retargeting:** Shift marketing spend away from "Bleeder" cluster. | Increase Customer Lifetime Value (CLV). |

---

## 🧰 Tools Used

- **Python:** Pandas (Cleaning), Scikit-Learn (Clustering), Statsmodels (Regression)
- **Visualization:** Seaborn, Matplotlib
- **BI:** Power BI (for dashboarding findings)

---

## 🧑‍💻 Author

**Sudheesh Sreenilayam** 📎 [LinkedIn](https://www.linkedin.com/in/ssudheesh)
