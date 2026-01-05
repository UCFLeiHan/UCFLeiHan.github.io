---
title: "MMCAformer: Macro-Micro Cross-Attention Transformer for Traffic Speed Prediction with Microscopic Connected Vehicle Driving Behavior"
collection: publications
category: journal
permalink: /publication/2026-06-01-MMCAformer-freeway-speed-prediction

authors: "<strong>Lei Han</strong>*, Mohamed Abdel-Aty, Younggun Kim, Yang-Jun Joo, Zubayer Islam"
venue: "Preprint"
date: 2026-06-01
year: 2026
status: "preprint"
under_review_venue: "IEEE Transactions on Intelligent Transportation Systems"
method: "Deep Learning"
data: "Connected Vehicle Data"
objects: "Traffic State Prediction; Risky Driving Behavior"

header:
  teaser: MMCAformer.png

abstract: "Accurate speed prediction is crucial for proactive traffic management to enhance traffic efficiency and safety. Existing studies have primarily relied on aggregated, macroscopic traffic flow data to predict future traffic trends, whereas road traffic dynamics are also influenced by individual, microscopic human driving behaviors. Recent Connected Vehicle (CV) data provide rich driving behavior features, offering new opportunities to incorporate these behavioral insights into speed prediction. To this end, we proposed the Macro-Micro Cross-Attention Transformer (MMCAformer) to integrate CV data-based micro driving behavior features with macro traffic features for speed prediction. Specifically, MMCAformer employs self‑attention to learn intrinsic dependencies in macro traffic flow and cross‑attention to capture spatiotemporal interplays between macro traffic status and micro driving behavior. MMCAformer is optimized with a Student-t Negative Log-likelihood Loss to  provide point-wise speed prediction and estimate uncertainty. Experiments on four Florida freeways demonstrate the superior performance of the proposed MMCAformer than baselines. Compared with only using macro features, introducing micro driving behavior features not only enhances prediction accuracy (e.g., overall RMSE, MAE, and MAPE reduced by 9.0%, 6.9%, and 10.2%, respectively) but also shrinks model prediction uncertainty (e.g., mean predictive intervals decreased by 10.1-24.0 % across the four freeways). Results reveal that hard braking and acceleration frequencies emerge as the most influential features. Such improvements are more pronounced under congested, low‑speed traffic conditions."
description: "A Macro-Micro Cross-Attention Transformer (MMCAformer) model that integrates CV data-based micro driving behavior features with macro traffic features for freeway speed prediction."
---

