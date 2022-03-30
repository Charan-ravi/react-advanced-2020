import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
      {/* <h4>single item</h4> */}
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: "dafault name",
//   price: 3.99,
//   image: defaultImage,
// };
export default Product;
