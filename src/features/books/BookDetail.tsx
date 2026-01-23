import { Box, Button, Chip, Drawer, IconButton, Stack, Typography, useTheme } from "@mui/material"

import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import type { Book } from "../../types/book";


interface Props {
    book: (Book | undefined),
    open: boolean,
    onClose: () => void
}


const BookDetail = ({book,open, onClose}: Props) => {
    const theme = useTheme();
    return (
        <Drawer
            anchor="bottom"
            open={open}
            onClose={onClose}
        >
            <Box p={3} >
                {/* === Header ===*/}
                {/* === Header ===*/}
                {/* === Header ===*/}


                <Stack spacing={2}  mb={2} >
                    
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Stack spacing={1.5} direction={"row"}>
                            <Stack sx={{
                                // width: 44,
                                // height: 44,
                                p: 1,
                                borderRadius: "7px",
                                backgroundColor: "rgba(255,255,255,0.06)", // subtle
                                color: theme.palette.teal[200],
                                fontSize: "30px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                             <ImportContactsOutlinedIcon fontSize="inherit" />
                            </Stack>
                            
                            <Stack>
                                <Typography fontWeight={700}>
                                    {book?.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {book?.titleArabic}
                                </Typography>
                            </Stack>
                        </Stack>

                        <IconButton 
                            disableRipple
                            sx={{ fontSize: "16px", p: 0 }}
                            onClick={onClose}>
                            <CloseRoundedIcon fontSize="inherit"/>
                        </IconButton>
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        <Chip
                            sx={{ borderRadius: "7px" }}
                            label="Kitab Pelajaran"
                            size="small"
                            color="primary"
                        />
                        <Chip
                            icon={<SchoolOutlinedIcon fontSize="small"/>}
                            sx={{ borderRadius: "7px" }}
                            label="Dasar (Beginner)"
                            size="small"
                            variant="outlined"
                        />
                    </Stack>
                </Stack>


                {/* === Meta ===*/}
                {/* === Meta ===*/}
                {/* === Meta ===*/}
                <Stack spacing={1} mb={3}>
                    <Typography variant="caption" color="text.secondary">
                        Author
                    </Typography>
                    <Typography variant="body2">
                        {book?.author}
                    </Typography>
                </Stack>

                {/* === Description ===*/}
                {/* === Description ===*/}
                {/* === Description ===*/}
                 <Box mb={3}>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        gutterBottom
                    >
                        Description
                    </Typography>
                    <Typography variant="body2">
                        {book?.description}
                    </Typography>
                 </Box>


                {/* === Recommended Usage ===*/}
                {/* === Recommended Usage ===*/}
                {/* === Recommended Usage ===*/}
                 <Box mb={3}>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        gutterBottom
                    >
                        Recommended Usage
                    </Typography>
                    <Typography variant="body2">
                        {book?.recommendedUsage}
                    </Typography>
                 </Box>


                {/* === Recommended Editions ===*/}
                {/* === Recommended Editions ===*/}
                {/* === Recommended Editions ===*/}
                <Box mb={3}>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        gutterBottom
                    >
                        <VerifiedOutlinedIcon/>
                        Recommended Editions
                    </Typography>

                    <Stack spacing={1.5}>
                        {book?.recommendedEditions.map((ed, i) => (
                        <Box
                            key={i}
                            sx={{
                            p: 2,
                            borderRadius: 2,
                            border: "1px solid",
                            borderColor: "divider",
                            display: "flex",
                            justifyContent: "space-between",
                            }}
                        >
                            <Box>
                            <Typography variant="body2">
                                {ed.publisher}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                {ed.note}
                            </Typography>
                            </Box>

                            <Chip
                            size="small"
                            label={ed.publisher}
                            color={ed.label === "recommended" ? "primary" : "default"}
                            variant={ed.label === "recommended" ? "filled" : "outlined"}
                            />
                        </Box>
                        ))}
                    </Stack>
                </Box>
                
                {/* === Resources Sections ===*/}
                {/* === Resources Sections ===*/}
                {/* === Resources Sections ===*/}

                <Box>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        gutterBottom
                    >
                        Resources
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <Button size="small" variant="outlined">
                            PDF Version
                        </Button>
                        <Button size="small" variant="outlined">
                            Explanation Series
                        </Button>
                    </Stack>
                </Box>
            </Box>

        </Drawer>
    )
}

export default BookDetail