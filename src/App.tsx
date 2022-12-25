import './assets/css/index.css'
import {ProductsList} from "./components/ProductsList";
import {PriceCard} from "./components/PriceCard";

function App() {
    return (
        <div className={'w-screen flex justify-center flex-col'}>
            {/*header*/}
            <div className={'bg-gray-100 p-4 flex justify-center'}>
                <h1 className={'text-2xl mb-3 w-full font-bold text-center text-gray-600 mt-8'}>Shopping cart</h1>
            </div>

            <div className={'flex justify-center xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row w-full px-6 py-8 gap-4'}>
                <div
                    className={"flex w-full h-full border-2 lg:px-6 rounded-2xl shadow-lg shadow-gray-200"}>
                    <ProductsList/>
                </div>
                <div className={"flex flex-col sm:mt-4 sm:w-full lg:w-[50%] lg:h-[100px]"}>
                    <PriceCard/>
                </div>
            </div>
        </div>
    )
}

export default App
