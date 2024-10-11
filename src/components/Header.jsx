import React from 'react';

const Header = () => {
    return (
        <div className='bg-hero max-w-full h-[800px] bg-no-repeat bg-cover bg-center flex flex-wrap  justify-center justify-items-end content-end items-start flex-col space-y-5' >
            <h1 className='text-white text-[55px]'>Would you like a Cup of Delicious Coffee?</h1>
            <p className='text-white w-1/2 text-[18px] '>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='btn btn-warning text-white'>Learn More</button>
        </div>
    );
};

export default Header;