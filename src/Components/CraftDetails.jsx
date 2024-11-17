import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const loddedCraft = useLoaderData();
    // console.log(loddedCraft)
    const { item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, image } = loddedCraft;


    return (
        <div className="my-5">


            <div className="card bg-base-100  shadow-xl">
                <figure><img className="h-[500px] w-full rounded-lg" src={image} alt="Resort" /></figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title lg:text-4xl text-2xl font-bold"></h2>
                    <p className="lg:text-3xl  font-semibold text-xl"></p>
                    <p className="font-medium text-base"><span className="font-bold lg:text-2xl text-xl">Item_name :</span> {item_name} </p>
                    <p><span className="font-bold lg:text-2xl text-xl">Subcategory_Name : </span> {subcategory_Name} </p>
                    <p><span className="font-bold lg:text-2xl text-xl">Description : </span> : {short_description} </p>

                    <p className="text-lg font-medium"><span className="font-bold lg:text-2xl text-xl">Customization : </span> {customization} </p>
                    <p className="text-lg font-medium"><span className="font-bold lg:text-2xl text-xl">Processing_time : </span> {processing_time} </p>
                    <p className="text-lg font-medium"><span className="font-bold lg:text-2xl text-xl">StockStatus : </span> {stockStatus} </p>
                    <p className="text-lg font-medium"><span className="font-bold lg:text-2xl text-xl">rating : </span> {rating}

                        <div className="rating rating-sm rating-half">
                            <input type="radio" name="rating-10" className="rating-hidden" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>
                    </p>
                    <p className="text-lg font-medium"><span className="font-bold lg:text-2xl text-xl">Price : </span> <span className="font-bold text-xl text-red-500">{price}</span> </p>




                    <div className="flex justify-between ">




                    </div>

                </div>
            </div>

        </div>


    );
};

export default CraftDetails;