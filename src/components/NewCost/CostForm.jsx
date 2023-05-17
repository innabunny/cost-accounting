import React, { useState } from 'react';
import './CostForm.css';

export default function CostForm(props) {

  const [userInput, setUserInput] = useState({
    description: '',
    amount: '',
    date: ''
  })

  const descriptionChangeHandler = (event) => {
    setUserInput((previousState) => { 
      return {
      ...previousState,
      description: event.target.value
      }
    });
  }

  const amountChangeHandler = (event) => {
    setUserInput((previousState) => { 
      return {
      ...previousState,
      amount: event.target.value
      }
    });
  }
  const dateChangeHandler = (event) => {
    setUserInput((previousState) => { 
      return {
      ...previousState,
      date: event.target.value
      }
    });
  }

  const submitHandler = (evt) => {
    evt.preventDefault();
    const costData = {
      description: userInput.description,
      amount: userInput.amount,
      date: userInput.date
      // date: new Date(userInput.date).toLocaleDateString("ru-RU", {
      //   "year": 'numeric',
      //   "month": "numeric",
      //   "day": "2-digit"
      // })
    }
    props.onSaveCostData(costData); 

    setUserInput({
      description: '',
      amount: '',
      date: ''
    })
  }

  return(
    <form onSubmit={submitHandler} className='new-cost__form'>
        <div className='new-cost__controls'>
          <div className='new-cost__control'>
            <label>Название</label>
            <input type='text' value={userInput.description} onChange={descriptionChangeHandler}/>
          </div>
          <div className='new-cost__control'>
            <label>Цена</label>
            <input type='number' min='100' step='100' value={userInput.amount} onChange={amountChangeHandler}/>
          </div>
          <div className='new-cost__control'>
            <label>Дата</label>
            <input type='date' min='2019-01-01' step='2023-12-31' value={userInput.date} onChange={dateChangeHandler}/>
          </div>
          <div className='new-cost__actions'>
            <button type='submit'>Добавить расход</button>
            <button type='button' onClick={props.onCancel}>Отмена</button>
          </div>
        </div>
    </form>
  )
}