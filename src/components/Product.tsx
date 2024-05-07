import { addToCart } from "@/app/redux/cartSlice";
import { useDispatch } from "react-redux";

interface ProductProps {
  title: string;
  id: number;
}

const Product: React.FC<ProductProps> = ({ title, id }) => {
  const dispatch = useDispatch();
  return (
    <div className=" mt-3 w-52">
      <div className=" bg-gray-200 shadow-md px-3 py-1 rounded-md">
        <p>{title}</p>
        <button
          onClick={() => dispatch(addToCart({ title, id }))}
          className=" bg-yellow-500 px-3 py-1 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
