import './Costs.css';
import CostFilter from './CostFilter';
import CostItemList from './CostItemList';
import React, { useState } from 'react';

export default function Costs(props) {
  const [selectYear, setSelectYear] = useState('2022');

  const onChangeYear = (year) => {
    setSelectYear(year);
  }

  const filteredCosts = props.costs.filter((item) => {
      return item.date.includes(selectYear);
    })


  return(
    <div className='costs'>
       <CostFilter year={selectYear} onChangeYear={onChangeYear} />
       { filteredCosts.length === 0 ? 
       <p>В этом году расходов не было</p> : 
        filteredCosts.map((item) => {
          return <CostItemList props={item} key={item.id} />
        })
      }
     
    </div>
  )
}