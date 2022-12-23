import './assets/css/index.css'
import {CardImage} from "./components/CardImage";
import {FunctionComponent} from "react";
import {ProductCard} from "./components/ProductCard";
import {PriceCard} from "./components/PriceCard";
import {productlist} from "./data/productlist";


function App() {
    return (
        <div className={'w-screen flex justify-center flex-col'}>
            <div className={'bg-gray-100 p-4 flex justify-center'}>
                <h1 className={'text-3xl mb-3 w-full font-bold text-center text-gray-600 mt-8'}>Shopping cart</h1>
            </div>

            <div className={'flex justify-center w-full px-6 py-8 gap-4'}>
                <div
                    className={'flex w-full border-2 px-6 rounded-2xl w-[80%] shadow-lg shadow-gray-200 flex-col'}>
                    {
                        productlist.map(e => (
                            <>
                                <ProductCard title={e.productName}/>
                                <span className={"bg-[#dedede] h-[1px] w-[95%] mt-3 rounded-lg"}></span>
                            </>
                        ))
                    }
                </div>
                <PriceCard/>
            </div>

        </div>
    )
}

export default App
