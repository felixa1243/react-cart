import './assets/css/index.css'
import {ProductsList} from "./components/ProductsList";
import {PriceCard} from "./components/PriceCard";
import {Card} from "./components/Card";
import {AiFillCaretDown} from "react-icons/all";
import {useState} from "react";

function App() {
    const [isActive, setActive] = useState<boolean>(false)
    return (
        <div className={'w-screen flex justify-center flex-col'}>
            {/*header*/}
            <div className={'bg-gray-100 p-4 flex justify-center'}>
                <h1 className={'text-2xl mb-3 w-full font-bold text-center text-gray-600 mt-8'}>Shopping cart</h1>
            </div>

            <div
                className={'flex justify-center xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row w-full px-6 py-8 gap-4'}>
                <div
                    className={"flex w-full h-full border-2 lg:px-6 rounded-2xl shadow-lg shadow-gray-200"}>
                    <ProductsList/>
                </div>
                <div className={"flex flex-col sm:mt-4 sm:w-full lg:w-[50%] lg:h-[100px]"}>
                    <PriceCard/>
                    <Card className={'mt-6 flex-col ease-in-out duration-500'} onClick={() => setActive(!isActive)}>
                        <div
                            className={'flex justify-between select-none'
                            }>
                            <p>Add discount (optional)</p>
                            <AiFillCaretDown className={'self-end'}/>
                        </div>
                        {isActive && (<input type={'text'}
                                             className={'mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ease-in-out duration-1'}/>)}
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default App
