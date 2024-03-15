const Card = (props) => {

    const colour = (props.type === '♣' || props.type === '♠') ? 'black' : 'red'

  return (
    <div className="card">
      {props.number && <p className="number" style={{color : colour}}>{props.number}</p>}
      {props.type && <p className="type" style={{color : colour}}>{props.type}</p>}
      {props.message && <p className="message" onClick={props.onclick}>{props.message}</p>}

    </div>
  );
};

export default Card;
