import { useParams } from "react-router";
import { Box, Typography } from "@mui/material";

export default function Play() {
    let params = useParams();
    let quizId: string = params.quizId ?? "defaultId";

    return (
        <Box>
            this is the PLAY page that has active questions
            <Box>quiz id is: {quizId}</Box>
            <Typography variant="h6">Translate this sentence:</Typography>
            <Typography variant="body1">Sentence here</Typography>
            <Typography variant="body1">
                drag/drop, typing input here
            </Typography>
        </Box>
    );
}
