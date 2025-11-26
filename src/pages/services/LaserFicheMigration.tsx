import ServicePage from '../../components/ServicePage'
import { Database } from 'lucide-react'

const LaserFicheMigration = () => {
    return (
        <ServicePage
            title="Laserfiche to SharePoint Migration"
            description="Seamless migration from Laserfiche to SharePoint with data integrity and minimal downtime. Expert planning and execution for successful transitions."
            metaDescription="Laserfiche to SharePoint migration services in Birmingham. Expert data migration with minimal downtime and full data integrity."
            icon={<Database size={32} />}
            benefits={[
                'Preserve all document metadata and relationships',
                'Minimize business disruption during migration',
                'Ensure data integrity and compliance',
                'Reduce long-term licensing costs',
                'Improve collaboration with SharePoint',
                'Leverage Microsoft 365 ecosystem'
            ]}
            features={[
                'Migration Planning & Assessment',
                'Data Mapping & Transformation',
                'Metadata Preservation',
                'User Training',
                'Testing & Validation',
                'Post-Migration Support',
                'Rollback Planning',
                'Performance Optimization'
            ]}
            imagePath="/images/data-pipeline.png"
        />
    )
}

export default LaserFicheMigration
