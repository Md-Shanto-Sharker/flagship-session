import { useState } from "react";
import Hero from "../components/Hero";
import PhoneContainers from "../components/PhoneContainers";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  
  const [phones, setPhones] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();

    const searchedPhones = data.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );

    setPhones(searchedPhones);
  };

  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>
      <PhoneContainers phones={phones}></PhoneContainers>
    </div>
  );
};

export default Home;
