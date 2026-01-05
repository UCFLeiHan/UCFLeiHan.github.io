---
title: "Crash Prediction Under Limited CV Coverage: An Ensemble Deep Learning Model Integrating Multi-Source Traffic Data"
collection: publications
category: journal
permalink: /publication/2026-02-01-crash-prediction-cv-mvds

authors: "Samgyu Yang*, Mohamed Abdel-Aty, <strong>Lei Han</strong>"
venue: "Transportation Research Part C: Emerging Technologies"
date: 2026-02-01
year: 2026
status: "published"
method: "Deep Learning"
data: "Connected Vehicle Data; Detector Data"
objects: "Real-Time Crash Prediction"

header:
  teaser: publications/2026-02-01-crash-prediction-cv-mvds.jpg

abstract: "This study presents a comprehensive crash prediction framework that integrates traditional microwave vehicle detection systems (MVDS) with emerging connected vehicle (CV) data to improve proactive traffic safety management. While MVDS data provide consistent, infrastructure-based traffic measurements, their spatial coverage and behavioral resolution are limited. In contrast, CV data offer high-resolution, continuous vehicle trajectories that capture detailed driving behavior, but suffer from low and uneven market penetration. To fully leverage the strengths of both sources, an ensemble deep learning model was developed, utilizing MVDS data for macroscopic, segment-level traffic patterns and CV data for microscopic, vehicle-level dynamics. Importantly, rather than relying on segment-level aggregated CV metrics, this study directly utilizes individual vehicle trajectories to preserve temporal and spatial fidelity, enabling the model to capture detailed behavior that often precedes crashes. Three modeling configurations, MVDS only, CV only, and MVDS + CV data, were evaluated across different crash types and roadway segment types. Results demonstrate that integrated data source model consistently outperforms single-source models, achieving higher sensitivity and lower false alarm rates, particularly for rear-end and sideswipe crashes. Furthermore, model performance was evaluated under varying CV market penetration rates. While CV-only model showed limited performance under low coverage (<1%), it exhibited strong and stable results at 4 % penetration or higher, with sensitivity exceeding 0.79. These findings highlight the potential of CV data to support scalable crash prediction without relying on infrastructure-based sensors, especially as CV adoption expands. The proposed approach offers a robust and adaptable solution for enhancing roadway safety across diverse traffic environment."
description: "This study develops an ensemble deep learning model integrating MVDS and connected vehicle data for crash prediction, demonstrating superior performance over single-source models, with CV-only models achieving sensitivity exceeding 0.79 at 4% penetration or higher."

doi: "https://doi.org/10.1016/j.trc.2025.105472"
citation: 'Yang, S., Abdel-Aty, M., & Han, L. (2026). Crash prediction under limited CV coverage: an ensemble deep learning model integrating multi-source traffic data. <i>Transportation Research Part C: Emerging Technologies</i>, 183, 105472.'
bibtex: |
  @article{yang2026crash,
    title={Crash prediction under limited CV coverage: an ensemble deep learning model integrating multi-source traffic data},
    author={Yang, Samgyu and Abdel-Aty, Mohamed and Han, Lei},
    journal={Transportation Research Part C: Emerging Technologies},
    volume={183},
    pages={105472},
    year={2026},
    publisher={Elsevier}
  }
paperurl: "https://doi.org/10.1016/j.trc.2026.105472"
---
