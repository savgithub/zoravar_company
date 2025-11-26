import ServicePage from '../../components/ServicePage'
import { Building2 } from 'lucide-react'

const Manufacturing = () => {
  return (
    <ServicePage
      title="AI Solutions for Manufacturing"
      description="Specialized AI and machine learning solutions tailored for the manufacturing industry. Optimize production, reduce downtime, and improve quality control."
      metaDescription="AI consulting for manufacturing in Birmingham. Predictive maintenance, quality control, and production optimization solutions."
      icon={<Building2 size={32} />}
      benefits={[
        'Reduce equipment downtime by 50%',
        'Improve product quality',
        'Optimize production schedules',
        'Reduce waste and costs',
        'Enable predictive maintenance',
        'Enhance supply chain efficiency'
      ]}
      features={[
        'Predictive Maintenance',
        'Quality Control AI',
        'Production Optimization',
        'Supply Chain Analytics',
        'Defect Detection',
        'Demand Forecasting',
        'Energy Optimization',
        'Process Automation'
      ]}
      imagePath="/images/automation-solutions.png"
    />
  )
}

export default Manufacturing
