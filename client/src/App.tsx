import { BrowserRouter, Routes, Route } from "react-router";
import { Box } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Edit from "./pages/Edit";
import Play from "./pages/Play";

function App() {
    return (
        <Box fontFamily="Roboto" mx={20} my={10}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/edit/:quizId" element={<Edit />} />
                    <Route path="/play/:quizId" element={<Play />} />
                </Routes>
            </BrowserRouter>
        </Box>
    );
}

export default App;
