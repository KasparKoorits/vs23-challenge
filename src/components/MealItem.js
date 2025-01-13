import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const MealItem = (props) => {
  const { dispatch } = useContext(CartContext);
  const imagePath = require(`../assets/${props.meal.image}`);

  const formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(props.meal.price);

  const addToCartHandler = () => {
    dispatch({ type: "ADD_ITEM", item: props.meal });
  };

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
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
