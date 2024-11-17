import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyArtAndCraftCard = ({ craft }) => {
    const { _id, item_name, price, rating, customization, stockStatus, image } = craft;




    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-side-drab.vercel.app/crafts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Craft has been deleted.",
                                icon: "success"
                            });
                            window.location.reload();
                            // const remaining = crafts.filter(craft => craft._id !== id);
                            // setCrafts(remaining);
                        }

                    })

            }
        });



    }


    return (


        <div className="mb-10">
            <div>
                <div className="hero mt-5 border-2 border-green-500 rounded-xl bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="">
                            <img src={image} className="lg:w-[270px] w-[500px] h-[270px] lg:h-[200px] rounded-lg shadow-2xl" />
                        </div>
                        <div className=" lg:w-[1000px]">
                            <h1 className="text-3xl font-bold">{item_name}</h1>
                            <p className="py-6"> </p>
                            <div className="lg:flex  gap-10">
                                <p className="flex gap-2 items-center"> <span className="font-bold">Price:</span> {price} $</p>
                                <p className="flex gap-2 items-center"> <span className="font-bold">Rating: </span>{rating}  </p>
                                <p> <span className="font-bold">Customaization: </span>{customization} </p>
                                <p> <span className="font-bold">Stock Status: </span>{stockStatus} </p>
                            </div>

                            <div className="lg:flex gap-8 justify-center md:flex md:gap-10 space-x-1 mt-5 ">
                                {/* <Link
                                    to={`/crafts/${_id}`}
                                    className="btn lg:w-[200px] w-40 bg-green-500 text-xl text-white"
                                >
                                    View Details
                                </Link> */}
                                <Link
                                    to={`/updateCraft/${_id}`}
                                    className="btn lg:w-[200px] w-20 bg-yellow-500 text-xl text-white">
                                    Update
                                </Link>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn lg:w-[200px] w-20 bg-red-500 text-xl text-white"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
MyArtAndCraftCard.propTypes = {
    craft: PropTypes.object,

}
export default MyArtAndCraftCard;