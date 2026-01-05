---
layout: archive
title: "Posts"
permalink: /posts/
author_profile: true
---

<style>
  /* Limit right edge for Posts page to match Home page */
  @media screen and (min-width: 1280px) {
    .archive {
      max-width: calc(100% - 400px);
      margin-right: 200px;
    }
  }
  
  /* Card styling for posts - similar to Research page */
  .list__item {
    background-color: var(--global-bg-color);
    border: 1px solid var(--global-border-color);
    border-radius: 8px;
    padding: 0;
    margin-bottom: 3em;
    transition: box-shadow 0.3s ease, transform 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }
  
  .list__item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  /* Post content wrapper - similar to research-module-content */
  .archive__item {
    padding: 1.5em 1.5em 0 1.5em;
  }
  
  /* When excerpt is the last child, remove bottom padding from archive__item */
  .list__item .archive__item:has(> .archive__item-excerpt:last-child) {
    padding-bottom: 0 !important;
  }
  
  /* Post teaser image styling - similar to research-module-image */
  .archive__item-teaser {
    width: 100% !important;
    margin-bottom: 0 !important;
  }
  
  .archive__item-teaser img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    display: block;
    margin: 0;
    padding: 0;
    vertical-align: bottom;
  }
  
  .archive__item-title {
    margin-top: 0;
    margin-bottom: 0.5em;
  }
  
  .archive__item-title a {
    color: #1976d2;
    text-decoration: none;
    font-weight: 600;
  }
  
  .archive__item-title a:hover {
    text-decoration: underline;
  }
  
  /* Excerpt styling for posts */
  .list__item p.archive__item-excerpt,
  .list__item div.archive__item-excerpt {
    margin-top: 0.5em !important;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    color: var(--global-text-color) !important;
    line-height: 1.5 !important;
    font-size: 0.85em !important;
  }
  
  .list__item .archive__item-excerpt p {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    padding-bottom: 0 !important;
    font-size: 0.85em !important;
    line-height: 1.5 !important;
  }
  
  /* Remove bottom padding from archive__item when excerpt is last */
  .list__item .archive__item > .archive__item-excerpt:last-child {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }
  
  .page__meta {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 0.9em;
    color: var(--global-text-color-light);
  }
</style>

{% include base_path %}

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
