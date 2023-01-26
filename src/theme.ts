import {extendTheme} from "@mui/joy";

const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    surface: "background.body"
                }
            }
        }
    }
});

export default theme;