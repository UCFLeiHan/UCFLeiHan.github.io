---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.cv-pdf-button {
  position: absolute;
  right: 0em;
  top: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  padding: 0.25em 0.5em;
  background-color: #1976d2;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  font-weight: 500;
  font-size: 0.75em;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(25, 118, 210, 0.2);
  z-index: 10;
  height: fit-content;
  line-height: 1.2;
}

.cv-pdf-button:hover {
  background-color: #1565c0;
  box-shadow: 0 4px 8px rgba(25, 118, 210, 0.3);
  transform: translateY(-1px);
  color: white;
  text-decoration: none;
}

.archive .page__title {
  position: relative;
  padding-right: 100px;
  display: flex;
  align-items: center;
  min-height: 1.2em;
}

/* Add right margin limit for CV page only */
@media (min-width: 925px) {
  .archive {
    max-width: calc(83.333% - 16.666%);
    margin-right: 16.666%;
  }
}

.cv-card-container {
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  margin-top: 1em;
}

.cv-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1em 1.2em;
  transition: box-shadow 0.3s ease;
}

.cv-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.cv-card-title {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 1em;
  color: #333;
  border-bottom: 2px solid #1976d2;
  padding-bottom: 0.5em;
}

/* Collapsible details styling */
.cv-card details {
  width: 100%;
}

.cv-card summary {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 0;
  color: #333;
  border-bottom: 2px solid #1976d2;
  padding-bottom: 0.3em;
  cursor: pointer;
  list-style: none;
  position: relative;
  padding-right: 2em;
  user-select: none;
}

.cv-card summary::-webkit-details-marker {
  display: none;
}

.cv-card summary::before {
  content: '▶';
  position: absolute;
  right: 0;
  color: #1976d2;
  font-size: 0.8em;
  transition: transform 0.3s ease;
  top: 50%;
  transform: translateY(-50%);
}

.cv-card details[open] summary::before {
  transform: translateY(-50%) rotate(90deg);
}

.cv-card details[open] summary {
  margin-bottom: 0.8em;
}

.cv-card-content {
  color: #555;
  line-height: 1.6;
}

.cv-card-content p {
  margin-bottom: 0.8em;
}

.cv-card-content p:last-of-type {
  margin-bottom: 0.3em;
}

.cv-card-content ul {
  margin: 0;
  padding-left: 1.5em;
}

.cv-card-content li {
  margin-bottom: 0em;
}

.cv-education-item {
  margin-bottom: 1.5em;
  display: flex;
  gap: 1.5em;
  align-items: flex-start;
}

.cv-education-logo {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  object-fit: contain;
  display: block;
  transition: opacity 0.3s ease;
}

.cv-education-item a {
  display: block;
  text-decoration: none;
}

.cv-education-item a:hover .cv-education-logo {
  opacity: 0.8;
}

.cv-education-content {
  flex: 1;
  padding-left: 1em;
  border-left: 3px solid #1976d2;
}

.cv-education-item:last-child {
  margin-bottom: 0;
}

.cv-education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.3em;
}

.cv-education-left {
  flex: 1;
}

.cv-education-degree {
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 0.2em;
}

.cv-education-university {
  font-weight: 600;
  color: #333;
  font-size: 0.95em;
}

.cv-education-meta {
  text-align: right;
  color: #666;
  font-size: 0.9em;
  white-space: nowrap;
  margin-left: 1em;
}

.cv-education-details {
  color: #666;
  font-size: 0.95em;
}

.cv-project-item {
  margin-bottom: 1.5em;
  padding-left: 1em;
  border-left: 3px solid #1976d2;
}

.cv-project-item:last-child {
  margin-bottom: 0;
}

.cv-project-title {
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 0.3em;
}

.cv-project-title a {
  color: #1976d2;
  text-decoration: none;
  transition: color 0.3s ease;
}

.cv-project-title a:hover {
  color: #1565c0;
  text-decoration: underline;
}

.cv-project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.3em;
}

.cv-project-sponsor {
  font-weight: 600;
  color: #333;
  font-size: 0.95em;
  flex: 1;
}

.cv-project-meta {
  text-align: right;
  color: #666;
  font-size: 0.9em;
  white-space: nowrap;
  margin-left: 1em;
}

.cv-project-description {
  color: #555;
  font-size: 0.95em;
  margin-top: 0.5em;
}

.cv-project-description ul {
  margin: 0.5em 0;
  padding-left: 1.5em;
}

.cv-project-description li {
  margin-bottom: 0.3em;
}

.cv-project-section-title {
  font-size: 1em;
  font-weight: 600;
  color: #333;
  margin-top: 1.5em;
  margin-bottom: 1em;
}

.cv-project-section-title:first-child {
  margin-top: 0;
}

.cv-publication-year {
  font-size: 1em;
  font-weight: 600;
  color: #333;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
}

.cv-publication-year:first-of-type {
  margin-top: 0;
}

.cv-service-section {
  margin-bottom: 1.5em;
}

.cv-service-section:last-child {
  margin-bottom: 0;
}

.cv-service-section-title {
  font-size: 1em;
  font-weight: 600;
  color: #333;
  margin-top: 0;
  margin-bottom: 0.8em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #e0e0e0;
}

.cv-service-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.cv-service-list li {
  margin-bottom: 0.5em;
  padding-left: 1.2em;
  position: relative;
  color: #555;
}

.cv-service-list li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #1976d2;
  font-weight: bold;
  font-size: 1.2em;
}

.cv-service-list li:last-child {
  margin-bottom: 0;
}

.cv-service-list li a {
  color: #1976d2;
  text-decoration: none;
  transition: color 0.3s ease;
}

.cv-service-list li a:hover {
  color: #1565c0;
  text-decoration: underline;
}

.cv-reference-item {
  display: flex;
  gap: 1.5em;
  margin-bottom: 2em;
  align-items: flex-start;
}

.cv-reference-item:last-child {
  margin-bottom: 0;
}

.cv-reference-photo {
  flex-shrink: 0;
  width: 120px;
  height: 160px;
  border-radius: 4px;
  object-fit: cover;
  border: 2px solid #e0e0e0;
}

.cv-reference-content {
  flex: 1;
  min-width: 0;
}

.cv-reference-name {
  font-weight: 600;
  color: #1976d2;
  font-size: 1.05em;
  margin-bottom: 0.3em;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1em;
}

.cv-reference-relationship {
  color: #666;
  font-size: 0.85em;
  font-style: italic;
  font-weight: normal;
  white-space: nowrap;
}

.cv-reference-email {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 0.5em;
}

.cv-reference-details {
  color: #555;
  font-size: 0.95em;
  line-height: 1.6;
  margin-bottom: 0.3em;
}


@media (max-width: 768px) {
  .cv-reference-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .cv-reference-photo {
    width: 100px;
    height: 130px;
  }
}

.cv-award-item {
  margin-bottom: 0.6em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 1.2em;
  position: relative;
}

.cv-award-item:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #1976d2;
  font-weight: bold;
  font-size: 1.2em;
}

.cv-award-item:last-child {
  margin-bottom: 0;
}

.cv-award-name {
  font-weight: 400;
  color: #333;
  flex: 1;
  padding-right: 1em;
}

.cv-award-name strong {
  font-weight: 600;
  color: #1976d2;
}

.cv-award-name strong a {
  color: #1976d2;
  text-decoration: none;
  transition: color 0.3s ease;
}

.cv-award-name strong a:hover {
  color: #1565c0;
  text-decoration: underline;
}

.cv-award-name em {
  font-weight: 400;
  font-style: italic;
  color: #666;
}

.cv-award-date {
  color: #666;
  font-size: 0.9em;
  white-space: nowrap;
  text-align: right;
}

@media (max-width: 768px) {
  .cv-pdf-button {
    position: static;
    margin-top: 1em;
    display: inline-flex;
  }
  
  .archive .page__title {
    padding-right: 0;
  }
  
  .cv-card {
    padding: 0.8em 1em;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const pageTitle = document.querySelector('.archive .page__title');
  if (pageTitle) {
    const pdfButton = document.createElement('a');
    pdfButton.href = '/files/LH_Academic_CV.pdf';
    pdfButton.target = '_blank';
    pdfButton.rel = 'noopener noreferrer';
    pdfButton.className = 'cv-pdf-button';
    pdfButton.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0;"><path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>PDF</span>';
    pageTitle.appendChild(pdfButton);
  }
});
</script>

<div class="cv-card-container">
  
  <!-- Education Card -->
  <div class="cv-card">
    <details>
      <summary>Education</summary>
      <div class="cv-card-content">
      <div class="cv-education-item">
        <a href="https://www.ucf.edu/" target="_blank" rel="noopener noreferrer">
          <img src="/images/ucf-logo.png" alt="UCF Logo" class="cv-education-logo">
        </a>
        <div class="cv-education-content">
          <div class="cv-education-header">
            <div class="cv-education-left">
              <div class="cv-education-degree">Ph.D. in Civil Engineering</div>
              <div class="cv-education-university">University of Central Florida (UCF)</div>
            </div>
            <div class="cv-education-meta">
              August 2023 - May 2026<br>
              Orlando, USA
            </div>
          </div>
          <div class="cv-education-details">
            Advised by Dr. Mohamed Abdel-Aty<br>
            GPA: 4.00/4.00 (Top 5%)<br>
            <em>Dissertation: Connected Vehicle Data-based Traffic Safety and Mobility Analysis</em>
          </div>
        </div>
      </div>
      <div class="cv-education-item">
        <a href="https://en.tongji.edu.cn/p/#/" target="_blank" rel="noopener noreferrer">
          <img src="/images/tongji-logo.png" alt="Tongji University Logo" class="cv-education-logo">
        </a>
        <div class="cv-education-content">
          <div class="cv-education-header">
            <div class="cv-education-left">
              <div class="cv-education-degree">M.S. in Transportation Engineering</div>
              <div class="cv-education-university">Tongji University</div>
            </div>
            <div class="cv-education-meta">
              September 2020 - May 2023<br>
              Shanghai, China
            </div>
          </div>
          <div class="cv-education-details">
            Advised by Dr. Rongjie Yu<br>
            Grade: 4.71/5.00 (Top 5%)<br>
            <em>Thesis: Expressway Crash Risk Evaluation Modeling and Robustness Analysis</em>
          </div>
        </div>
      </div>
      <div class="cv-education-item">
        <a href="https://en.tongji.edu.cn/p/#/" target="_blank" rel="noopener noreferrer">
          <img src="/images/tongji-logo.png" alt="Tongji University Logo" class="cv-education-logo">
        </a>
        <div class="cv-education-content">
          <div class="cv-education-header">
            <div class="cv-education-left">
              <div class="cv-education-degree">B.S. in Transportation Engineering</div>
              <div class="cv-education-university">Tongji University</div>
            </div>
            <div class="cv-education-meta">
              September 2016 - May 2020<br>
              Shanghai, China
            </div>
          </div>
          <div class="cv-education-details">
            GPA: 4.43/5.00
          </div>
        </div>
      </div>
      </div>
    </details>
  </div>

  <!-- Research Interests Card -->
  <div class="cv-card">
    <details>
      <summary>Research Interests</summary>
      <div class="cv-card-content">
      <p><strong>Transportation research</strong><br>
      Traffic safety modeling; Traffic operation and prediction; CV data applications.</p>
      
      <p><strong>Methodology</strong><br>
      Econometric statistical models; Spatiotemporal ML & DL; Generative AI.</p>
      
      <p><strong>Working topics</strong></p>
      <ul>
        <li>Multi-scale traffic safety modeling with CV data-based driving behaviors</li>
        <li>Network mobility analysis with multi-source traffic data (e.g., CV & ATSPM data)</li>
        <li>Applying generative AI for traffic safety and mobility prediction</li>
      </ul>
      </div>
    </details>
  </div>

  <!-- Projects Card -->
  <div class="cv-card">
    <details>
      <summary>Projects</summary>
      <div class="cv-card-content">
      <div class="cv-project-section-title">Ph.D. Research Projects</div>
      
      <div class="cv-project-item">
        <div class="cv-project-title"><a href="https://rip.trb.org/View/2529964" target="_blank" rel="noopener noreferrer">Network Level Proactive Traffic Operations Indicator Using AI and CV Data</a></div>
        <div class="cv-project-header">
          <div class="cv-project-sponsor">Florida DOT Project, No. BED28 977-18. ($247,950)</div>
          <div class="cv-project-meta">
            May 2025 - February 2027
          </div>
        </div>
        <div class="cv-project-description">
          <ul>
            <li>Developing CV-data-driven traffic safety and mobility indicators for urban roadway networks.</li>
            <li>Implementing spatiotemporal DL models (e.g., GCN, Transformer) for real-time traffic prediction.</li>
            <li>Designing a dashboard for monitoring and forecasting network-level traffic indicators.</li>
          </ul>
        </div>
      </div>
      
      <div class="cv-project-item">
        <div class="cv-project-title"><a href="https://expertnet.org/index.cfm?fuseaction=projects.details&id=279555" target="_blank" rel="noopener noreferrer">Advanced Transportation Technologies and Innovation (ATTAIN) Phase IV</a></div>
        <div class="cv-project-header">
          <div class="cv-project-sponsor">Florida DOT Project ($500,000)</div>
          <div class="cv-project-meta">
            July 2022 - February 2025
          </div>
        </div>
        <div class="cv-project-description">
          <ul>
            <li>Developing an ensemble ML framework for secondary crash prediction using Microwave-detector data.</li>
            <li>Integrating the prediction module into the ATTAIN system and validating on central Florida freeways.</li>
          </ul>
        </div>
      </div>
      
      <div class="cv-project-section-title">M.S. Research Projects</div>
      
      <div class="cv-project-item">
        <div class="cv-project-title">Smart Freeway Active Safety Traffic Operation Management</div>
        <div class="cv-project-header">
          <div class="cv-project-sponsor">Science and Technology Project of Zhejiang Province </div>
          <div class="cv-project-meta">
            July 2021 - January 2023
          </div>
        </div>
        <div class="cv-project-description">
          <ul>
            <li>Identifying risky driving behaviors (e.g., hard braking and hard acceleration) from smartphone-based trajectory and motion data.</li>
            <li>Developing a real-time crash prediction model integrating behavior features with traffic flow states.</li>
          </ul>
        </div>
      </div>
      </div>
    </details>
  </div>

  <!-- Honors and Awards Card -->
  <div class="cv-card">
    <details>
      <summary>Honors and Awards</summary>
      <div class="cv-card-content">
      <div class="cv-award-item">
        <span class="cv-award-name"><strong><a href="https://www.icftte.org/fstar" target="_blank" rel="noopener noreferrer">FTTE Future Stars Award</a></strong>, 4th International Conference on Frontiers of Traffic and Transportation Engineering (FTTE 2025)</span>
        <span class="cv-award-date">November 2025</span>
      </div>
      <div class="cv-award-item">
        <span class="cv-award-name"><strong>Department Fellowship</strong>, Department of Civil, Environmental and Construction Engineering, UCF</span>
        <span class="cv-award-date">2023-2024</span>
      </div>
      <div class="cv-award-item">
        <span class="cv-award-name"><strong><a href="https://tjjt.tongji.edu.cn/info/1596/7481.htm" target="_blank" rel="noopener noreferrer">China National Scholarship</a></strong> <em>(1 of 9 winners out of 326 students)</em></span>
        <span class="cv-award-date">November 2021</span>
      </div>
      <div class="cv-award-item">
        <span class="cv-award-name"><strong>Second Prize: 18th China Postgraduate Mathematical Contest in Modeling (CPMCM)</strong></span>
        <span class="cv-award-date">November 2020</span>
      </div>
      <div class="cv-award-item">
        <span class="cv-award-name"><strong>China National Encouragement Scholarship</strong> <em>(1 of 10 winners out of 420 students)</em></span>
        <span class="cv-award-date">November 2019</span>
      </div>
      <div class="cv-award-item">
        <span class="cv-award-name"><strong><a href="https://news.tongji.edu.cn/info/1003/69937.htm" target="_blank" rel="noopener noreferrer">First Prize: 14th National Competition of Transport Science and Technology for Students</a></strong> <em>(1 of 2 winners out of 20 teams)</em></span>
        <span class="cv-award-date">November 2019</span>
      </div>
      <div class="cv-award-item">
        <span class="cv-award-name"><strong>Tongji University 2nd-Class Outstanding Student Scholarship</strong></span>
        <span class="cv-award-date">November 2019</span>
      </div>
      </div>
    </details>
  </div>

  <!-- Publications Card -->
  <div class="cv-card">
    <details>
      <summary>Publications</summary>
      <div class="cv-card-content">
      {% assign sorted_publications = site.publications | sort: 'year' | reverse %}
      {% assign current_year = '' %}
      {% for post in sorted_publications %}
        {% assign post_year = post.year %}
        {% unless post_year %}
          {% assign post_year = post.date | date: '%Y' %}
        {% endunless %}
        {% if post_year != current_year %}
          {% if current_year != '' %}
            </ul>
          {% endif %}
          <h3 class="cv-publication-year">{{ post_year }}</h3>
          <ul>
          {% assign current_year = post_year %}
        {% endif %}
    {% include archive-single-cv.html %}
      {% endfor %}
      </ul>
      </div>
    </details>
  </div>

  <!-- Academic Services Card -->
  <div class="cv-card">
    <details>
      <summary>Academic Services</summary>
      <div class="cv-card-content">
      <div class="cv-service-section">
        <h3 class="cv-service-section-title">Journal Reviewer</h3>
        <ul class="cv-service-list">
          <li><a href="https://www.journals.elsevier.com/accident-analysis-and-prevention" target="_blank" rel="noopener noreferrer">Accident Analysis & Prevention</a> (JCR Q1, reviewed 10 papers by 2025)</li>
          <li><a href="https://www.journals.elsevier.com/transportation-research-part-a-policy-and-practice" target="_blank" rel="noopener noreferrer">Transportation Research Part A: Policy and Practice</a> (JCR Q1)</li>
          <li><a href="https://www.journals.elsevier.com/transportation-research-part-c-emerging-technologies" target="_blank" rel="noopener noreferrer">Transportation Research Part C: Emerging Technologies</a> (JCR Q1)</li>
          <li><a href="https://www.journals.elsevier.com/transportation-research-part-e-logistics-and-transportation-review" target="_blank" rel="noopener noreferrer">Transportation Research Part E: Logistics and Transportation Review</a> (JCR Q1)</li>
          <li><a href="https://www.journals.elsevier.com/expert-systems-with-applications" target="_blank" rel="noopener noreferrer">Expert Systems with Applications</a> (JCR Q1)</li>
          <li><a href="https://www.keaipublishing.com/en/journals/journal-of-traffic-and-transportation-engineering-english-edition/" target="_blank" rel="noopener noreferrer">Journal of Traffic and Transportation Engineering (English Edition)</a> (JCR Q1)</li>
          <li><a href="https://www.journals.elsevier.com/journal-of-transport-geography" target="_blank" rel="noopener noreferrer">Journal of Transport Geography</a> (JCR Q1)</li>
          <li><a href="https://www.journals.elsevier.com/transport-policy" target="_blank" rel="noopener noreferrer">Transport Policy</a> (JCR Q1)</li>
          <li><a href="https://www.journals.elsevier.com/safety-science" target="_blank" rel="noopener noreferrer">Safety Science</a> (JCR Q1)</li>
          <li><a href="https://ascelibrary.org/journal/jtepbs" target="_blank" rel="noopener noreferrer">Journal of Transportation Engineering Part A: Systems</a> (JCR Q2)</li>
          <li><a href="https://www.tandfonline.com/journals/gcpi20" target="_blank" rel="noopener noreferrer">Traffic Injury Prevention</a> (JCR Q2)</li>
        </ul>
      </div>
      
      <div class="cv-service-section">
        <h3 class="cv-service-section-title">Conference Reviewer</h3>
        <ul class="cv-service-list">
          <li><a href="https://www.trb.org/AnnualMeeting/AnnualMeeting.aspx" target="_blank" rel="noopener noreferrer">Transportation Research Board Annual Meeting</a> (2024-2026)</li>
          <li><a href="https://en.wtc-conference.com/" target="_blank" rel="noopener noreferrer">World Transport Convention</a> (2023-2024)</li>
        </ul>
      </div>
      </div>
    </details>
  </div>

  <!-- Skills Card -->
  <div class="cv-card">
    <details>
      <summary>Skills</summary>
      <div class="cv-card-content">
      <ul>
        <li><strong>Programming:</strong> Python, R, BUGS (for Bayesian inference modeling), LaTeX</li>
        <li><strong>Software & Tools:</strong> VS Code, Cursor, RStudio, WinBUGS, ArcGIS Pro, Zotero, Overleaf, Microsoft Office</li>
        <li><strong>Languages:</strong> Chinese (Native), English (Fluent)</li>
      </ul>
      </div>
    </details>
  </div>

  <!-- References Card -->
  <div class="cv-card">
    <details>
      <summary>References</summary>
      <div class="cv-card-content">
      <div class="cv-reference-item">
        <img src="/images/references/abdel-aty.jpg" alt="Dr. Mohamed Abdel-Aty" class="cv-reference-photo" onerror="this.style.display='none'">
        <div class="cv-reference-content">
          <div class="cv-reference-name">
            <span>1. Dr. Mohamed Abdel-Aty</span>
            <span class="cv-reference-relationship">Ph.D. Advisor</span>
          </div>
          <div class="cv-reference-email">M.Aty@ucf.edu</div>
          <div class="cv-reference-details">
            Pegasus Professor, Trustee Endowed Chair & former Chair of CECE Department, UCF<br>
            Director of Smart & Safe Transportation Lab (SST Lab)<br>
            Editor Emeritus of Accident Analysis & Prevention
          </div>
        </div>
      </div>
      
      <div class="cv-reference-item">
        <img src="/images/references/rongjie-yu.jpg" alt="Dr. Rongjie Yu" class="cv-reference-photo" onerror="this.style.display='none'">
        <div class="cv-reference-content">
          <div class="cv-reference-name">
            <span>2. Dr. Rongjie Yu</span>
            <span class="cv-reference-relationship">M.S. Advisor</span>
          </div>
          <div class="cv-reference-email">yurongjie@tongji.edu.cn</div>
          <div class="cv-reference-details">
            Professor at the College of Transportation, Tongji University<br>
            National Young Scholar (Ministry of Education of China)<br>
            World's Top 2% Scientists (Stanford-Elsevier)
          </div>
        </div>
      </div>
      </div>
    </details>
  </div>

</div>
