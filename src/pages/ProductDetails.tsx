import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

export const ProductDetail = () => {
  const params = useParams();
  return (
    <main>
      <p>{params.id}</p>
    </main>
  );
};
