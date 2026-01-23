import { Grid, Card, CardContent, Stack, Typography, Chip, useTheme, CardActionArea, IconButton } from "@mui/material"
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { useState } from "react";
import type { Book } from "../../types/book";
import BookDetail from "../books/BookDetail";

interface Props {
  books: (Book | undefined)[],
}

const KitabMuthalaahCard = ({books}:Props) => {
  const [ open, setOpen ] = useState(false);
  const [ completed, setCompleted ] = useState(false);
  const theme = useTheme();
  return (
    <Grid container spacing={3}>
            <Grid size={{ xs:12, sm:6 }}>
              {books.map(book => (
                 <Card 
                  variant="outlined"
                  sx={{ 
                    position: "relative",
                    transition: "all .2s ease",
                    "&::after": completed 
                      ? {
                        content : '""',
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.35)",
                        pointerEvents: "none",
                      }
                      : {},
                  }}
                >
                <CardActionArea disableRipple onClick={()=>setOpen(true)}> 
                       <CardContent>
                          <Stack mb={2} direction={"row"} gap={1} alignItems={"flex-start"}  justifyContent={"space-between"}>
                              <Stack direction={"row"} gap={1} alignItems={"center"}>
                                <BookOutlinedIcon sx={{ color:theme.palette.teal[100]}} />
                              
                                  <Stack>
                                    <Typography fontWeight={600} sx={{ textDecoration : completed ? "line-through" : "none" }} >
                                      {book?.title}
                                    </Typography>
                                    <Typography color="text.secondary">
                                      {book?.titleArabic}
                                    </Typography>
                                  </Stack>
                              </Stack>

                              <IconButton 
                                  disableRipple
                                  onClick={() => setCompleted(!completed)}
                              >
                                { completed 
                                      ? <BookmarkOutlinedIcon sx={{ color:theme.palette.teal[100]}} />  
                                      : <BookmarkBorderOutlinedIcon sx={{ color:theme.palette.teal[100]}} /> 
                                      }
                              </IconButton>
                          </Stack>
                          
                          <Typography variant="body2" color="text.secondary">
                            {book?.description}
                          </Typography>

                          <Stack direction="row" justifyContent="space-between" mt={2}>
                              <Typography variant="caption" color="text.secondary">
                                {book?.author}
                              </Typography>
                              <Chip 
                                label={book?.type}
                                size="small" 
                                sx={{ borderRadius: "5px" }} 
                                />
                          </Stack>
                      </CardContent>
                </CardActionArea>
                <BookDetail book={book} open={open} onClose={()=>setOpen(false)}/>
              </Card>
              ))}
            </Grid>
            {/* lanjut sendiri */}
    </Grid>
  )
}

export default KitabMuthalaahCard