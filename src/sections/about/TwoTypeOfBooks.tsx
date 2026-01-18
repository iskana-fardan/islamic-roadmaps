import { AutoStoriesOutlined, MenuBookOutlined, type SvgIconComponent } from "@mui/icons-material"
import { Box, Card, CardContent, Grid, Stack, Typography, useTheme } from "@mui/material"


interface BookCard {
  title: string;
  description: string;
  highlight: string;
  lists: string[];
  icon: SvgIconComponent;
}


const cardItems: BookCard[] = [
  {
    title: "Kitab Pelajaran",
    highlight: "Study Books",
    description:
      "are the core curriculum texts that should be studied sequentially with a qualified teacher. They form the backbone of traditional Islamic education and are designed to build knowledge progressively from basic concepts to advanced discussions.",
    icon: MenuBookOutlined,
    lists: [
      "Study with a qualified teacher",
      "Follow the sequence: Dasar → Menengah → Lanjutan",
      "Master each level before proceeding",
    ],
  },
  {
    title: "Kitab Muthala'ah",
    highlight: "Reading & Enrichment Books",
    description:
      "are supplementary texts for expanding knowledge and gaining deeper insights. Unlike study books, these can be read independently and in any order based on interest and need.",
    icon: AutoStoriesOutlined,
    lists: [
      "Can be read independently",
      "No required sequence",
      "For insight and breadth of knowledge",
    ],
  },
];




const TwoTypeOfBooks = () => {
    const theme = useTheme();
    return (
        <Stack spacing={3} sx={{ mb:8 }}>
                    <Typography variant="h6"  fontWeight={600} color="text.primary">
                        Understanding the Two Types of Books
                    </Typography>
                    <Grid container spacing={3}>
                        {/* Kitab Pelajaran */}
                        {cardItems.map((item)=> {
                            const Icon = item.icon;
                            return (
                                <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                                    <Card variant="outlined" sx={{ height: "100%" }} >
                                        <CardContent> {/* for adjusting padding */}
                                            <Stack spacing={2}>
                                                {/* Header */}
                                                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                                    <Stack
                                                            alignItems="center"
                                                            justifyContent="center"
                                                            sx={{
                                                                width: 40,
                                                                height: 40,
                                                                borderRadius: "8px",
                                                                backgroundColor: "rgba(255,255,255,0.06)", // subtle
                                                                color: theme.palette.teal[200],
                                                            }}
                                                    >
                                                        <Icon fontSize="small"/>
                                                    </Stack>
                                                    <Typography fontWeight={600}>
                                                        {item.title}
                                                    </Typography>
                                                </Stack>

                                                {/* Description */}
                                                <Typography fontSize={12}>
                                                    <Typography
                                                        component={"span"}
                                                        color="text.primary"
                                                        fontWeight={600}
                                                    >
                                                        {item.highlight} {" "}
                                                    </Typography>

                                                    <Typography
                                                        component={"span"}
                                                        color="text.secondary"
                                                    >
                                                        {item.description}
                                                    </Typography>
                                                </Typography>

                                                {/* Lists */}
                                                <Stack 
                                                        spacing={1} 
                                                        sx={{
                                                            mt:{
                                                                xs: 5.8,
                                                                sm: 6,
                                                                md: 6.2,
                                                                lg: 6.4
                                                            },
                                                            px: 4,
                                    
                                                        }} 
                                                    >
                                                    {item.lists.map((listItem)=>(
                                                            <Stack
                                                                key={listItem}
                                                                direction={"row"}
                                                                alignItems={"center"}
                                                                spacing={1}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        width: 8,
                                                                        height: 8,
                                                                        borderRadius: "50%",
                                                                        backgroundColor : theme.palette.teal[100],
                                                                        transform: "translateY(-1.8px)"
                                                                    }}
                                                                />
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: 14,
                                                                        color: "text.secondary",
                                                                        
                                                                    }}
                                                                >
                                                                    {listItem}
                                                                </Typography>
                                                            </Stack>
                                                        ))}
                                                    </Stack>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        } )}
                    </Grid>
        </Stack>

)}

export default TwoTypeOfBooks

