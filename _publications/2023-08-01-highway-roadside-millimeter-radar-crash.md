---
title: "Effects of Spacing of Highway Roadside Millimeter-Wave Radar Detectors on the Accuracy of a Crash Risk Evaluation Model"
collection: publications
category: journal
permalink: /publication/2023-08-01-highway-roadside-millimeter-radar-crash

header:
  teaser: publications/2023-08-01-highway-roadside-millimeter-radar-crash.jpg

authors: "Dongfeng Yang, Jie Dai, Yueyan Zhang, <strong>Lei Han</strong>, Rongjie Yu*"
venue: "交通信息与安全"
date: 2023-08-01
year: 2023
status: "published"
method: "Machine Learning"
data: "Detector Data"
objects: "Real-Time Crash Prediction"

abstract: "Freeways equipped with new sensing equipment such as millimeter-wave radar detectors can accurately monitor traffic operation and well support active traffic management measures. However, due to the high deployment expenditure, there is a need to consider the cost constraints and the effectiveness of traffic state detection. To investigate the impacts of millimeter-wave radar deployment spacing on crash risk evaluation performance, this study is conducted based on the empirical data of the Hangshaoyong highway in Zhejiang Province. A crash risk evaluation model based on deep forest (DF) is developed. Specifically, sliding spatio-temporal windows are employed to extract the features of traffic operation while the correlation relationships between the features and crash risk are established through the integrations of multi-layer cascaded random forests. Considering the sensing range of the millimeter-wave radar detectors, multiple traffic operation datasets are developed by assuming different deployment spacings. Sensitivity analyses of radar deployment spacing on the evaluation accuracy of crash risk are conducted. Analyses results show that: The area under curve (AUC) of DF model is 0.849 with 80.9% recall on crash samples, which is higher than traditional convolutional neural network model (AUC is 0.741, recall is 75.2%) and random forest model (AUC is 0.715, recall is 70.8%). An inverse relationship between radar deployment spacing and evaluation accuracy of crash risk is captured, and the marginal effects of the improvement to the model accuracy decreases under dense deployment conditions. If the radar deployment spacing is reduced from 1 500 m to 750 m, the AUC of crash risk evaluation model shows a substantial increase (from 0.794 to 0.853), but there is no obvious change in AUC values when the radar deployment spacing is reduced from 750 m to 250 m. In conclusion, the radar deployment spacing of 750 m can balance the deployment cost and the evaluation performance of crash risk, which could be used to support the decisions related to the installment of traffic sensing equipment."
description: "This study investigates optimal spacing for millimeter-wave radar detectors on highways using a deep forest model.  It achieves AUC of 0.849 with 80.9% recall, which is higher than CNN and RF models. It also finds that 750 m spacing balances cost and crash risk evaluation accuracy."

doi: "https://doi.org/10.3963/j.jssn.1674-4861.2023.02.003"
citation: 'YANG Dongfeng, DAI Jie, ZHANG Yueyan, HAN Lei, YU Rongjie. Effects of Spacing of Highway Roadside Millimeter-wave Radar Detectors on the Accuracy of a Crash Risk Evaluation Model[J]. Journal of Transport Information and Safety, 2023, 41(2): 28-35. doi: 10.3963/j.jssn.1674-4861.2023.02.003'
bibtex: |
  @article{dongfeng2023effects,
    title={Effects of spacing of highway roadside millimeter-wave radar detectors on the accuracy of a crash risk evaluation model},
    author={Dongfeng, YANG and Jie, DAI and Yueyan, ZHANG and Lei, HAN and Rongjie, YU},
    journal={交通信息与安全},
    volume={41},
    number={2},
    pages={28--35},
    year={2023},
    publisher={交通信息与安全}
  }
paperurl: "https://doi.org/10.3963/j.jssn.1674-4861.2023.02.003"
---
