import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { multiStepContext } from './StepContext'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


import SplitCardForm from './SplitCardForm';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
}));

const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

const ThirdPart = () => {
    const classes = useStyles();
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext)
    return (
        <div style={{ marginLeft: '200px'}}>
            2nd Step
                     <div style={{ border:'1px solid black',marginBottom:'50px',height:'380px'}}>
                     <Elements stripe={stripePromise}>
                      <SplitCardForm></SplitCardForm>
                     </Elements>
                     </div>
             

                <div style={{border:'1px solid black',height:'170px'}}>
                <input type="radio" name="Paypal" id=""/> Paypal <img style={{marginLeft:'500px'}} src="" alt="PAYPAL"/>
                <br/>
                <br/>
               <small style={{marginLeft:'50px'}}>you will redirected to paypal website to complete your purchase</small>
               
                </div>
                <br />

                <Button variant="contained" onClick={() => setStep(1)} color="secondary">Back</Button>
                <Button variant="contained" onClick={submitData} color="primary">Submit</Button>
            

        </div>
    );
};

export default ThirdPart;