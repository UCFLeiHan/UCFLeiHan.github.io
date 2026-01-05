---
title: "Intersection Crash Analysis Considering Longitudinal and Lateral Risky Driving Behavior from Connected Vehicle Data: A Spatial Machine Learning Approach"
collection: publications
category: journal
permalink: /publication/2025-09-01-CV-spatialML-intersection-crash

header:
  teaser: publications/2025-09-01-CV-spatialML-intersection-crash.jpg

authors: "<strong>Lei Han</strong>*, Mohamed Abdel-Aty"
venue: "Accident Analysis & Prevention"
date: 2025-09-01
year: 2025
status: "published"
method: "Machine Learning"
data: "Connected Vehicle Data"
objects: "Crash Frequency Modeling; Risky Driving Behavior; Spatial Modeling"

abstract: "Existing intersection safety analysis studies have primarily focused on macro-level static infrastructure and highly aggregated traffic features. The emergence of Connected Vehicle (CV) has enabled researchers to extract micro-level driving behavior attributes from CVs. Although longitudinal driving behaviors (e.g., hard braking) have been studied recently, critical lateral left and right turn behaviors, which are common and pose potential conflict risk at intersections, have been largely overlooked. Meanwhile, dealing with both spatial heterogeneity and nonlinear effects between crash frequency and multitudinous driving features is another critical challenge for intersection safety analysis. To address such gaps, this study extracted driving behavior features for both longitudinal movements and lateral left and right turns to comprehensively capture driving dynamics at intersections. A novel spatial ML framework was proposed to integrate nonlinear ML models (e.g., LightGBM) with geographically weighted regression: Besides a global ML model training on all samples to fit average estimations, distinct local ML models are trained for each spatial sample with its neighbors to capture localized spatial heterogeneity. Empirical experiments using CV data at a Florida county show that the inclusion of lateral turning behavior (e.g., hard left/right turns) leads to improved accuracy of intersection crash frequency prediction. Compared to traditional Rrandom Forest, XGBoost, LightGBM, and Multilayer Perceptron models, the spatial ML integrating LightGBM demonstrates significant improvements of 5.8%, 6.3%, and 5.6% in RMSE, MAE, and R2, respectively. The results reveal the nonlinear impact of driving features and their spatial heterogeneity: In downtown, hard braking events primarily influence the risk of rear-end (RE) crashes. Drivers' acceleration also is more likely to lead to RE crashes in urban areas. While hard left turns show greater influence of sideswipe and left turn crashes at suburban intersections."
description: "This study proposes a spatial-ML framework integrating longitudinal and lateral risky driving behaviors from connected vehicle data for intersection crash analysis."

doi: "https://doi.org/10.1016/j.aap.2025.108180"
citation: 'Han, L., & Abdel-Aty, M. (2025). Intersection crash analysis considering longitudinal and lateral risky driving behavior from connected vehicle data: A spatial machine learning approach. <i>Accident Analysis & Prevention</i>, 220, 108180.'
bibtex: |
  @article{han2025intersection,
    title={Intersection crash analysis considering longitudinal and lateral risky driving behavior from connected vehicle data: A spatial machine learning approach},
    author={Han, Lei and Abdel-Aty, Mohamed},
    journal={Accident Analysis & Prevention},
    volume={220},
    pages={108180},
    year={2025},
    publisher={Elsevier}
  }
paperurl: "https://doi.org/10.1016/j.aap.2025.108180"
---
