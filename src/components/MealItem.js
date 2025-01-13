const MealItem = (props) => {
  const imagePath = require(`../assets/${props.meal.image}`);

  const formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(props.meal.price);

  return (
    <li className="meal-item">
      <article>
        <img src={imagePath} alt={props.meal.name} />
        <div className="meal-item-description">
          <h3>{props.meal.name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
          <p>{props.meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <button>Add to Cart</button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
