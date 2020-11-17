import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {multiStepContext }from './StepContext'
import MenuItem from '@material-ui/core/MenuItem';
const currencies = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  
  ];
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '60ch',
          
        },
    },
}));

const SecondPart = () => {
    const classes = useStyles();
    const { setStep, userData, setUserData} = useContext(multiStepContext)
    const [currency, setCurrency] = React.useState('EUR');
    return (
        <div style={{marginLeft: '200px'}}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" value={userData['firstname']} onChange={(e)=>setUserData({...setUserData,"firstname":e.target.value})} label="First Name"  variant="outlined"/>
                <TextField id="filled-basic" label="Last Name"  variant="outlined"/>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />


                <TextField
        id="date"
        label="Birthday"
        variant="outlined"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
              
              
                <TextField
          id="standard-select-currency"
          variant="outlined"
          select
          label="Gender"
          value={currency}
          onChange={(e)=>setUserData({...setUserData,"firstname":e.target.value})}
    
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        
                
                <TextField id="outlined-basic" label="Address Line 1" variant="outlined" />
                <TextField id="outlined-basic" label="Country/Region" variant="outlined" />
                <TextField id="outlined-basic" label="City" variant="outlined" />
                <TextField id="outlined-basic" label="Postcode" variant="outlined" />
                <br/>
                <Button variant="contained" onClick={()=>setStep(2)} color="primary">Next</Button>
            </form>
        </div>
    );
};

export default SecondPart;