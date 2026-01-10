import IMAGE_LINKS from './img-links'

export default [
	{
		name: 'Ecommerce and Retail Store',
		links: ['https://app.powerbi.com/links/NMSo1hfJN1?ctid=8f915dc1-e48d-428b-b692-388cd2706a64&pbi_source=linkShare'],
		repo: 'https://github.com/amieecode/ecommerce-and-retail-store',
		thumbnail: IMAGE_LINKS.projects['e-commerce-analysis'][0],
		images: IMAGE_LINKS.projects['e-commerce-analysis'],
		tags: ['Python', 'PowerBI', 'PowerPoint', 'Excel', 'Sklearn', 'Pandas', 'Matplotlib'],
	},

	{
		name: 'Elite Hotel Operations Analysis',
		links: ['/#'],
		repo: 'https://github.com/amieecode/hotel-operations-analysis',
		thumbnail: IMAGE_LINKS.projects['hotel-operations-analysis'][0],
		images: IMAGE_LINKS.projects['hotel-operations-analysis'],
		tags: ['Python', 'PowerBI', 'Excel', 'Sklearn', 'Pandas', 'Matplotlib'],
	},

	{
		name: 'Heart Health Analysis',
		links: ['/#'],
		repo: 'https://github.com/amieecode/heart-health-analysis',
		thumbnail: IMAGE_LINKS.projects['heart-health-analysis'][1],
		images: IMAGE_LINKS.projects['heart-health-analysis'],
		tags: [
			'EDA',
			'Python',
			'Power BI',
			'Data cleaning',
			'Correlation Analysis',
			'Logistic Regression',
			'Dax',
		],
	},

	{
		name: 'Telecommunication Churn Quest',
		links: ['/#'],
		repo: ['https://github.com/amieecode/telecommunications_churn_quest'],
		thumbnail: IMAGE_LINKS.projects['telecom-churn-analysis'][0],
		images: IMAGE_LINKS.projects['telecom-churn-analysis'],
		tags: [
			'Excel',
			'Data cleaning',
			'Predictive analysis',
			'DAX',
			'Visualization',
			'Power BI',
		],
	},

	{
		name: 'Tourism Data Analysis (SPSS)',
		links: ['/#'],
		repo: ['https://github.com/amieecode/tourism-data-analysis-using-spss'],
		thumbnail: IMAGE_LINKS.projects['tourism-data-analysis'][0],
		images: IMAGE_LINKS.projects['tourism-data-analysis'],
		tags: [
			'Excel',
			'SPSS',
			'Data cleaning',
			'predictive analysis',
			'Correlation analysis',
		],
	},

	{
		name: 'Hospital Readmissions Pattern',
		links: ['/#'],
		repo: 'https://github.com/amieecode/hospital_readmission_patterns',
		thumbnail: IMAGE_LINKS.projects['hospital-readmission'][0],
		images: IMAGE_LINKS.projects['hospital-readmission'],
		tags: ['Excel', 'Data cleaning', 'Visualization'],
	},

	{
		name: 'Google Play Store Analysis',
		links: ['/#'],
		repo: 'https://github.com/amieecode/google-play-store-analysis',
		thumbnail: IMAGE_LINKS.projects['google-play-store-analysis'][0],
		images: IMAGE_LINKS.projects['google-play-store-analysis'],
		tags: ['Excel', 'Power BI', 'Tableau', 'LookerStudio', 'Data cleaning'],
	},

	{
		name: 'Porter Food Delivery Analysis',
		links: ['/#'],
		repo: ['https://github.com/amieecode/porter_food_delivery'],
		thumbnail: IMAGE_LINKS.projects['portery-food-analysis'][0],
		images: IMAGE_LINKS.projects['portery-food-analysis'],
		tags: [
			'Excel',
			'Power BI',
			'Data cleaning',
			'Dax',
			'Visualization',
		],
	},

	{
		name: 'HR Analytics',
		links: ['/#'],
		repo: 'https://github.com/amieecode/hr_analytics',
		thumbnail: IMAGE_LINKS.projects['hr-analytics'][0],
		images: IMAGE_LINKS.projects['hr-analytics'],
		tags: ['Excel', 'data cleaning', 'Visualization'],
	},

] as const
