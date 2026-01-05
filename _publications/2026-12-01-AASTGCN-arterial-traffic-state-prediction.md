---
title: "Arterial Network Traffic State Prediction with Connected Vehicle Data: An Abnormality-Aware Spatiotemporal Network"
collection: publications
category: journal
permalink: /publication/2026-12-01-AASTGCN-arterial-traffic-state-prediction

authors: "<strong>Lei Han</strong>*, Mohamed Abdel-Aty, Yang-Jun Joo"
venue: "Preprint"
date: 2026-12-01
year: 2026
status: "preprint"
under_review_venue: "Transportation Research Part C: Emerging Technologies"
method: "Deep Learning"
data: "Connected Vehicle Data"
objects: "Traffic State Prediction"

header:
  teaser: AASTGCN.png

abstract: "Emerging connected-vehicle (CV) data shows great potential in urban traffic monitoring and forecasting. However, prior CV-based studies on arterial traffic measure prediction (i.e., delay and queue) are limited to simulated high-penetration scenarios or small networks, which are hard to apply in real-world city-scale arterial networks. To address such gaps, we develop a CV data-based arterial traffic prediction framework with two components: (1) a two-stage traffic-state extraction method that estimates vehicle-level traffic measures from CV trajectories and then aggregates them into network-level traffic state measures; (2) an Abnormality-aware spatiotemporal graph convolution network (AASTGCN) that adopts a dual-expert architecture to separately model normal and abnormal traffic, and jointly captures short-term traffic dynamics and long-term periodicity via spatiotemporal GCN with a gated-fusion mechanism. Real-world CV data are used to test our method in a large arterial network with 1,050 links (386.4 miles). Experimental results show that: 1) the proposed traffic estimation method is effective for large arterial networks to provide real-time traffic measures (e.g., link-level average travel delay and queue length), which are critical for urban traffic operation and evaluation.  2) Abnormal traffic prediction is typically challenging for existing methods. By modeling abnormal cases separately with normal traffic in two dedicated experts, AASTGCN outperforms existing models for both normal and abnormal traffic conditions. 3) The gate-fusion mechanism adaptively balances real-time and historical information: it leverages more historical-periodic information in normal traffic and shifts a higher weight to real-time traffic dynamics for abnormal traffic deviating abruptly from historical patterns. The proposed framework can be implemented in large urban arterial networks for various real-time traffic operation applications."
description: "This study proposes a CV data-based arterial traffic prediction framework with two-stage traffic-state extraction and an AASTGCN for arterial delay and queue predictions."
---

