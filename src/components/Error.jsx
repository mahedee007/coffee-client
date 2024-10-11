
import { Link } from 'react-router-dom';
import error from '../images/404/404.gif'
import { Helmet } from 'react-helmet-async';
const Error = () => {
    return (

        
        <div className='flex flex-col justify-center items-center '>
            <Helmet>
                <title>404 | Page Not Found</title>
            </Helmet>
            <img src={error} alt="" />
            <Link className='text-4xl' to='/'>Back to Home</Link>
        </div>
    );
};

export default Error;