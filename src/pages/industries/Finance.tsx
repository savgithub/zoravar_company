import ServicePage from '../../components/ServicePage'
import { Building2 } from 'lucide-react'

const Finance = () => {
  return (
    <ServicePage
      title="AI Solutions for Finance"
      description="Specialized AI and machine learning solutions tailored for the finance industry. Drive innovation, reduce risk, and enhance customer experience with our expert services."
      metaDescription="AI consulting for finance in Birmingham. Machine learning, risk assessment, fraud detection, and automation solutions for financial services."
      icon={<Building2 size={32} />}
      benefits={[
        'Improve risk assessment accuracy',
        'Detect fraud in real-time',
        'Automate compliance processes',
        'Enhance customer experience',
        'Optimize trading strategies',
        'Reduce operational costs'
      ]}
      features={[
        'Risk Analytics',
        'Fraud Detection',
        'Algorithmic Trading',
        'Credit Scoring',
        'Regulatory Compliance',
        'Customer Analytics',
        'Process Automation',
        'Predictive Modeling'
      ]}
      imagePath="/images/business-intelligence.png"
    />
  )
}

export default Finance
