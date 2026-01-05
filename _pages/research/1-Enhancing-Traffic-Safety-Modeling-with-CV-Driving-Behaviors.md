---
layout: single
title: "Enhancing Traffic Safety Modeling with CV Driving Behaviors"
permalink: /research/1-Enhancing-Traffic-Safety-Modeling-with-CV-Driving-Behaviors/
share: true
---

<style>
.page__content h2 {
  font-size: 1.6em !important;
}
.page__content strong {
  font-size: 1em !important;
  font-weight: 600;
}
.page__content ul li,
.page__content ol li {
  font-size: 1em !important;
  line-height: 1.5;
}
.page__content p {
  font-size: 1em !important;
  line-height: 1.5;
}
.publication-images-container {
  display: flex;
  gap: 1.5em;
  margin: 2em 0;
  flex-wrap: wrap;
}
.publication-image-item {
  flex: 1;
  min-width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.publication-image-item img {
  width: 100%;
  height: 400px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.publication-image-caption {
  margin-top: 0.5em;
  font-size: 0.9em;
  color: var(--global-text-color);
  font-style: italic;
}
</style>

![Enhancing Traffic Safety Modeling with CV Driving Behaviors](/images/hard_events_by_hour.gif)

## Overview

Traditional traffic safety modeling focuses on aggregated and static traffic and road features. However, risky driving behaviors are key causes of crashes but being largely overlooked. The emergence of CVs enables researchers to extract micro driving behaviors for safety analysis. Our proposed traffic safety modeling framework identifies multi-dimensional risky driving behaviors (e.g., hard braking, left/right turning, lane-changing) from CV trajectories and integrates these features into both macro-level and micro-level safety analysis.

## Macro-Level Safety Analysis

With high-resolution CV data, we developed both intersection-level and segment-level safety models to investigate the impacts
of risky driving behaviors on their crash frequencies: 
- For intersections, **hard acceleration/braking** and **hard left/right turning behaviors** are identified to capture both longitudinal and lateral driving dynamics. These behavior features are positively associated with intersection crashes with pronounced spatial heterogeneity.   
- For segments, **risky lane-changings, driving volatility**, and **speeding behaviors** are extracted from raw CV trajectories, and their impacts on different types of crashes (e.g., rear-end, sideswipe, speeding-related) are modeled within a joint hierarchical framework.

<div class="publication-images-container">
  <div class="publication-image-item">
    <img src="/images/Intersection_crash_modeling.png " alt="Intersection Safety Analysis">
    <div class="publication-image-caption">Intersection Safety Analysis</div>
  </div>
  <div class="publication-image-item">
    <img src="/images/segment_crash_modeling.png" alt="Segment Safety Analysis">
    <div class="publication-image-caption">Segment Lane-chaning Extraction</div>
  </div>
</div>

### Related Publications

- [Segment Level Safety Analysis Using Lane-Changing Behavior and Driving Volatility Features from Connected Vehicle Trajectories](/publication/2025-12-09-CV-lane-change-segment-crash)
- [Intersection Crash Analysis Considering Longitudinal and Lateral Risky Driving Behavior from Connected Vehicle Data: A Spatial Machine Learning Approach](/publication/2025-09-01-CV-spatialML-intersection-crash)

## Micro-Level Crash Prediction

Targeting freeway segments, we develop real-time crash risk prediction models that leverage CV trajectory-based risky driving behaviors for proactive safety management:
- A **Transformer** model to predict crash risk using only non-aggregated CV risky driving behaviors and quantify their **spatiotemporal decay** & **collective superposition** effects. 
- A **Transformer + LSTM** model to predict crash risk by fusing micro driving behaviors from CV data and macro traffic flow features from detector data. 

These methods achieve superior prediction performances compared to existing methods (e.g., CNN, XGBoost, etc.) and demonstrate better interpretability for traffic management.

<div style="text-align: center; margin: 2em 0;">
  <img src="/images/Crash_prediction.png" alt="Crash Prediction" style="width: 100%; max-width: 800px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
  <div class="publication-image-caption">Real-time Crash Risk Modeling with Risky Driving Behaviors</div>
</div>

### Related Publications

- [LSTM + Transformer Real-Time Crash Risk Evaluation Using Traffic Flow and Risky Driving Behavior Data](/publication/2024-08-12-lstm-transformer-crash-risk-evaluation)
- [Transformer-Based Modeling of Abnormal Driving Events for Freeway Crash Risk Evaluation](/publication/2024-08-01-transformer-abnormal-driving-crash-prediction)
- [Crash Prediction Under Limited CV Coverage: An Ensemble Deep Learning Model Integrating Multi-Source Traffic Data](/publication/2026-02-01-crash-prediction-cv-mvds)

