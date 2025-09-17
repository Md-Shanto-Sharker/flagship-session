import React from 'react';
import Hero from '../components/Hero';
import PhoneContainers from '../components/PhoneContainers';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
const handleSearch = (e,text)=>{
    e.preventDefault();
    console.log(text);
}
    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
           <PhoneContainers phones={data}></PhoneContainers>
        </div>
    );
};

export default Home;