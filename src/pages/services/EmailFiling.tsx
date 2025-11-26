import ServicePage from '../../components/ServicePage'
import { Mail } from 'lucide-react'

const EmailFiling = () => {
    return (
        <ServicePage
            title="Email Filing to SharePoint"
            description="Automated email filing solutions from Microsoft Outlook to SharePoint with intelligent metadata extraction and organization."
            metaDescription="Email filing to SharePoint services in Birmingham. Automate email management and improve document organization."
            icon={<Mail size={32} />}
            benefits={[
                'Automate email filing and reduce manual effort',
                'Improve email searchability and retrieval',
                'Ensure compliance with retention policies',
                'Extract and apply metadata automatically',
                'Integrate seamlessly with Outlook',
                'Maintain email context and relationships'
            ]}
            features={[
                'Automated Email Filing',
                'Metadata Extraction',
                'Outlook Integration',
                'SharePoint Organization',
                'Bulk Email Migration',
                'Custom Filing Rules',
                'Attachment Handling',
                'Compliance Support'
            ]}
            imagePath="/images/automation-solutions.png"
        />
    )
}

export default EmailFiling
