import { addToCart } from "@/app/redux/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface ProductProps {
  title: string;
  id: number;
  images: any;
  price: number;
  quantity: number;
}

const Product: React.FC<ProductProps> = ({
  title,
  id,
  images,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <div className=" mt-3 w-52 ">
      <div className=" flex flex-col gap-y-3 shadow-md px-3 py-3 rounded-md">
        <p className=" text-xl font-semibold">{title}</p>

        <div className="relative" style={{ width: "100%", height: "230px" }}>
          <Image
            layout="fill" // Fill the parent container
            objectFit="cover" // Cover the container maintaining aspect ratio
            src={images}
            alt="product-photo"
          />
        </div>
        <p className=" font-semibold text-red-600">
          Price: <span className=" text-black font-normal">{price} ৳</span>
        </p>
        <button
          onClick={() =>
            dispatch(addToCart({ title, id, images, price, quantity }))
          }
          className=" bg-yellow-500 px-3 py-1 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
