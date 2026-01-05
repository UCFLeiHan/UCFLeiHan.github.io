---
layout: single
title: "Innovative Analytic Methods for Crash Research"
permalink: /research/3-Innovative-Analytic-Methods-for-Crash-Research/
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

Within the leading traffic safety research lab—UCF SST, my collaborators and I develop novel crash analytic methods to address complex heterogeneity and spatiotemporal dependencies in crash frequency and severity modeling. These approaches encompass both advanced statistical methods and spatio-temporal machine learning/deep learning methods.

## Statistical Methods

With the postdoctoral researcher Dr. Chenzhu Wang and visiting scholar Dr. Zhe Wang, we developed novel statistical methods for crash frequency and severity analysis: 
- **A Grouped Random-Parameters Poisson-Lindley Model with Spatial Effects** to analyze intersection crashes with visual environment features and spatiotemporal variations.  
- **A Random Parameter Negative Binomial-Lindley Model** to study the impacts of visual environment features from Google Street View images on intersection crash frequencies.
- **Partially Temporal Constrained Random Parameters Bivariate Probit Models** to examine the association between helmet usage and injury severity in moped-vehicle crashes. 
- **Joint Random Parameters Bivariate Probit Models with Temporal Instability** to investigate the impact of speed differences on rear-end crash severity and account for temporal instability during COVID-19.

<div style="text-align: center; margin: 2em 0;">
  <img src="/images/publications/2025-09-01-grp-poisson-lindley-spatial-crash.jpg" alt="Crash Prediction" style="width: 100%; max-width: 800px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
  <div class="publication-image-caption">Spatial Errors in Grouped Random-Parameters Poisson-Lindley Model</div>
</div>

### Related Publications

- [Grouped Random Parameters Poisson-Lindley Model with Spatial Effects Addressing Crashes at Intersections: Insights from Visual Environment Features and Spatiotemporal Instability](/publication/2025-09-01-grp-poisson-lindley-spatial-crash)
- [Intersection Crash Frequency Analysis Considering Visual Environment Features Using Random Parameter Negative Binomial-Lindley Model](/publication/2025-08-15-intersection-crash-streetview-rpnb-lindley)
- [Effects of Helmet Usage on Moped Riders' Injury Severity in Moped-Vehicle Crashes: Insights from Partially Temporal Constrained Random Parameters Bivariate Probit Models](/publication/2024-12-01-helmet-effects-on-moped-injury)
- [Effects of Speed Difference on Injury Severity of Freeway Rear-End Crashes: Insights from Correlated Joint Random Parameters Bivariate Probit Models and Temporal Instability](/publication/2024-06-01-speed-difference-effects-injury-probit)

## ML & DL approaches

With the visiting scholar Dr. Pengfei Cui and postdoctoral researcher Dr. Chenzhu Wang, we developed novel ML models and DL networks for crash frequency and severity analysis: 
- A **Multiscale Geographical Random Forest (MGRF)** as new spatial ML framework to capture multiscale spatial heterogeneity and integrate street-view semantic visual features for traffic safety modeling.  
- Using **Cross-Stitch Networks** on (1) tunnel crash severity and congestion duration joint-modeling, and (2) quantifying the impact of speed differences on injury severities of both vehicles in rear-end crashes.

<div style="text-align: center; margin: 2em 0;">
  <img src="/images/publications/2025-10-01-MGRF-traffic-safety-modeling-streetview.jpg" alt="Crash Prediction" style="width: 100%; max-width: 800px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
  <div class="publication-image-caption">Illustration of Multiscale Geographical Random Forest</div>
</div>

### Related Publications

- [Multiscale Geographical Random Forest: A Novel Spatial ML Approach for Traffic Safety Modeling Integrating Street-View Semantic Visual Features](/publication/2025-10-01-MGRF-traffic-safety-modeling-streetview)
- [Tunnel Crash Severity and Congestion Duration Joint Evaluation Based on Cross-Stitch Networks](/publication/2025-04-01-joint-ML-tunnel-severity-congestion)
- [Analyzing Speed-Difference Impact on Freeway Joint Injury Severities of Leading-Following Vehicles Using Statistical and Data-Driven Models](/publication/2024-10-01-joint-ML-speed-difference-severity)

