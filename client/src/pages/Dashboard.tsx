import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
import QuizCard from "../components/quizCard";
import { QuizCardInterface } from "../types";
import { IoMdAdd } from "react-icons/io";
import CustomButton from "../components/CustomButton";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { ref, onValue, push, set } from "firebase/database";

export default function Dashboard() {
    const [testData, setTestData] = useState<{
        [key: string]: QuizCardInterface; // index structure the type
    }>({});
    const [newQuizTitle, setNewQuizTitle] = useState<string>("");
    const [open, setOpen] = useState(false);

    const createNewQuiz = () => {
        const todaysDate = new Date();

        const quiz: QuizCardInterface = {
            title: newQuizTitle,
            questions: [],
            date: todaysDate.getDate().toString(),
            gameCode: Math.floor(Math.random() * 999999 + 10000).toString(),
        };

        console.log(quiz);

        const quizzesRef = ref(db, "quizzes");
        const makeNewQuiz = push(quizzesRef); // make new empty item in db

        set(makeNewQuiz, quiz).then(() => {
            console.log("quiz added to db");
        });

        setOpen(false);
    };

    const handleOpenQuizButton = () => {
        setOpen(true);
    };

    const handleCloseQuizButton = () => {
        setOpen(false);
    };

    // get the quizzes even on update
    useEffect(() => {
        const quizzesRef = ref(db, "quizzes");

        const getQuizzes = () => {
            onValue(quizzesRef, (snapshot) => {
                const data = snapshot.val();

                console.log("data");
                console.log(data);

                if (data) {
                    setTestData(data);
                }
            });
        };

        getQuizzes();
    }, []);

    return (
        <Box>
            <h1>My Quizzes</h1>
            {Object.keys(testData).length == 0 ? (
                <Box py={3}>your created quizzes will appear here</Box>
            ) : (
                Object.entries(testData).map(([key, value]) => (
                    <QuizCard
                        title={value.title}
                        questions={value.questions}
                        date={value.date}
                        gameCode={value.gameCode}
                    />
                ))
            )}
            <CustomButton
                startIcon={<IoMdAdd />}
                sx={{ backgroundColor: "#000" }}
                onClick={handleOpenQuizButton}
            >
                Create a new quiz
            </CustomButton>

            <Dialog open={open} onClose={handleCloseQuizButton}>
                <DialogTitle>Create New Quiz</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Quiz Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={newQuizTitle}
                        onChange={(e) => setNewQuizTitle(e.target.value)}
                    />
                </DialogContent>

                <DialogActions>
                    <CustomButton
                        sx={{ backgroundColor: "#000" }}
                        onClick={handleCloseQuizButton}
                    >
                        Cancel
                    </CustomButton>
                    <CustomButton
                        sx={{ backgroundColor: "#000" }}
                        variant="contained"
                        onClick={createNewQuiz}
                    >
                        {" "}
                        Create
                    </CustomButton>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
