import React, { useState } from 'react';
import Steps from './Steps';



export const multiStepContext = React.createContext()

const StepContext = () => {
    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setfinalData] = useState([])

    function submitData() {
        setfinalData(finalData=>[...finalData, userData])
        setUserData('')
        setStep(3)

    }
    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setfinalData, submitData }}>
           
                <Steps></Steps>
              

            </multiStepContext.Provider>

        </div>
    );
};

export default StepContext;