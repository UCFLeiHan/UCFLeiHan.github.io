---
title: "Tunnel Crash Severity and Congestion Duration Joint Evaluation Based on Cross-Stitch Networks"
collection: publications
category: journal
permalink: /publication/2025-04-01-joint-ML-tunnel-severity-congestion

header:
  teaser: publications/2025-04-01-joint-ML-tunnel-severity-congestion.jpg

authors: "Chenzhu Wang, Mohamed Abdel-Aty, <strong>Lei Han</strong>*"
venue: "Accident Analysis & Prevention"
date: 2025-04-01
year: 2025
status: "published"
method: "Machine Learning"
data: "Crash Data"
objects: "Crash Severity Analysis"

abstract: "Tunnels, with limited space and restricted widths/heights, increase the likelihood of crashes and traffic congestion, where the severity and duration of one often exacerbate the other. However, existing studies mainly conducted separate models, which cannot simultaneously analyze the joint impacts of contributing factors on both crash severity and duration. To address such gap, a joint modeling approach was proposed to explore critical features affecting both crash severity and duration and their joint relationships. A total of 2,454 tunnel crashes in Shanxi, China were collected. Five types of characteristics were extracted as inputs: crash, vehicle, road, environment, and temporal features. Then, a joint cross-stitch network model was proposed with two sub-multilayer perceptron (MLP) networks to establish the relationships between input features with crash severity and duration, respectively. Cross-stitch units were introduced between the two sub-networks to share each model parameters with specific weights, enforcing the sub-networks to simultaneously estimate the coupling relationships between variables and two targets (i.e., crash severity and duration). Compared to existing separate models, the joint cross-stitch network models achieved best performance on estimation of both crash severity (7.0%, 10.2% increase in sensitivity and F1 score, respectively) and congestion duration (3.7% reduction in mean squared error). Though the parameter sharing mechanism, it could simultaneously learn the coupling relationships between contributing factors on both crash severity and duration to offer more reasonable interpretations than separate models. The results indicate that congested traffic conditions significantly increase injury severity, while truck-only, two-vehicle, and multi-vehicle crashes notably prolong congestion duration. Moreover, the joint models exhibited some features presenting inverse effects on injury severity in the separate models. The results enhance our understanding of crashes and congestion in tunnels and inform several recommendations for tunnel management to reduce both crash severity and congestion duration."
description: "This study proposes a joint cross-stitch network model to simultaneously evaluate tunnel crash severity and congestion duration, achieving improved performance over separate models by capturing coupling relationships between the two outcomes."

doi: "https://doi.org/10.1016/j.aap.2025.107942"
citation: 'Wang, C., Abdel-Aty, M., & Han, L. (2025). Tunnel crash severity and congestion duration joint evaluation based on cross-stitch networks. <i>Accident Analysis & Prevention</i>, 213, 107942.'
bibtex: |
  @article{wang2025tunnel,
    title={Tunnel crash severity and congestion duration joint evaluation based on cross-stitch networks},
    author={Wang, Chenzhu and Abdel-Aty, Mohamed and Han, Lei},
    journal={Accident Analysis & Prevention},
    volume={213},
    pages={107942},
    year={2025},
    publisher={Elsevier}
  }
paperurl: "https://doi.org/10.1016/j.aap.2025.107942"
---
