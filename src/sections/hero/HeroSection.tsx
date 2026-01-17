import { Box, Button, Container, IconButton, Stack, Typography, useTheme } from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const HeroSection = () => {
  const theme = useTheme();
  return (
    <Box
        component={'section'}
        sx={{
            width: "100vw",
            minHeight: {
                xs:"77vh",
                md: "88vh"
            },
            display: "flex",
            alignItems:"center",
            backgroundColor: theme.palette.background.default,
            
        }}
    >
        {/* Wrapper for all contents */}
        <Container 
            maxWidth="lg" 
            sx={{ 
                width: "100%",
                mt:7
                
            }}>
          
            <Stack>
               {/* Title and subtitle */}
               <Stack
                    spacing={{
                        xs:1.8,
                        md: 2
                    }}
                    alignItems={'center'}
                    textAlign={'center'}
               >
                    {/* Title */}
                    <Typography
                        component={'h1'}
                        sx={{
                            fontWeight: 800,
                            lineHeight: 1.1,
                            fontSize: {
                                xs: "1.9rem",
                                sm: "2.3rem",
                                md: "3.1rem",
                                lg: "4rem"
                            },
                            wordSpacing: "-0.15em",
                            letterSpacing: "-0.01em",
                            color: "text.primary"
                        }}
                    >
                        Islamic Learning Roadmaps
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                        sx={{
                            maxWidth: {
                                xs:400,
                                sm:550,
                                md: 670
                            },
                            fontSize: {
                                xs: "1rem",
                                sm: "1.2rem",
                                md: "1.4rem"
                            },
                            color: "text.secondary",
                            lineHeight: {
                                md:1.3
                            }

                            
                        }}
                    >
                        Structured study paths and classical reading recommendations
                        for Islamic sciences
                    </Typography>
               </Stack>


                {/* CTA Buttons */}
                <Stack
                    spacing={1.5}
                    sx={{
                        width: "100%",
                        marginTop: 5,
                        justifyContent: "center"
                    }}
                    direction={{
                        xs: "column",
                        sm: "row"
                    }}
                >
                    <Button 
                        size="medium"
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            borderRadius: '5px',
                            color: "text.primary",
                            py:1,
                            px: 4,
                            display: "flex",
                            gap: 1,
                            justifyContent: "center",
                            alignItems:"center",
                            backgroundColor: theme.palette.teal[100]
                        }}
                    >
                        Explore Learning Paths
                        <IconButton disableRipple sx={{py:0}}>
                            <ArrowDownwardIcon sx={{fontSize: "17px"}} />
                        </IconButton>
                    </Button>
                    <Button 
                        size="medium" 
                        variant="outlined"  
                        sx={{
                            textTransform: "none",
                            borderRadius: '5px',
                            color: "text.primary",
                            border: `1px solid ${theme.palette.divider}`,
                            py:1,
                            px: 4,
                            "&:hover": {
                                border: `1px solid ${theme.palette.divider}`,
                            }
                        }}>
                        Learn More
                    </Button>
                </Stack>

                {/* Features */}
                <Stack 
                    spacing={2} 
                    sx={{
                        mt:{
                            xs: 5.8,
                            sm: 6,
                            md: 6.2,
                            lg: 6.4
                        },
                        alignItems: "center",
                        justifyContent: "center"
                    }} 
                    direction={"row"}>
                    {[
                        "10 Islamic Sciences",
                        "Curated Book Lists",
                        "Structured Paths"
                    ].map((item)=>(
                        <Stack
                            key={item}
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
                                    fontSize: "0.9rem",
                                    color: "text.secondary",
                                    
                                }}
                            >
                                {item}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Container>
    </Box>
  )
}

export default HeroSection