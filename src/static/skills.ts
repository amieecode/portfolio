import python from '~/assets/images/logos/python.png'
import sql from '~/assets/images/logos/sql.png'
import excel from '~/assets/images/logos/excel.jpeg'
import powerBI from '~/assets/images/logos/powerbi.png'
import tableau from '~/assets/images/logos/tableau.png'
import lookerStudio from '~/assets/images/logos/lookerStudio.png'
import pandas from '~/assets/images/logos/pandas.png'
import numpy from '~/assets/images/logos/numpy.png'
import matplotlib from '~/assets/images/logos/matplotlib.png'
import scikit from '~/assets/images/logos/scikitlearn.png'
import statistics from '~/assets/images/logos/statistics.png'
import git from '~/assets/images/logos/git.png'
import github from '~/assets/images/logos/github.png'
import webScraping from '~/assets/images/logos/webscraping.png'

export default [
  {
    catName: 'Data Analysis & Processing',
    catImageName: 'analysis',
    skills: [
      { name: 'Data Cleaning', image: pandas },
      { name: 'Exploratory Data Analysis (EDA)', image: matplotlib },
      { name: 'Feature Engineering', image: numpy },
      { name: 'Data Validation', image: statistics },
      { name: 'KPI Analysis', image: excel },
    ],
  },
  {
    catName: 'Programming & Querying',
    catImageName: 'programming',
    skills: [
      { name: 'Python', image: python },
      { name: 'SQL', image: sql },
      { name: 'Excel', image: excel },
    ],
  },
  {
    catName: 'Visualization & BI',
    catImageName: 'visualization',
    skills: [
      { name: 'Power BI', image: powerBI },
      { name: 'Tableau', image: tableau },
      { name: 'Looker Studio', image: lookerStudio },
    ],
  },
  {
    catName: 'Analytics Techniques',
    catImageName: 'analytics',
    skills: [
      { name: 'Descriptive & Inferential Statistics', image: statistics },
      { name: 'Regression Analysis', image: scikit },
      { name: 'Clustering', image: scikit },
      { name: 'Predictive Modeling', image: scikit },
    ],
  },
  {
    catName: 'Tools & Workflow',
    catImageName: 'tools',
    skills: [
      { name: 'Git', image: git },
      { name: 'GitHub', image: github },
      { name: 'Web Scraping', image: webScraping },
    ],
  },
  {
    catName: 'Professional Strengths',
    catImageName: 'softskills',
    skills: [
      { name: 'Communication', image: github },
      { name: 'Stakeholder Reporting', image: github },
      { name: 'Problem-Solving', image: github },
      { name: 'Collaboration', image: github },
    ],
  },
]
