import { Button, TextField } from "@material-ui/core";
import {makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        maxWidth:345,
    }
});
const EditProfile = () => {
const classes = useStyles();
    return (
        <div>
            <h1>Welcome to Ping2! Let's make your profile. </h1>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Location" variant="outlined" />
            <TextField id="outlined-basic" label="Birthday" variant="outlined" />
            </form> 

            <form className={classes.container} noValidate>
            <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2069-04-01"
            className={classes.textField}
            InputLabelProps={{shrink: true}}/>
            </form>

            <h2>My interests:</h2>
            
            <Button> Continue</Button>
        </div>
    )
}

export default EditProfile;