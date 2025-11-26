import ServicePage from '../../components/ServicePage'
import { Building2 } from 'lucide-react'

const Retail = () => {
  return (
    <ServicePage
      title="AI Solutions for Retail"
      description="Specialized AI and machine learning solutions tailored for the retail industry. Enhance customer experience, optimize inventory, and increase sales."
      metaDescription="AI consulting for retail in Birmingham. Customer analytics, inventory optimization, and personalization solutions for retail businesses."
      icon={<Building2 size={32} />}
      benefits={[
        'Personalize customer experiences',
        'Optimize inventory management',
        'Increase sales and conversion rates',
        'Reduce stockouts and overstock',
        'Improve demand forecasting',
        'Enhance customer loyalty'
      ]}
      features={[
        'Customer Analytics',
        'Recommendation Engines',
        'Demand Forecasting',
        'Inventory Optimization',
        'Price Optimization',
        'Customer Segmentation',
        'Churn Prediction',
        'Store Analytics'
      ]}
      imagePath="/images/business-growth.png"
    />
  )
}

export default Retail
