import ServicePage from '../../components/ServicePage'
import { BarChart3 } from 'lucide-react'

const DataAnalytics = () => {
    return (
        <ServicePage
            title="Data Analytics & Intelligence"
            description="Transform raw data into actionable insights with advanced analytics and visualization. Make data-driven decisions that propel your business forward."
            metaDescription="Data analytics and business intelligence services in Birmingham. Advanced analytics, data visualization, and insights for your business."
            icon={<BarChart3 size={32} />}
            benefits={[
                'Make informed, data-driven decisions',
                'Identify trends and patterns in your data',
                'Improve operational efficiency',
                'Enhance customer understanding',
                'Optimize business processes',
                'Increase revenue and reduce costs'
            ]}
            features={[
                'Business Intelligence Dashboards',
                'Data Visualization',
                'Performance Metrics & KPIs',
                'Real-time Analytics',
                'Predictive Analytics',
                'Custom Reporting',
                'Data Warehousing',
                'Self-Service Analytics'
            ]}
            imagePath="/images/data-visualization-dashboard.png"
        />
    )
}

export default DataAnalytics
