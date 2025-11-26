import ServicePage from '../../components/ServicePage'
import { Database } from 'lucide-react'

const DataEngineering = () => {
    return (
        <ServicePage
            title="Data Engineering"
            description="Build robust data pipelines and infrastructure for scalable AI solutions. Modern data architecture that grows with your business."
            metaDescription="Data engineering services in Birmingham. Build scalable data pipelines, ETL processes, and modern data infrastructure."
            icon={<Database size={32} />}
            benefits={[
                'Build scalable data infrastructure',
                'Improve data quality and reliability',
                'Enable real-time data processing',
                'Reduce data processing costs',
                'Support advanced analytics and AI',
                'Ensure data governance and security'
            ]}
            features={[
                'Data Pipeline Design',
                'ETL/ELT Development',
                'Cloud Data Platforms',
                'Data Lake Architecture',
                'Stream Processing',
                'Data Quality Management',
                'Data Governance',
                'Performance Optimization'
            ]}
            imagePath="/images/data-pipeline.png"
        />
    )
}

export default DataEngineering
