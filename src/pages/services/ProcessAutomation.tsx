import ServicePage from '../../components/ServicePage'
import { Zap } from 'lucide-react'

const ProcessAutomation = () => {
    return (
        <ServicePage
            title="Process Automation"
            description="Intelligent automation solutions that streamline operations and boost efficiency. Automate repetitive tasks and focus on what matters most."
            metaDescription="Business process automation services in Birmingham. RPA, workflow automation, and intelligent process optimization."
            icon={<Zap size={32} />}
            benefits={[
                'Reduce operational costs by up to 60%',
                'Eliminate human error in repetitive tasks',
                'Improve process speed and efficiency',
                'Free up staff for higher-value work',
                'Ensure consistency and compliance',
                'Scale operations without adding headcount'
            ]}
            features={[
                'Workflow Automation',
                'Robotic Process Automation (RPA)',
                'Process Mining & Optimization',
                'Integration Services',
                'Document Processing',
                'Task Automation',
                'Business Rules Engine',
                'Monitoring & Analytics'
            ]}
            imagePath="/images/automation-workflow.png"
        />
    )
}

export default ProcessAutomation
