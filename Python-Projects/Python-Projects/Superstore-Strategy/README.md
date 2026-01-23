---
layout: default
title: Superstore Profitability Strategy
---

# 🛒 Superstore Profitability & Strategic Recovery
**Role:** Lead Analyst | **Tools:** Python, Power BI, Scipy, Scikit-Learn

---

## 📌 Executive Summary
**The Challenge:** A national retail chain (Superstore) was experiencing profit stagnation despite consistent sales growth. Leadership needed a data-driven execution plan to reverse this trend within 90 days.

**The Solution:** I conducted a forensic data analysis using **Python** and **SQL** to isolate the root causes of profit bleed. By applying **K-Means Clustering** and **Multivariate Regression**, I proved that indiscriminate discounting—not shipping costs or competition—was the primary driver of loss.

**The Impact:**
* Identified **$218,000** in immediate annual recoverable profit.
* Developed a tiered discounting strategy that eliminated negative-margin transactions.
* Delivered a Power BI dashboard for regional managers to monitor "Bleeder" products in real-time.

---

## 🔍 The Analysis

### 1. Identifying the "Bleeders" (K-Means Clustering)
I used unsupervised learning to segment customers based on `Sales`, `Profit`, and `Discount %`. The analysis revealed a specific cluster of "High Volume / Negative Profit" customers who were abusing specific discount policies.

### 2. Proving the Root Cause (Regression Analysis)
Stakeholders initially blamed high shipping costs for the losses. I built a regression model to test this hypothesis.
* **Hypothesis:** Shipping Cost drives Profit Loss.
* **Result:** Shipping Cost had a weak correlation ($R^2 < 0.2$).
* **Discovery:** Discount % had a strong negative correlation ($R^2 > 0.6$) with profit, specifically when discounts exceeded 20% on Technology products.

---

## 🚀 The Execution Plan (90-Day Roadmap)

| Phase | Action Item | Expected Impact |
| :--- | :--- | :--- |
| **Month 1** | **Stop the Bleeding:** Hard cap of 15% discount on "Technology" category. | Instant margin recovery of ~8%. |
| **Month 2** | **Shipping Optimization:** Eliminate "Same Day" shipping option for standard-tier customers. | Reduce logistics overhead by 12%. |
| **Month 3** | **Retargeting:** Shift marketing spend away from "Bleeder" cluster toward "Loyal/High-Margin" cluster. | Increase Customer Lifetime Value (CLV). |

---

### 💻 Technical Implementation
* **Data Cleaning:** Handled missing values and outliers using Pandas.
* **Statistical Testing:** Used OLS Regression (Statsmodels) to validate relationships.
* **Visualization:** Created "Profit vs. Discount" heatmaps in Seaborn to visually persuade stakeholders.

[🔙 Back to Portfolio](https://sudheeshsreenilayam.github.io)
