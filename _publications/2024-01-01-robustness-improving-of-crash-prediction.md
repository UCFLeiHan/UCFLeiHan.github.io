---
title: "Improving Model Robustness of Traffic Crash Risk Evaluation via Adversarial Mix-Up Under Traffic Flow Fundamental Diagram"
collection: publications
category: journal
permalink: /publication/2024-01-01-robustness-improving-of-crash-prediction

header:
  teaser: publications/2024-01-01-robustness-improving-of-crash-prediction.png

authors: "Rongjie Yu, <strong>Lei Han</strong>, Mohamed Abdel-Aty, Liqiang Wang, Zihang Zou*"
venue: "Accident Analysis & Prevention"
date: 2024-01-01
year: 2024
status: "published"
method: "Deep Learning"
data: "Detector Data"
objects: "Real-Time Crash Prediction"

abstract: "Recent state-of-art crash risk evaluation studies have exploited deep learning (DL) techniques to improve performance in identifying high-risk traffic operation statuses. However, it is doubtful if such DL-based models would remain robust to real-world traffic dynamics (e.g., random traffic fluctuations.) as DL models are sensitive to input changes, where small perturbations could lead to wrong predictions. This study raises the critical robustness issue for crash risk evaluation models and investigates countermeasures to enhance it. By mixing up crash and non-crash samples under the traffic flow fundamental diagram, traffic flow adversarial examples (TF-AEs) were generated to simulate real-world traffic fluctuations. With the developed TF-AEs, model accuracy decreased by 8% and sensitivity dropped by 18%, indicating weak robustness of the baseline model (a convolutional neural network, CNN-based crash risk evaluation model). Then, a coverage-oriented adversarial training method was proposed to improve model robustness in highly imbalanced crash and non-crash situations and various crash risk transition patterns. Experiments showed that the proposed method was effective to improve model robustness as it could prevent 76.5% accuracy drops and 98.9% sensitivity drops against TF-AEs. Finally, the evaluation model outputs' stability and limitations of the current study are discussed."
description: "This study addresses robustness issues in deep learning-based crash risk evaluation models. By proposing a coverage-oriented adversarial training method, it generates traffic flow adversarial examples (TF-AEs) to prevent 76.5% accuracy drops and 98.9% sensitivity drops."

doi: "https://doi.org/10.1016/j.aap.2023.107360"
citation: 'Yu, R., Han, L., Abdel-Aty, M., Wang, L., & Zou, Z. (2024). Improving model robustness of traffic crash risk evaluation via adversarial mix-up under traffic flow fundamental diagram. <i>Accident Analysis & Prevention</i>, 194, 107360.'
bibtex: |
  @article{yu2024improving,
    title={Improving model robustness of traffic crash risk evaluation via adversarial mix-up under traffic flow fundamental diagram},
    author={Yu, Rongjie and Han, Lei and Abdel-Aty, Mohamed and Wang, Liqiang and Zou, Zihang},
    journal={Accident Analysis & Prevention},
    volume={194},
    pages={107360},
    year={2024},
    publisher={Elsevier}
  }
paperurl: "https://doi.org/10.1016/j.aap.2024.107360"
---
