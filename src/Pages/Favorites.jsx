import React, { useEffect, useState } from "react";
import PhoneCard from "../components/PhoneCard";
import { getFavorites, removeFavorite } from "../utils";

const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);

  useEffect(() => {
    const savedPhones = getFavorites();
    setDisplayPhones(savedPhones);
  }, []);


  const handleDelete =(id)=>{
    removeFavorite(id);
    setDisplayPhones(getFavorites())
  }
  return (
    <div className="py-12 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} handleDelete={handleDelete} deletable={true}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
