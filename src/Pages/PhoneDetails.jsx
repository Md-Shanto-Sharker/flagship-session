import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { MdBookmarkAdd, MdShoppingCartCheckout } from "react-icons/md";
import { addFavorite } from "../utils";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  const { name, image } = singlePhone || {};

  const handleFavorite = () => {
    addFavorite(singlePhone);
  };

  return (
    <div className="w-full py-12">
      <img src={image} alt="" className="w-full mx-auto md:w-auto mb-8" />

      {/* Title and buttons */}
      <div className="flex justify-between">
        <h1 className="text-6xl font-thin mb-8">{name}</h1>
        <div className="flex space-x-4">
          <Button label={<MdShoppingCartCheckout />}></Button>
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />}></Button>
        </div>
      </div>

      {/* Details */}
      <div></div>
    </div>
  );
};

export default PhoneDetails;
