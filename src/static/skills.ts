import python from '~/assets/images/logos/python.png'
import sql from '~/assets/images/logos/sql.png'
import excel from '~/assets/images/logos/excel.png'
import powerbi from '~/assets/images/logos/power-bi.png'
import tableau from '~/assets/images/logos/tableau.png'
import lookerstudio from '~/assets/images/logos/looker-studio.png'
import pandas from '~/assets/images/logos/pandas.png'
import numpy from '~/assets/images/logos/numpy.png'
import matplotlib from '~/assets/images/logos/matplotlib.png'
import scikit from '~/assets/images/logos/scikit-learn.png'
import git from '~/assets/images/logos/git.png'
import github from '~/assets/images/logos/github.png'
import webscraping from '~/assets/images/logos/web-scraping.png'
import css from '~/assets/images/logos/css.png'
import javascript from '~/assets/images/logos/js.png'
import react from '~/assets/images/logos/react.svg'
import tailwind from '~/assets/images/logos/tailwind.svg'
import html from '~/assets/images/logos/html.png'

export default [
{
    catName: 'Analysis',
    catImageName: 'backend',
    skills: [
      { name: 'Excel', image: excel },
      { name: 'SQL', image: sql },
      { name: 'Python', image: python },
      { name: 'Pandas', image: pandas },
      { name: 'Matplotlib', image: matplotlib },
      { name: 'Numpy', image: numpy },
      { name: 'Scikit-Learn', image: scikit },
    ],
  },

  {
    catName: 'Visualization',
    catImageName: 'desktop',
    skills: [
      { name: 'Power BI', image: powerbi },
      { name: 'Tableau', image: tableau },
      { name: 'Looker Studio', image: lookerstudio },
    ],
  },

  {
    catName: 'Tools',
    catImageName: 'frontend',
    skills: [
      { name: 'Git', image: git },
      { name: 'GitHub', image: github },
      { name: 'Web Scraping', image: webscraping },
    
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
