function ProductCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Ціна: {props.price} грн</p>
      <p>Категорія: {props.category}</p>
    </div>
  );
}

export default ProductCard;