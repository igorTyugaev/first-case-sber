import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const userCardStyle = {
    body: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },

    profile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",

        "& img": {
            display: "block",
            maxWidth: "160px",
            width: "100%",
        }
    },

    name: {
        textAlign: "center",
    },

    ...imagesStyle,
    imgBody: {
        display: "block"
    },
};

export default userCardStyle;
