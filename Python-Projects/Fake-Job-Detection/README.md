# 🛡️ Fake Job Posting Detection System

This project tackles the issue of fraudulent online job postings. I built an end-to-end Machine Learning pipeline to detect and flag fake job descriptions in real-time, improving user security and trust.

---

## 🔍 Project Overview

- Scraped and processed thousands of job postings using **BeautifulSoup**
- Engineered features using **NLP** (TF-IDF, Lemmatization)
- Handled severe class imbalance (95:5 Real vs. Fake) using **SMOTE**
- Benchmarked models (Logistic Regression, Random Forest, SVM)

---

## 🧪 Key Findings

- **Best Model:** Support Vector Machine (SVM) achieved the highest **F1-Score (0.84)**.
- **Critical Feature:** The presence (or absence) of a "Company Website" link was the strongest predictor of fraud.
- **Challenge:** Startups with short descriptions were often misclassified; added metadata features to reduce these false positives.

---

## ⚙️ Model Performance

| Model | Accuracy | F1-Score | Verdict |
| :--- | :--- | :--- | :--- |
| **Logistic Regression** | 94% | 0.72 | Good Baseline |
| **Random Forest** | 97% | 0.81 | Computationally Expensive |
| **Support Vector Machine (SVM)** | **98%** | **0.84** | **Selected for Production** |

---

## 🧰 Tools Used

- **Python:** Scikit-Learn, NLTK (NLP)
- **Web Scraping:** BeautifulSoup
- **Techniques:** SMOTE (Oversampling), TF-IDF Vectorization

---

## 🧑‍💻 Author

**Sudheesh Sreenilayam** 📎 [LinkedIn](https://www.linkedin.com/in/ssudheesh)
