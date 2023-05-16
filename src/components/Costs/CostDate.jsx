import './CostDate.css';

export default function CostData(props) {
  const year = new Date(props.date).getFullYear();
  const month = new Date(props.date).toLocaleString("ru-RU", {month: 'long'});
  const day = new Date(props.date).toLocaleString("ru-RU", {day: "2-digit"});
  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  )
}