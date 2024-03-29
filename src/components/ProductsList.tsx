import {FunctionComponent} from "react";
import {CardImage} from "./CardImage";
import {AiFillHeart, FaTrash} from "react-icons/all";
import {addQty, decQty, getProducts, removeItem} from "../app/feat/cart.slice";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../app/hooks/hooks";
import {ButtonGroup} from "./ButtonGroup";

export const ProductsList: FunctionComponent = () => {
    const products = useSelector(getProducts)
    const dispatch = useAppDispatch()
    return (
        <div className={"flex flex-grow min-w-full flex-col p-10 items-start content-start"}>
            <h2 className={'text-xl mb-4'}>Cart ({products.length}) items</h2>
            {
                products.map((product, i) => (
                    <div key={i} className={'flex min-w-full mt-6 max-h-full md:flex-row xs:flex-col'}>
                        <div
                            className={'flex flex-row flex-2 sm:flex-col lg:flex-row ease-in-out duration-500'}>
                            <div>
                                <CardImage src={product.imagePath} alt={product.productName}/>
                            </div>
                            {/*left*/}
                            <div className={"grid-cols-2 min-h-full"}>
                                <h2 className={"text-base font-medium ml-6 mt-3"}>{product.productName}</h2>
                                <div className={"flex gap-2"}>
                                    <h2 className={"text-base text-gray-500 font-medium ml-6 mt-3"}>{product.productType}</h2>
                                    <h2 className={"text-base text-gray-500 font-medium mt-3"}>{product.productColor}</h2>
                                </div>
                                <div className={"flex gap-2"}>
                                    <h2 className={"text-base text-gray-500 font-medium ml-6 mt-3"}>Color</h2>
                                    <h2 className={"text-base text-gray-500 font-medium mt-3"}>{product.productColor}</h2>
                                </div>
                                <div className={"flex mt-3"}>
                                    <h2 className={"text-base text-gray-500 font-medium ml-6 mt-3"}>SIZE</h2>
                                    <h2 className={"text-base text-gray-500 font-medium ml-6 mt-3"}>{product.size}</h2>
                                </div>
                                <div className={"flex mt-5 xs:flex-col xs:mt-5 w-full"}>
                                    <h2 className={"text-sm text-gray-500 font-medium ml-6 mt-3 hover:text-red-600 hover:cursor-pointer"} onClick={()=>dispatch(removeItem(product))}>
                                        <FaTrash className={'inline-block h-full'}/> &nbsp;Remove item</h2>
                                    <h2 className={"text-sm text-gray-500 font-medium ml-6 mt-3 hover:text-pink-600 hover:cursor-pointer"}>
                                        <AiFillHeart className={'inline-block h-full'}/> &nbsp;Move to wishlist</h2>
                                </div>
                            </div>
                        </div>
                        {/*right*/}
                        <div className={'flex-1 flex flex-col items-end justify-between '}>
                            <div className={'flex flex-col items-center'}>
                                <ButtonGroup className={'mr-4 mt-8 h-[40px]'}>
                                    <button
                                        className={'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'}
                                        onClick={() => dispatch(addQty(product))
                                        }>+
                                    </button>
                                    <button type="button"
                                            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                        {product.qty}
                                    </button>
                                    <button
                                        className={'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'}
                                        onClick={() => dispatch(decQty(product))}
                                    >
                                        -
                                    </button>
                                </ButtonGroup>
                                {product.qty > 0 && (<p className={'text-center w-full text-xs mt-1 md:mr-4'}>Note,{product.qty} piece</p>)}
                            </div>
                            <div className={'mb-5'}>
                                <p className={"text-base text-gray-500 font-medium ml-6 mt-3"}>${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}