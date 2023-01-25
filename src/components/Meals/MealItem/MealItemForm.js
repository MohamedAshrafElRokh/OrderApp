import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef,useState } from 'react'

const MealIteamForm = (props) =>
{
     const amountInterdRef = useRef()
     const [amountIsValid,setAmountValid] = useState(true)
     const submitFormHandler = event =>
     {
        event.preventDefault()
         const enteredAmount = amountInterdRef.current.value;
         const enterdAmountNumber = +enteredAmount;
         
         if (enteredAmount.trim().length === 0 || enterdAmountNumber < 1 || enterdAmountNumber > 5 )
         {
             setAmountValid(false)
             return;
         }
         props.onAddItemToCart(enterdAmountNumber)
     }


     
    return <form className={classes.form} onSubmit={submitFormHandler}>
        <Input lable="Amount" ref = {amountInterdRef} 
        input = {{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}/>
    <button>+ Add</button>
    {!amountIsValid && <p>Please Enter a Valid Amount</p>}
         
</form>

}

export default MealIteamForm