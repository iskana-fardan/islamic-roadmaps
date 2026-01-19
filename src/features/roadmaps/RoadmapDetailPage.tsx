import { Box } from '@mui/material'
import RoadmapHeader from './RoadmapHeader'
import RoadmapUsageInfo from './RoadmapUsageInfo'
import KitabPelajaranSection from './KitabDarsSection'
import KitabMuthalaahSection from './KitabMuthalaahSection'

const RoadmapDetailPage = () => {
  return (
    <Box component="main">
        <RoadmapHeader/>
        <RoadmapUsageInfo/>
        <KitabPelajaranSection/>
        <KitabMuthalaahSection/>
    </Box>
  )
}

export default RoadmapDetailPage