---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<style>
.research-modules {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  margin-top: 0.5em;
}

.research-module {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-decoration: none !important;
  color: inherit;
  display: block;
}

.research-module,
.research-module *,
.research-module a,
.research-module h2,
.research-module p,
.research-module div {
  text-decoration: none !important;
}

.research-module:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  color: inherit;
}

.research-module:hover * {
  text-decoration: none !important;
}

.research-module-image {
  width: 100%;
  height: 230px;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
  vertical-align: bottom;
}

.research-module-content {
  padding: 1.5em;
}

.research-module,
.research-module *,
.research-module a,
.research-module h2,
.research-module p,
.research-module div {
  text-decoration: none !important;
}

.research-module:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  color: inherit;
}

.research-module:hover * {
  text-decoration: none !important;
}


.research-module-content {
  padding: 0.5em 0.8em;
  padding-top: 1em;
  position: relative;
  z-index: 1;
  color: #555;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: auto;
  height: auto;
  background-color: white;
}

.research-module-title {
  font-size: 1.3em;
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 0.3em;
  margin-top: 0;
  line-height: 1.2;
  text-decoration: none !important;
  border-bottom: none !important;
}

.research-module-description {
  color: #555;
  font-size: 0.9em;
  line-height: 1.3;
  margin-bottom: 0.5em;
  margin-top: 0;
  text-decoration: none !important;
}

.research-module-date {
  text-decoration: none !important;
}

/* Add right margin limit for Research page only */
@media (min-width: 925px) {
  .archive {
    max-width: calc(83.333% - 16.666%);
    margin-right: 16.666%;
  }
}

</style>

<div class="research-modules">
  
  <!-- Research Module 1 -->
  <a href="/research/1-Enhancing-Traffic-Safety-Modeling-with-CV-Driving-Behaviors/" class="research-module">
    <img src="/images/hard_events_by_hour.gif" alt="Enhancing Traffic Safety Modeling with CV Driving Behaviors" class="research-module-image" onerror="this.style.display='none'">
    <div class="research-module-content">
        <h2 class="research-module-title">Enhancing Traffic Safety Modeling with CV Driving Behaviors</h2>
      <p class="research-module-description">
        The proposed traffic safety modeling framework identifies risky driving behaviors (e.g., hard braking, hard turning, lane-changing) from CV trajectories and integrates these features into macro crash frequency modeling and micro real-time crash predictions, achieving superior prediction performances and better interpretability compared to traditional methods.
      </p>
    </div>
  </a>

  <!-- Research Module 2 -->
  <a href="/research/2-CV-Data-Based-Network-Traffic-Operation-and-Prediction/" 
  class="research-module">
    <img src="/images/CV-mobility.gif" alt="CV-Data-Based Road Network Traffic Operation and Prediction" class="research-module-image">
    <div class="research-module-content">
        <h2 class="research-module-title">CV-Data-Based Network Traffic Operation and Prediction</h2>
      <p class="research-module-description">
        Leveraging emerging CV data, we develop traffic state evaluation methods to extract comprehensive traffic operation indicators (e.g., travel speed, delay, average queue length, Level of Service) for both freeway and urban arterial networks. Spatiotemporal DL models have been used fot network-scale traffic predictions of traffic speed, delay, queue length, and other critical metrics.
      </p>
    </div>
  </a>

  <!-- Research Module 3 -->
  <a href="/research/3-Innovative-Analytic-Methods-for-Crash-Research/" class="research-module">
    <img src="/images/publications/2025-09-01-grp-poisson-lindley-spatial-crash.jpg" alt="Innovative Analytic Methods for Crash Research" class="research-module-image" onerror="this.style.display='none'">
    <div class="research-module-content">
        <h2 class="research-module-title">Innovative Analytic Methods for Crash Research</h2>
      <p class="research-module-description">
        My collaborators and I develop novel crash analytic methods to address complex heterogeneity and spatiotemporal dependencies in crash frequency and severity modeling. These approaches encompass both advanced statistical methods and spatio-temporal machine learning/deep learning methods.
      </p>
    </div>
  </a>

</div>
