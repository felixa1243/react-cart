import {useSelector} from "react-redux";
import {getProducts} from "../app/feat/cart.slice";

export const PriceCard = () => {
    const priceList = useSelector(getProducts).map(o=>o.price*o.qty)
    const total = priceList.reduce((total,nextVal)=>total+nextVal)
    return <div
        className={"flex rounded-lg flex-1 border-[#dedede] border-[1px] px-8 mx-8 flex-col shadow-lg shadow-gray-200 p-7"}>
        <h2 className={"text-xl font-semibold mt-5"}>The total ammount</h2>
        <div className={"flex w-full mt-4 justify-center py-2 flex-col items-center"}>
            <div className={"grid grid-cols-2 gap-y-4 w-full px-2 items-center"}>
                <p className={"text-lg font-thin text-left"}>Temporary Amount</p>
                <p className={"text-lg font-semibold text-right self-end"}>${total}</p>
                <p className={"text-lg font-thin text-left"}>Shipping</p>
                <p className={"text-lg font-semibold text-right self-end"}>Gratis</p>
            </div>
            <span className={"bg-[#dedede] h-[1px] w-[95%] mt-6"}></span>
            <div className={"grid grid-cols-2 gap-y-4 py-2 items-center w-full mt-6"}>
                <p className={"text-lg text-gray-600 font-bold text-left"}>The total amount of (including VAT)</p>
                <p className={"text-lg font-bold text-right self-end"}>${total}</p>
            </div>
            <div className={'w-full'}>
                <button
                    className={'bg-[#006bed] hover:bg-[#0051b4] active:bg-[#1c50a3] text-white mt-5 p-5 text-lg rounded-2xl w-full mt-7]'}>GO
                    TO CHECKOUT
                </button>
            </div>
        </div>
    </div>;
}