import {Backdrop, CircularProgress} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";

export default function LoadingBackdrop() {

    const { isLoading } = useAuth0();

    return (
        <Backdrop open={isLoading} sx={{ backgroundColor: "#aaaaaa", backdropFilter: "blur" }}>
            <CircularProgress color="primary" />
        </Backdrop>
    )
}