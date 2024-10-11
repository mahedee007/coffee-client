
import logo from '../images/more/logo1.png'
const Navbar = () => {
    return (
        <div className='flex items-center justify-center bg-nav bg-no-repeat bg-cover'>
            <img className='w-[75px] h-[90px]' src={logo} alt="" />
            <h1 className='text-6xl text-white'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;