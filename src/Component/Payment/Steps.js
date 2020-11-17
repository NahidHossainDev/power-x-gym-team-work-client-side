import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FourthPart from './FourthPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import {multiStepContext} from './StepContext';

const Steps = () => {

    const {currentStep,finalData} = useContext(multiStepContext)

    function showStep(step){
        switch(step){
            case 1:
                return   <SecondPart></SecondPart>
            case 2:
                 return  <ThirdPart></ThirdPart>
            case 3:
                 return   <FourthPart></FourthPart>
        }
    }
    return (
        <div>
         <Stepper  style={{width :'30%',marginLeft:'480px'}} activeStep={currentStep-1} orientation="horizontal">
       
          <Step>
            <StepLabel>Present Details</StepLabel>
          </Step>
          <Step >
            <StepLabel>Bank Payment</StepLabel>
          </Step>
          <Step >
            <StepLabel>Membership Created</StepLabel>
            
            
          </Step>
  
      </Stepper>
      {showStep(currentStep)}
        
            
           
        </div>
    );
};

export default Steps;