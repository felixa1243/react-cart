import './assets/css/index.css'
import {ProductsList} from "./components/ProductsList";
import {PriceCard} from "./components/PriceCard";
import {useState} from "react";
import {Product} from "./types/product";

function App() {
    const [products, setProducts] = useState<Product[]>([])
    return (
        <div className={'w-screen flex justify-center flex-col'}>
            <div className={'bg-gray-100 p-4 flex justify-center'}>
                <h1 className={'text-3xl mb-3 w-full font-bold text-center text-gray-600 mt-8'}>Shopping cart</h1>
            </div>
            <div className={'flex justify-center w-full xs:flex-col sm:flex-col md:flex-row px-6 py-8 gap-4'}>
                <div
                    className={"flex sm:min-w-full lg:min-w-[80%] h-full border-2 lg:px-6 rounded-2xl w-[80%] shadow-lg shadow-gray-200 "}>
                    <ProductsList/>
                </div>
                <div className={"flex flex-col h-[50%] sm:w-full sm:mt-4"}>
                    <PriceCard/>
                </div>
            </div>
        </div>
    )
}

export default App
