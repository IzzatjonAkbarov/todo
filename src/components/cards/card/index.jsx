import React, { useEffect, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
const ProductCard = ({
  title,
  price,
  description,
  category,
  image,
  rate,
  count,
}) => {
  let [like, setlike] = useState(false);

  return (
    <div>
      <div className="max-w-sm shadow-lg rounded-2xl overflow-hidden relative">
        <img
          src={image}
          alt={title}
          width={300}
          height={400}
          className="w-full h-64 object-contain"
        />
        <p className="absolute top-5 px-2 rounded-xl text-[13px] py-1 left-2 bg-blue-500 text-white">
          {category}
        </p>
        <p
          onClick={() => {
            setlike(!like);
          }}
          className="absolute top-5 right-5 text-2xl !text-blue-500">
          {!like ? <BiLike /> : <BiSolidLike />}
        </p>
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold text-gray-800 multi-line1">
            {title}
          </h2>
          <p className="text-sm text-gray-600 multi-line ">{description}</p>
          <div className="flex items-center space-x-2 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">{price}</span>
            <div className=" text-yellow-500 flex items-center ">
              <div className="ml-1 text-sm font-medium">{rate}</div>
              <div className="text-xs text-gray-500">({count})</div>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
