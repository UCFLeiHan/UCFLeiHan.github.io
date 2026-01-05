---
layout: single
title: "CV-Data-Based Network Traffic Operation and Prediction"
permalink: /research/2-CV-Data-Based-Network-Traffic-Operation-and-Prediction/
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
  color: #666;
  font-style: italic;
}
</style>

![CV-Data-Based Network Traffic State Evaluation and Prediction](/images/CV-mobility.gif)

## Overview

Accurate traffic evaluation and prediction is critical for proactive traffic management in ITS. Traditional studies have relied on fixed sensors (e.g., loop detectors, microwave sensors, etc.), which have high costs and limited deployment to specific road types and small networks. Emerging CV data are obtained from individual vehicles without spatial restrictions, enabling coverage of large-scale urban road networks and diverse road types. Therefore, we utilize real-world CV data for both arterial and freeway network-level traffic evaluation and prediction.

## Urban Arterial Traffic State Prediction

Prior CV-based studies on arterial traffic prediction (i.e., delay and queue) are limited to **simulated high-penetration scenarios or small networks**, which are hard to apply in real-world city-scale arterial networks. To address such gaps, we develop a CV data-based arterial traffic prediction framework with two components:
- A **two-stage traffic-state** extraction method that estimates vehicle-level traffic measures from CV trajectories and then aggregates them into network-level traffic state measures. 
- An **Abnormality-aware spatiotemporal graph convolution network (AASTGCN)** that adopts a dual-expert architecture to separately model normal and abnormal traffic. 

We test our method in a **large arterial network with 1,050 links (386.4 miles)**. The proposed method can estimate multiple traffic measuresis (e.g., link-level travel delay and queue length) from real-world CV data. By modeling abnormal cases separately with normal traffic in two dedicated experts, AASTGCN outperforms existing models to achieve lowest prediction errors of traffic delay and queue at both normal and abnormal traffic conditions. 

<div style="text-align: center; margin: 2em 0;">
  <img src="/images/AASTGCN.png" alt="Crash Prediction" style="width: 100%; max-width: 800px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
  <div class="publication-image-caption">Urban Arterial Network Traffic State Estimation and Prediction</div>
</div>

### Related Publications

- [Arterial Network Traffic State Prediction with Connected Vehicle Data: An Abnormality-Aware Spatiotemporal Network](/publication/2026-12-01-AASTGCN-arterial-traffic-state-prediction)

## Freeway Network Traffic Speed Prediction

Freeway traffic dynamic are not only affected by aggregated, macroscopic traffic flow data but also by **individual, microscopic human driving behaviors**. To this end, we proposed the Macro-Micro Cross-Attention Transformer (MMCAformer) to integrate CV data-based micro driving behavior features with macro traffic features for speed prediction:
- MMCAformer employs a **cross‑attention mechanism** to capture spatiotemporal interplays between macro traffic status and micro driving behaviors.   
- MMCAformer is optimized with a Student-t Negative Log-likelihood Loss to provide both **point-wise speed prediction and estimated uncertainty**.

Experiments on four Florida freeways demonstrate the superior performance of the proposed MMCAformer. Compared with only using macro features, introducing micro driving behavior features not only enhances prediction accuracy (e.g., overall RMSE, MAE, and MAPE reduced by 9.0%, 6.9%, and 10.2%, respectively) but also shrinks model prediction uncertainty (e.g., mean predictive intervals decreased by 10.1-24.0 % across the four freeways). 

<div style="text-align: center; margin: 2em 0;">
  <img src="/images/MMCAformer.png" alt="Crash Prediction" style="width: 100%; max-width: 800px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
  <div class="publication-image-caption">Freeway Network Traffic Speed Prediction with MMCAformer</div>
</div>

### Related Publications

- [MMCAformer: Macro-Micro Cross-Attention Transformer for Traffic Speed Prediction with Microscopic Connected Vehicle Driving Behavior](/publication/2026-06-01-MMCAformer-freeway-speed-prediction)


