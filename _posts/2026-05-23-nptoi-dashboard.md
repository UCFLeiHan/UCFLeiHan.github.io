---
title: "NPTOI Dashboard: Integrating CV Data and AI for Traffic Predictions"
date: 2026-05-23
categories:
  - Posts
tags:
  - Connected Vehicle Data
  - Traffic Operation
  - AI Prediction
  - Dashboard
  - Codex
layout: single
author_profile: true
read_time: true
share: false
excerpt: "This post introduces the NPTOI Dashboard, an interactive web platform for visualizing CV data-based traffic operation indicators and AI-powered traffic predictions."
header:
  teaser: posts/NPTOIDashboard.gif
---

![NPTOI Dashboard Demo](/images/posts/NPTOIDashboard.gif)

With powerful assistance from Codex, I recently developed the [NPTOI Dashboard](https://www.nptoi-dashboard.com){:target="_blank" rel="noopener noreferrer"} to support our FDOT project: [Network Level Proactive Traffic Operations Indicator (NPTOI) Using Artificial Intelligence (AI) and Connected Vehicle (CV) Data Integration](https://rip.trb.org/View/2529964){:target="_blank" rel="noopener noreferrer"}. The dashboard is an interactive web platform for visualizing CV data and AI-based traffic operation predictions. It was designed to support proactive traffic monitoring by integrating roadway-level mobility, safety, and prediction indicators into a map-based interface.

Based on Flask and modular JavaScript, the dashboard system is organized as a data-to-application pipeline that integrates CV data and roadway basemaps into a data processing server, a backend server, and a frontend interface. It provides an integrated interface for arterial and freeway networks, with controls for network type, date, time, segment coloring, and analysis mode. Users can switch among Historical View, Prediction Mode, and Network Ranking to explore traffic conditions from different perspectives.

<div class="nptoi-overview-grid" style="display: grid; grid-template-columns: minmax(260px, 0.9fr) minmax(360px, 1.35fr); gap: 1.2em; align-items: start; margin: 1.2em 0;">
  <figure style="margin: 0;">
    <img class="nptoi-overview-img" src="/images/posts/Framework.png" alt="NPTOI Dashboard framework" style="width: 100%; height: 320px; object-fit: contain; background: #fff; border-radius: 4px;">
    <figcaption style="font-size: 0.85em; color: var(--global-text-color-light); margin-top: 0.35em;">System overall framework.</figcaption>
  </figure>
  <figure style="margin: 0;">
    <img class="nptoi-overview-img" src="/images/posts/frontend.png" alt="NPTOI Dashboard frontend" style="width: 100%; height: 320px; object-fit: contain; background: #fff; border-radius: 4px;">
    <figcaption style="font-size: 0.85em; color: var(--global-text-color-light); margin-top: 0.35em;">Main interface for NPTOI dashboard frontend.</figcaption>
  </figure>
</div>

<style>
@media (max-width: 768px) {
  .nptoi-overview-grid {
    grid-template-columns: 1fr !important;
  }
  .nptoi-overview-img {
    height: auto !important;
  }
}
</style>

## Historical View

![Historical View Panel](/images/posts/His_panel.png)

The Historical View module allows users to inspect segment-level traffic operation indicators over time. It includes mobility indicators such as speed, volume, travel delay, travel time, queue length, and signal performance, as well as safety-related indicators such as hard braking, hard acceleration, speeding, and lane-changing behaviors.

## Prediction Mode

![Prediction Mode Panel](/images/posts/Ped_panel.png)

The Prediction Mode module visualizes short-term traffic forecasts for key traffic operation indicators, including speed, volume, delay, and queue length. It combines recent observed conditions with one-hour-ahead predictions, helping users examine how traffic conditions may evolve across the network.

## Network Ranking

![Network Ranking Module](/images/posts/Network_ranking.png)

The Network Ranking module helps identify critical roadway segments based on selected mobility or safety indicators. Users can compare segments across different time windows, such as the current time, AM peak, PM peak, daytime, nighttime, or the full day. The results can also be exported for further analysis and reporting.

The current version (v1.1.0) is still an early-stage implementation. In future versions, I plan to expand the roadway networks, add more traffic analysis modules, and improve the interactive functions for traffic engineers and researchers. Stay tuned.
