import React from 'react';
import {Box, Container, Grid, makeStyles, TextField, Typography} from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Button from "../../../n1-main/m1-ui/common/Button/Button";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "100vh"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));

const Registration = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xs" className={classes.container}>
            <Box height="100%" display="flex" mt={8} flexDirection="column" alignItems="center">
                <Box color="secondary">
                    <AssignmentIndIcon color="secondary" fontSize="large"/>
                </Box>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className={classes.submit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary">
                                Sign up
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}

export default Registration;
