module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none'
			}
		}
	]
}