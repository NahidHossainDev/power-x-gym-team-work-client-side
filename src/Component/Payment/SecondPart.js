import React, { useContext, useState } from 'react';
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
    const [info, setInfo] = useState([]);
    const { setStep, userData, setUserData} = useContext(multiStepContext)
    const [currency, setCurrency] = React.useState('EUR');
    const handleBlur = e => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
  }

  const handleSubmit = (e) => {
    const formData = new FormData()
    formData.append('fname', info.fname);
    formData.append('lname', info.lname);
    formData.append('email', info.email);
    formData.append('number', info.number);
    formData.append('date', info.date);
    formData.append('option', info.option);
    formData.append('address', info.address);
    formData.append('country', info.country);
    formData.append('city', info.city);
    formData.append('postcode', info.postcode);
   

    fetch('http://localhost:3000/adddata', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    e.preventDefault()
}
    return (
        <div style={{marginLeft: '200px'}}>
            <form className={classes.root} noValidate autoComplete="off"  onSubmit={handleSubmit} >
                <TextField id="standard-basic" value={userData['firstname']} onChange={(e)=>setUserData({...setUserData,"firstname":e.target.value})} name="fname" label="First Name" onBlur={handleBlur} variant="outlined"/>
                <TextField id="filled-basic" value={userData['lastname']} onChange={(e)=>setUserData({...setUserData,"lasttname":e.target.value})}  name="lname" label="Last Name" onBlur={handleBlur} variant="outlined"/>
                <TextField id="outlined-basic" value={userData['email']} onChange={(e)=>setUserData({...setUserData,"email":e.target.value})}  name="email" label="Email" onBlur={handleBlur} variant="outlined" />
                <TextField id="outlined-basic" value={userData['number']} onChange={(e)=>setUserData({...setUserData,"number":e.target.value})}  name="number" label="Mobile Number" onBlur={handleBlur} variant="outlined" />


                <TextField
        id="date"
        label="Birthday"
        variant="outlined"
        value={userData['date']}
         onChange={(e)=>setUserData({...setUserData,"date":e.target.value})}
        type="date"
        name="date"
        defaultValue="2017-05-24"
        onBlur={handleBlur}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
              
              
                <TextField
          id="standard-select-currency"
          variant="outlined"
          value={userData['option']} 
          onChange={(e)=>setUserData({...setUserData,"option":e.target.value})}
          select
          label="Gender"
          name="option"
          value={currency}
          onBlur={handleBlur}
          onChange={(e)=>setUserData({...setUserData,"firstname":e.target.value})}
    
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        
                
                <TextField id="outlined-basic" value={userData['address']} onChange={(e)=>setUserData({...setUserData,"address":e.target.value})} name="address" label="Address Line 1" onBlur={handleBlur} variant="outlined" />
                <TextField id="outlined-basic" value={userData['country']} onChange={(e)=>setUserData({...setUserData,"country":e.target.value})} name="country" label="Country/Region" onBlur={handleBlur} variant="outlined" />
                <TextField id="outlined-basic" value={userData['city']} onChange={(e)=>setUserData({...setUserData,"city":e.target.value})} name="city" label="City" onBlur={handleBlur} variant="outlined" />
                <TextField id="outlined-basic" value={userData['postcode']} onChange={(e)=>setUserData({...setUserData,"postcode":e.target.value})} name="postcode" label="Postcode"  onBlur={handleBlur} variant="outlined" />
                <br/>
                <Button type="submit" variant="contained" onClick={()=>setStep(2)} color="primary">Next</Button>
            </form>
        </div>
    );
};

export default SecondPart;