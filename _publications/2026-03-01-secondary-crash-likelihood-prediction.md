---
title: "Real-time Secondary Crash Likelihood Prediction Excluding Post Primary Crash Features"
collection: publications
category: journal
permalink: /publication/2026-03-01-secondary-crash-likelihood-prediction

authors: "<strong>Lei Han</strong>*, Mohamed Abdel-Aty, Zubayer Islam, Chenzhu Wang"
venue: "Preprint"
date: 2026-03-01
year: 2026
status: "preprint"
under_review_venue: "IEEE Transactions on Intelligent Transportation Systems"
method: "Machine Learning"
data: "Detector Data"
objects: "Real-Time Crash Prediction; Secondary Crash"

header:
  teaser: publications/2026-03-01-secondary-crash-likelihood-prediction.png

abstract: "Secondary crash likelihood prediction is a crucial component of active traffic management system to help mitigate congestion and adverse effects caused by secondary crashes. However, existing methods mainly relied on several post-crash features (e.g., crash type and severity) that are rarely available in real-time, making them impractical for real-world applications. To address such issues, we propose a secondary crash likelihood prediction hybrid model excluding any post-crash features. Specifically, a dynamic spatial-temporal window is designed to extract real-time traffic flow and environmental features among primary and secondary crash segments. Among the hybrid model system, a primary crash prediction model is trained to predict the likelihood of crash leading to secondary crashes. Two models (1 and 2) are proposed to predict the secondary crash likelihood at primary crash and its upstream segments. Model 1 assesses traffic status before secondary crashes against those at normal crashes without secondary crashes, while Model 2 compares the traffic status before secondary crashes with crash-free conditions. For the three models, an ensemble method of six machine learning models is developed to improve prediction accuracy. A voting-based strategy is utilized to combine three models' results to predict the final secondary crash likelihood. Experiments with Florida freeways show that the proposed hybrid model correctly identify 91% of secondary crashes with low false alarm rate of 0.20 without post-crash features. Model Area Under ROC Curve (AUC) improves from 0.654, 0.744, and 0.902 of the three separate models to 0.952 with the hybrid model—surpassing the performance reported in previous studies."
description: "A hybrid model for real-time secondary crash likelihood prediction that excludes post-crash features, using dynamic spatial-temporal windows and ensemble machine learning methods to achieve 91% identification accuracy with AUC of 0.952."
---

