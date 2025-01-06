import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
} from "@mui/material";

export default function Landing() {
    return (
        <Box>
            <h2>language quiz generator</h2>

            <Card>
                <CardContent>
                    <Box>
                        <Typography variant="h6" component="div">
                            Join a Game
                        </Typography>

                        <TextField
                            id="filled-basic"
                            label="Enter a game code..."
                            variant="filled"
                        />
                    </Box>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <Box>
                        <Typography variant="h6" component="div">
                            Create a Game
                        </Typography>

                        <Button>Sign in to create</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
