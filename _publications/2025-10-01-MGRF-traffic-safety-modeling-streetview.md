---
title: "Multiscale Geographical Random Forest: A Novel Spatial ML Approach for Traffic Safety Modeling Integrating Street-View Semantic Visual Features"
collection: publications
category: journal
permalink: /publication/2025-10-01-MGRF-traffic-safety-modeling-streetview

header:
  teaser: publications/2025-10-01-MGRF-traffic-safety-modeling-streetview.jpg

authors: "Pengfei Cui, Mohamed Abdel-Aty, <strong>Lei Han</strong>*, Xiaobao Yang"
venue: "Transportation Research Part C: Emerging Technologies"
date: 2025-10-01
year: 2025
status: "published"
method: "Machine Learning"
data: "Streetview Data"
objects: "Crash Frequency Modeling; Spatial Modeling"

abstract: "Macro-level traffic safety modeling aims to identify critical risk factors to reginal crashes, providing essential basis for effective countermeasures by traffic managers. Previous work mainly incorporated macro and static socio-demographic and infrastructure features, overlooking drivers' visual perception of environment, which crucially influences their driving behavior and thus safety. Moreover, spatial machine learning (ML) has gained prominence for its strong crash prediction performance. However, existing spatial ML typically apply spatial effects at a fixed or homogeneous scale (e.g., specific Euclidean distances), limiting their ability to capture the multiscale spatial heterogeneity of features. To address these gaps, emerging image semantic segmentation technique is employed to extract visual environment features (e.g., buildings, trees) from Google Street View (GSV) images. A novel spatial ML method, Multiscale Geographical Random Forest (MGRF), is proposed to overcome fixed-spatial scale constraints to adaptive multiscale spatial modeling. Empirical experiments on Southeast Florida show that the inclusion of visual environment features from 228,352 street view images leads to notably improved crash prediction. Compared to traditional models (e.g., multiscale geographically weighted regression), MGRF fits optimal spatial bandwidths for each sample, achieving improvements of 30.31%, 9.98%, and 5.53% in MSE, MAE, and R2, respectively. By incorporating SHapley Additive exPlanations, MGRF identified key risk features for each region and quantified their spatial heterogeneity. The Results reveal that in urban core areas, the proportion of cars in GSV, which reflects road traffic condition, is the most critical feature contributing positively to increase in crashes. In contrast, for suburban regions, lower road density and abundant green spaces are associated with a reduction in crashes. This study highlights the significant potential of integrating street-view semantic visual features with multiscale spatial ML to enhance traffic safety analysis."
description: "This study proposes a Multiscale Geographical Random Forest (MGRF) integrating street-view semantic visual features for traffic safety modeling by capturing multiscale spatial heterogeneity."

doi: "https://doi.org/10.1016/j.trc.2025.105299"
citation: 'Cui, P., Abdel-Aty, M., Han, L., & Yang, X. (2025). Multiscale geographical random forest: A novel spatial ML approach for traffic safety modeling integrating street-view semantic visual features. <i>Transportation Research Part C: Emerging Technologies</i>, 179, 105299.'
bibtex: |
  @article{cui2025multiscale,
    title={Multiscale geographical random forest: A novel spatial ML approach for traffic safety modeling integrating street-view semantic visual features},
    author={Cui, Pengfei and Abdel-Aty, Mohamed and Han, Lei and Yang, Xiaobao},
    journal={Transportation Research Part C: Emerging Technologies},
    volume={179},
    pages={105299},
    year={2025},
    publisher={Elsevier}
  }
paperurl: "https://doi.org/10.1016/j.trc.2025.105299"
---
