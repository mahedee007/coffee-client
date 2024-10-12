
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet-async';

const AddCoffee = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, chef, supplier, category, taste, details, photo}
        

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
         .then(res => res.json())
         .then(data => console.log(data))


    
    }
    return (
      <>
      <Helmet>
        <title>Add Coffee</title>
      </Helmet>
       <Navbar/>

      <div>
      <Link to='/'>Back To Home</Link>
	    <form  onSubmit={handleSubmit} className="container flex flex-col mx-auto p-10 bg-[#F4F3F0] space-y-12">
		
			
			<div className="w-3/4 mx-auto grid grid-cols-2 gap-4  ">
				<div className=" ">
					<label htmlFor="firstname" className="text-sm">Name</label>
					<input  type="text" name='name' placeholder="First name" className="w-full rounded-md p-2 " />
				</div>
				<div className=" ">
					<label htmlFor="lastname" className="text-sm">Chef</label>
					<input  type="text" name='chef' placeholder="Chef" className="w-full rounded-md p-2  " />
				</div>
				<div className=" ">
					<label htmlFor="firstname" className="text-sm">Supplier</label>
					<input  type="text" name='supplier' placeholder="saupplier" className="w-full rounded-md p-2 " />
				</div>
				<div className=" ">
					<label htmlFor="lastname" className="text-sm">Category</label>
					<input  type="text" name='category' placeholder="category" className="w-full rounded-md p-2  " />
				</div>
				<div className=" ">
					<label htmlFor="firstname" className="text-sm">Taste</label>
					<input  type="text" name='taste' placeholder="taste" className="w-full rounded-md p-2 " />
				</div>
				<div className=" ">
					<label htmlFor="lastname" className="text-sm">Details</label>
					<input  type="text" name='details' placeholder="details" className="w-full rounded-md p-2  " />
				</div>
				<div className="col-span-full ">
					<label htmlFor="lastname" className="text-sm">Photo URL</label>
					<input  type="text" name='photo' placeholder="photo url" className="w-full rounded-md p-2  " />
				</div>

                <input className='btn btn-warning text-white col-span-full text-2xl' type="submit" value="Add Coffee" />
			
				
			</div>
		
		
	</form>
      </div>
      </>

    );
};

export default AddCoffee;