import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
//    const { totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (newBudget > 20000) {
            alert("Do I look like I'm made out of money?!?!?!  Budget cannot exceed $20,000.  Please pick a lower number.");
//        } else if (newBudget < totalExpenses ) {
//            alert("Woah, rockstar!  You already spent that!  Please raise your budget.");
        } else {
            return;
        }
    }; 
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;