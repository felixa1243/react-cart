import {FunctionComponent} from "react";
import {CardImage} from "./CardImage";
import {AiFillHeart, FaTrash} from "react-icons/all";
import {addQty, getProducts} from "../app/feat/cart.slice";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../app/hooks/hooks";

export const ProductsList: FunctionComponent = () => {
    const selector = useSelector
    const products = selector(getProducts)
    const dispatch = useAppDispatch()
    return (
        <div className={"flex min-h-full flex-col p-10"}>
            <h2 className={'text-3xl mb-4'}>Cart ({products.length}) items</h2>
            {
                products.map((product, i) => (
                    <div key={i} className={'flex max-w-full mt-6 max-h-full'}>
                        <div
                            className={'flex min-w-full flex-row xs:flex-col sm:flex-col lg:flex-row ease-in-out duration-500'}>
                            <CardImage src={product.imagePath}/>
                            <div className={"grid-cols-2 min-h-full"}>
                                <h2 className={"text-3xl font-medium ml-6 mt-3"}>{product.productName}</h2>
                                <div className={"flex sm:flex-col"}>
                                    <h2 className={"text-xl text-gray-500 font-medium ml-6 mt-3"}>{product.productType}</h2>
                                    <h2 className={"text-xl text-gray-500 font-medium ml-6 mt-3"}>{product.productColor}</h2>
                                </div>
                                <div className={"flex"}>
                                    <h2 className={"text-xl text-gray-500 font-medium ml-6 mt-3"}>COLOR</h2>
                                    <h2 className={"text-xl text-gray-500 font-medium ml-6 mt-3"}>{product.productColor}</h2>
                                </div>
                                <div className={"flex mt-6"}>
                                    <h2 className={"text-xl text-gray-500 font-medium ml-6 mt-3"}>SIZE</h2>
                                    <h2 className={"text-xl text-gray-500 font-medium ml-6 mt-3"}>{product.size}</h2>
                                </div>
                                <div className={"flex mt-6 gap-9"}>
                                    <h2 className={"text-xl text-gray-500 font-medium ml-6 mt-3 hover:text-red-600 hover:cursor-pointer"}>
                                        <FaTrash className={'inline-block h-full'}/> &nbsp;Remove item</h2>
                                    <h2 className={"text-xl text-gray-500 font-medium ml-6 mt-3 hover:text-pink-600 hover:cursor-pointer"}>
                                        <AiFillHeart className={'inline-block'}/> &nbsp;Move to wishlist</h2>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => {
                                    dispatch(addQty(product))
                                }}>add
                                </button>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
}