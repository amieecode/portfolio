import python from '~/assets/images/logos/python.png'
import sql from '~/assets/images/logos/sql.png'
import excel from '~/assets/images/logos/excel.png'
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
import css from '~/assets/images/logos/css.png'
import javascript from '~/assets/images/logos/js.png'
import react from '~/assets/images/logos/react.svg'
import tailwind from '~/assets/images/logos/tailwind.svg'
import html from '~/assets/images/logos/html.png'

export default [
{
    catName: 'Programming',
    catImageName: 'backend',
    skills: [
      { name: 'Python', image: python },
      { name: 'SQL', image: sql },
      { name: 'Excel', image: excel },
      { name: 'Data Cleaning', image: pandas },
      { name: 'EDA', image: matplotlib },
      { name: 'Feature Engineering', image: numpy },
      { name: 'Descriptive & Inferential Statistics', image: statistics },
      { name: 'Regression Analysis', image: scikit },
      { name: 'Clustering', image: scikit },
      { name: 'Predictive Modeling', image: scikit },
    ],
  },

  {
    catName: 'Visualization',
    catImageName: 'desktop',
    skills: [
      { name: 'Power BI', image: powerBI },
      { name: 'Tableau', image: tableau },
      { name: 'Looker Studio', image: lookerStudio },
    ],
  },

  {
    catName: 'Tools',
    catImageName: 'frontend',
    skills: [
      { name: 'Git', image: git },
      { name: 'GitHub', image: github },
      { name: 'Web Scraping', image: webScraping },
    ],
  },
  {
    catName: 'Other Skill',
    catImageName: 'other',
    skills: [
      { name: 'React', image: react },
      { name: 'Tailwind', image: tailwind },
      { name: 'Javascript', image: javascript },
			{ name: 'CSS', image: css },
      { name: 'HTML', image: html },
    ],
  },
]
