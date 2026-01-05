---
title: "Analyzing Speed-Difference Impact on Freeway Joint Injury Severities of Leading-Following Vehicles Using Statistical and Data-Driven Models"
collection: publications
category: journal
permalink: /publication/2024-10-01-joint-ML-speed-difference-severity

header:
  teaser: publications/2024-10-01-joint-ML-speed-difference-severity.jpg

authors: "Chenzhu Wang, Mohamed Abdel-Aty, <strong>Lei Han</strong>*, Said Easa"
venue: "Accident Analysis & Prevention"
date: 2024-10-01
year: 2024
status: "published"
method: "Machine Learning"
data: "Crash Data"
objects: "Crash Severity Analysis"

abstract: "Rear-end (RE) crashes are notably prevalent and pose a substantial risk on freeways. This paper explores the correlation between speed difference among the following and leading vehicles (Δν) and RE crash risk. Three joint models, comprising both uncorrelated and correlated joint random-parameters bivariate probit (RPBP) approaches (statistical methods) and a cross-stitch multilayer perceptron (CS-MLP) network (a data-driven method), were estimated and compared against three separate models: Support Vector Machines (SVM), eXtreme Gradient Boosting (XGBoost), and MLP networks (all data-driven methods). Data on 15,980 two-vehicle RE crashes were collected over a two-year period, from January 1, 2021, to December 31, 2022, considering two possible levels of injury severity: no injury and injury/fatality for both drivers of following and leading vehicles. The comparative performance analysis demonstrates the superior predictive capability of the CS-MLP network over the uncorrelated/correlated joint RPBP model, SVM, XGBoost, and MLP networks in terms of recall, F-1 Score, and AUC. Significantly, numerous shared variables influence the injury severity outcomes for the following and leading vehicles across both statistical and data-driven approaches. Among these factors, the following vehicle (a truck) and the leading vehicle (a passenger car) demonstrate contrasting effects on the injury severity outcomes for both vehicles. Furthermore, the SHapley Additive exPlanations (SHAP) values from the CS-MLP network visually show the relationship between Δν and injury severity, revealing non-linear trends unlike the average effects shown by statistical methods. They indicate that the least injury outcomes for both following and leading vehicles occurs at a Δν of 0 to 10 mph, matching observed patterns in RE crash data. Additionally, a marked variation in the trend of SHAP values for the two vehicles is noted as the speed difference increases. Therefore, the findings affirm the superior performance of joint model development and substantiate the non-linear impacts of speed difference on injury outcomes. The adoption of dynamic speed control measures is recommended to mitigate the injury outcomes involved in two-vehicle RE crashes."
description: "This study analyzes the impact of speed differences on joint injury severities in freeway rear-end crashes using joint statistical and machine learning models."

doi: "https://doi.org/10.1016/j.aap.2024.107695"
citation: 'Wang, C., Abdel-Aty, M., Han, L., & Easa, S. M. (2024). Analyzing speed-difference impact on freeway joint injury severities of Leading-Following vehicles using statistical and data-driven models. <i>Accident Analysis & Prevention</i>, 206, 107695.'
bibtex: |
  @article{wang2024analyzing,
    title={Analyzing speed-difference impact on freeway joint injury severities of Leading-Following vehicles using statistical and data-driven models},
    author={Wang, Chenzhu and Abdel-Aty, Mohamed and Han, Lei and Easa, Said M},
    journal={Accident Analysis & Prevention},
    volume={206},
    pages={107695},
    year={2024},
    publisher={Elsevier}
  }
paperurl: "https://doi.org/10.1016/j.aap.2024.107695"
---
