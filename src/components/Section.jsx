import { Link } from "react-router-dom";


const Section = () => {
    return (
        <div className="text-center space-y-3 mt-5">
            <p className="text-[#331A15]">--- Sip & Savor ---</p>
            <h3 className="text-[#331A15] text-5xl">Our Popular Products</h3>
            <Link className="btn btn-warning" to='/addcoffee'>Add Coffee</Link>
        </div>
    );
};

export default Section;