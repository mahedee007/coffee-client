import { useEffect, useState } from "react";
import Feature from "./Feature";


const Features = () => {
const [features, setFeatures] = useState([])

useEffect(()=>{
    fetch('features.json')
    .then(res=>res.json())
    .then(data=>setFeatures(data))
},[])

    return (
        <div className="bg-[#ECEAE3] py-5 ">
           <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
           {
                features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
            }
           </div>
        </div>
    );
};

export default Features;