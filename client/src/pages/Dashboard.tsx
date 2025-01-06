import { Box, Button } from "@mui/material";
import QuizCard from "../components/quizCard";
import { QuizCardInterface } from "../types";
import { IoMdAdd } from "react-icons/io";

export default function Dashboard() {
    const testCards: QuizCardInterface[] = [
        {
            title: "test title",
            numQuestions: 4,
            date: "jan 5, 2025",
            numPlays: 1,
            gameCode: "abc123",
        },
        {
            title: "TEST 2",
            numQuestions: 8,
            date: "jan 6, 2025",
            numPlays: 2,
            gameCode: "abcdef123",
        },
        {
            title: "testing 3",
            numQuestions: 12,
            date: "jan 7, 2025",
            numPlays: 3,
            gameCode: "abc123456",
        },
    ];

    return (
        <Box>
            <h1>My Quizzes</h1>
            {testCards.map((card) => (
                <QuizCard
                    title={card.title}
                    numQuestions={card.numQuestions}
                    date={card.date}
                    numPlays={card.numPlays}
                    gameCode={card.gameCode}
                />
            ))}
            <Button startIcon={<IoMdAdd />}>Create a new quiz</Button>
        </Box>
    );
}
