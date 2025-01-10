import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
    textTransform: "none",
    backgroundColor: "#80C7B8",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#6AA699",
        boxShadow: "none",
    },
});

export default CustomButton;
