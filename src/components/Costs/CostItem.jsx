import CostData from './CostDate';
import './CostItem.css';

export default function CostItem({props}) {

    return (
        <div className='cost-item'>
            <CostData date={props.date}/>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>{props.amount} rub</div>
            </div>
        </div>
    )
}