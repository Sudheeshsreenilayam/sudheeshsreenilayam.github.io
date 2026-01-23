# 🛡️ Fake Job Posting Detection System (ML)

<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <a href="./Analysis_Notebook.ipynb" target="_blank">
    <img src="https://img.shields.io/badge/View_Python_Notebook-3776AB?style=for-the-badge&logo=jupyter&logoColor=white" alt="View Code">
  </a>
  <a href="./Project_Report.pdf" target="_blank">
    <img src="https://img.shields.io/badge/View_Full_Report-2C3E50?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white" alt="View Report">
  </a>
</div>

This project tackles the issue of fraudulent online job postings which compromise user security and platform integrity. I built an end-to-end Machine Learning pipeline to detect and flag fake job descriptions in real-time.

---

## 🔍 Project Overview

- **Goal:** Automate the detection of fraudulent job postings to reduce manual moderation time.
- **Method:** Scraped thousands of job postings, engineered NLP features, and trained supervised classification models.
- **Challenge:** The dataset was heavily imbalanced (95% Real vs. 5% Fake), requiring synthetic data generation (**SMOTE**) to train the model effectively.

---

## ⚙️ The Pipeline

### 1. Data Acquisition & Cleaning
- **Web Scraping:** Utilized `BeautifulSoup` to scrape Job Title, Description, Company Profile, and Requirements.
- **Preprocessing:** Cleaned text data by removing HTML tags, stopwords, and performing Lemmatization using `NLTK`.

### 2. Feature Engineering
I extracted key features that differentiate real jobs from fake ones:
- **Text Features:** TF-IDF vectors of the job description.
- **Meta Features:** Presence of company logo, length of description, binary "has_questions" flag.
- **Contextual Analysis:** Fake jobs often lacked specific location data or company profiles.

### 3. Model Selection
I experimented with multiple classifiers to maximize **Recall** (catching fraud) while maintaining high **Precision** (avoiding false flags).

---

## 📊 Model Performance

| Model | Accuracy | F1-Score | Verdict |
| :--- | :--- | :--- | :--- |
| **Logistic Regression** | 94% | 0.72 | Good Baseline, but missed subtle fraud. |
| **Random Forest** | 97% | 0.81 | Strong performance, but computationally expensive. |
| **Support Vector Machine (SVM)** | **98%** | **0.84** | **Selected Model (Best Balance)** |

---

## 🧪 Key Findings

- **The "Website" Indicator:** The absence of a company website link was the single strongest predictor of a fake listing.
- **Length Matters:** Fraudulent posts tend to have significantly shorter descriptions (< 100 words) compared to legitimate corporate roles.
- **Logo Bias:** 85% of fake jobs did not include a company logo, whereas 92% of real jobs did.

---

## 🧰 Tools Used

- **Python:** Scikit-Learn, Pandas, NumPy
- **NLP:** NLTK, Spacy, TF-IDF Vectorization
- **Web Scraping:** BeautifulSoup
- **Handling Imbalance:** SMOTE (Synthetic Minority Over-sampling Technique)

---

## 🧑‍💻 Author

**Sudheesh Sreenilayam** 📎 [LinkedIn](https://www.linkedin.com/in/ssudheesh)
