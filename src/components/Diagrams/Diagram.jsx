import './Diagram.css';
import DiagramBar from './DiagramBar';

export default function Diagram(props) {

  const dataSetsValues = props.dataSets.map((item) => {
    return item.value
  });

  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <div className='diagram'>
      {
        props.dataSets.map((dataSet) => {
          <DiagramBar 
          key={dataSet.id}
          value={dataSet.value} 
          maxValue={maxMonthCosts}
          label={dataSet.label}
          />
        })
      }
    </div>
  )
}