import './NewCost.css';
import CostForm from './CostForm';

export default function NewCost(props) {

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.floor(Math.random() * 100)
    }
    props.onAddCost(costData);
  }

  const onAddCostHandler = (evt) => {
    evt.target.style.display = "none";
    
  }

  return(
    <div className='new-cost'>
      <button onClick={onAddCostHandler}>Добавить новый расход</button>
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  )
}