import { Link } from "react-router-dom";
import classes from "./Products.module.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autemitaque fuga deserunt ab aliquid quas ducimus porro nemo dictaerror vitae, provident praesentium modi? Architecto omnisrendis temporibus vitae soluta?",
    },
    {
      id: 2,
      name: "Business Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autemitaque fuga deserunt ab aliquid quas ducimus porro nemo dictaerror vitae, provident praesentium modi? Architecto omnisrendis temporibus vitae soluta?",
    },
  ];
  const renderProducts = products.map((product) => {
    return (
      <li key={product.id}>
        <Link to={"/products/" + product.description}>
          <h1 className={classes["product-header"]}>{product.name}</h1>
        </Link>
        <p className={classes["product-description"]}>{product.description}</p>
      </li>
    );
  });
  return (
    <main className={classes.products}>
      <h1>Products</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione culpa
        autem non eveniet dolorem facere. Maxime necessitatibus omnis asperiores
        eius sed vitae, accusamus hic amet eligendi, veritatis repudiandae,
        animi exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Porro vel fuga tenetur perspiciatis. Quia cupiditate, ut accusamus
        dolorem voluptates quidem necessitatibus dicta error, aut facilis optio
        tempore, accusantium vero cum!
      </p>
      <div className={classes["products-container"]}>
        <ul>{renderProducts}</ul>
      </div>
    </main>
  );
};

export default Products;
