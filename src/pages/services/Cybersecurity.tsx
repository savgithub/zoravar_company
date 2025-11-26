import ServicePage from '../../components/ServicePage'
import { Shield } from 'lucide-react'

const Cybersecurity = () => {
    return (
        <ServicePage
            title="AI-Powered Cybersecurity"
            description="Advanced threat detection and security solutions powered by artificial intelligence. Protect your business with intelligent, proactive security."
            metaDescription="AI-powered cybersecurity services in Birmingham. Intelligent threat detection, automated security response, and advanced protection."
            icon={<Shield size={32} />}
            benefits={[
                'Detect threats 60% faster with AI',
                'Reduce false positives by 95%',
                'Automate security response',
                'Predict and prevent attacks',
                'Ensure 24/7 protection',
                'Meet compliance requirements'
            ]}
            features={[
                'AI Threat Detection',
                'Security Monitoring',
                'Incident Response',
                'Vulnerability Assessment',
                'Penetration Testing',
                'Security Analytics',
                'Compliance Management',
                'Security Training'
            ]}
            imagePath="/images/cybersecurity-hero.png"
        />
    )
}

export default Cybersecurity
