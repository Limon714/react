const todoSub = "First App";

function Card(props) {
  return  <div className='card'>
      <h3>{todoSub}</h3>
      <h3>{props.titleText}</h3>
    </div>
}

export default Card;