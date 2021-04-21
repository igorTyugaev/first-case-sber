
const offerActionBtnsStyle = {
    main: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",

        "@media (max-width: 642px)": {
            flexDirection: "row",
        },
    },

    btn: {
        width: "100%",

        "@media (max-width: 642px)": {
            width: "50%",
        },
    },
};

export default offerActionBtnsStyle;
