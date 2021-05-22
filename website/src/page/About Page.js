import React from "react";
import Navbar from "../components/NavBar";
import {
    Box,
    makeStyles,
    Grid,
    withStyles,
    Typography,
    Button,
    Container
} from "@material-ui/core";


const styles = makeStyles((theme) => ({
    innerContainer: {
        width: "95%",
        backgroundColor: theme.palette.primary.main,
        margin: "0px 2%",
        boxSizing: "border-box",
    },
    creative: {
        color: "black",
        fontFamily: "Inter",
        fontSize: "56px",
        fontWeight: "medium",
    },
    solutions: {
        color: theme.palette.secondary.main,
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "80px",
    },
    body: {
        fontFamily: "Inter",
        fontWeight: "light",
        fontSize: "24px",
    },
}));

const StyledButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        width: "50%",
    },
    label: {
        textTransform: "capitalize",
        fontSize: "24px",
    },
}))(Button);

const Landing = () => {
    const classes = styles();
    return (
        <>
            <Navbar />
            <Container
                display="flex"
                style={{
                    height: "90vh",
                    alignItems: "center",
                }}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    style={{ justifyContent: "space-between" }}
                    className={classes.innerContainer}
                >
                    <Grid item>
                        <img
                            src="https://res.cloudinary.com/dtkgfy2wk/image/upload/v1620962204/picture_pqypsw.svg"
                            style={{ height: "75%" }}
                            alt=""
                        ></img>
                    </Grid>

                    <Grid item >
                        <Box display="flex">
                            <Typography className={classes.predictor} color="secondary">
                                Live Trades
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Landing;
