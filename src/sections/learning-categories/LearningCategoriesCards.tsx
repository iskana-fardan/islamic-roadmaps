import { Grid } from '@mui/material'
import LearningCategoriesCard from './LearningCategoriesCard'
import { fields } from '../../data/fields/fields'



const LearningCategoriesCards = () => {
  return (
    <Grid container spacing={3}>
          {fields.map(({ name, nameArabic, description, icon }, index) => {
            return (
                <Grid
                    key={index}
                    size={{ xs: 12, sm: 6 }} 
                    >
                        <LearningCategoriesCard 
                            name={name} 
                            nameArabic={nameArabic} 
                            description={description} 
                            icon={icon}
                            />
                </Grid>
                    )
            })}
    </Grid>
  )
}

export default LearningCategoriesCards