import ServicePage from '../../components/ServicePage'
import { Shield } from 'lucide-react'

const PIIProtection = () => {
    return (
        <ServicePage
            title="PII Data Protection"
            description="Comprehensive data protection solutions to safeguard personally identifiable information and ensure regulatory compliance."
            metaDescription="PII data protection services in Birmingham. GDPR compliance, data security, and privacy protection solutions."
            icon={<Shield size={32} />}
            benefits={[
                'Ensure GDPR and regulatory compliance',
                'Protect sensitive customer data',
                'Reduce risk of data breaches',
                'Build customer trust',
                'Avoid costly fines and penalties',
                'Implement privacy by design'
            ]}
            features={[
                'Data Classification',
                'Privacy Impact Assessments',
                'Data Encryption',
                'Access Controls',
                'Data Masking',
                'Compliance Monitoring',
                'Incident Response',
                'Privacy Training'
            ]}
            imagePath="/images/data-security.png"
        />
    )
}

export default PIIProtection
