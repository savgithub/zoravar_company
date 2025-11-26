import ServicePage from '../../components/ServicePage'
import { Building2 } from 'lucide-react'

const Healthcare = () => {
  return (
    <ServicePage
      title="AI Solutions for Healthcare"
      description="Specialized AI and machine learning solutions tailored for the healthcare industry. Improve patient outcomes, streamline operations, and enhance diagnostic accuracy."
      metaDescription="AI consulting for healthcare in Birmingham. Medical diagnostics, patient analytics, and healthcare automation solutions."
      icon={<Building2 size={32} />}
      benefits={[
        'Improve diagnostic accuracy',
        'Enhance patient care quality',
        'Reduce administrative burden',
        'Optimize resource allocation',
        'Enable predictive healthcare',
        'Ensure regulatory compliance'
      ]}
      features={[
        'Medical Imaging Analysis',
        'Patient Risk Prediction',
        'Clinical Decision Support',
        'Drug Discovery',
        'Healthcare Analytics',
        'Patient Engagement',
        'Resource Optimization',
        'Compliance Management'
      ]}
      imagePath="/images/ai-innovation.png"
    />
  )
}

export default Healthcare
