import IMAGE_LINKS from './img-links'

export default [

	{
		name: 'Trial Activation & Conversion Analysis',
		links: ['/#'],
		repo: ['https://github.com/amieecode/trial-conversion-analysis'],
		thumbnail: IMAGE_LINKS.projects['trial-analysis'][0],
		images: IMAGE_LINKS.projects['trial-analysis'],
		tags: [
			'Python',
			'Statistical Tests',
			'Funnel Analysis',
			'Random Forest',
			'Engagement Analysis'
		],
	},

	{
		name: 'Heart Health Analysis',
		links: ['https://app.powerbi.com/links/8dwAE3pkEg?ctid=8f915dc1-e48d-428b-b692-388cd2706a64&pbi_source=linkShare&bookmarkGuid=da824233-9b81-473c-8a8e-be31f6f417a2'],
		repo: 'https://github.com/amieecode/heart-health-analysis',
		thumbnail: IMAGE_LINKS.projects['heart-health-analysis'][0],
		images: IMAGE_LINKS.projects['heart-health-analysis'],
		tags: [
			'EDA',
			'Python',
			'Power BI',
			'Data cleaning',
			'Correlation Analysis',
			'Dax',
		],
	},
{
		name: 'Telecom Customer Churn Analysis',
		links: ['/#'],
		repo: ['https://github.com/amieecode/telecom_customer_churn'],
		thumbnail: IMAGE_LINKS.projects['telecom-churn-analysis'][0],
		images: IMAGE_LINKS.projects['telecom-churn-analysis'],
		tags: [
			'Python',
			'Data cleaning',
			'Predictive analysis',
			'DAX',
			'Visualization',
			'Power BI',
		],
	},

	{
		name: 'Retail Sales & Customer Behavior Analysis',
		links: ['/#'],
		repo: ['https://github.com/amieecode/retail-and-sales-analysis'],
		thumbnail: IMAGE_LINKS.projects['retail-customer-behavior-analysis'][0],
		images: IMAGE_LINKS.projects['retail-customer-behavior-analysis'],
		tags: [
			'Excel',
			'Power BI',
			'Data cleaning',
			'Python',		
		],
	},

	{
		name: 'Credit Card Weekly Status Analysis',
		links: ['/#'],
		repo: ['https://github.com/amieecode/credit-card-weekly-status-analysis'],
		thumbnail: IMAGE_LINKS.projects['credit-card-analysis'][0],
		images: IMAGE_LINKS.projects['credit-card-analysis'],
		tags: [
			'Power BI',
			'Data cleaning',
			'Credit Card analysis',
		],
	},

	{
		name: 'Ecommerce and Retail Store',
		links: ['https://app.powerbi.com/links/NMSo1hfJN1?ctid=8f915dc1-e48d-428b-b692-388cd2706a64&pbi_source=linkShare'],
		repo: 'https://github.com/amieecode/ecommerce-and-retail-store',
		thumbnail: IMAGE_LINKS.projects['e-commerce-analysis'][0],
		images: IMAGE_LINKS.projects['e-commerce-analysis'],
		tags: ['Python', 'PowerBI', 'PowerPoint', 'Excel', 'Sklearn', 'Pandas', 'Matplotlib'],
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
		name: 'Google Play Store Analysis',
		links: ['/#'],
		repo: 'https://github.com/amieecode/google-play-store-analysis',
		thumbnail: IMAGE_LINKS.projects['google-play-store-analysis'][0],
		images: IMAGE_LINKS.projects['google-play-store-analysis'],
		tags: ['Excel', 'Power BI', 'Tableau', 'LookerStudio', 'Data cleaning'],
	},


] as const
