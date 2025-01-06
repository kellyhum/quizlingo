import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    IconButton,
    Stack,
} from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { QuizCardInterface } from "../types";

const QuizCard = ({
    title,
    numQuestions,
    date,
    numPlays,
    gameCode,
}: QuizCardInterface) => {
    return (
        <Card sx={{ mb: 5, px: 3, py: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>

                        <Typography color="text.secondary" variant="body2">
                            {numQuestions} questions | Created {date}
                        </Typography>

                        <Typography color="text.secondary" variant="body2">
                            {numPlays} plays
                        </Typography>

                        <Typography color="text" variant="body1" sx={{ mt: 2 }}>
                            Game Code: {gameCode}
                        </Typography>
                    </Box>

                    <Stack justifyContent="space-between">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <IconButton size="small" aria-label="edit">
                                <FaRegEdit />
                            </IconButton>

                            <IconButton size="small" aria-label="copy">
                                <MdContentCopy />
                            </IconButton>

                            <IconButton size="small" aria-label="delete">
                                <MdDeleteOutline />
                            </IconButton>
                        </Stack>
                        <Button variant="contained">Start Game</Button>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
};

export default QuizCard;