import './assets/css/index.css'
import {CardImage} from "./components/CardImage";

function App() {
    return (
        <div className={'w-screen flex justify-center flex-col'}>
            <div className={'bg-gray-100 p-4 flex justify-center'}>
                <h1 className={'text-3xl mb-3 w-full font-bold text-center text-gray-600 mt-8'}>Shopping cart</h1>
            </div>
            <div className={'flex justify-center w-full px-6 py-8 gap-10'}>
                <div
                    className={'flex rounded-2xl items-center min-w-[70%] flex-2 h-[600px] border-gray-[#dedede] border-[1px] px-8 flex-col py-8 min-h-screen'}>
                    <div className={'flex w-full '}>
                        <CardImage/>
                        <div className={'flex flex-col h-24'}>
                            <h2 className={'text-3xl font-medium ml-6 mt-3'}>Blue denim shirt</h2>
                        </div>
                    </div>
                </div>
                <div className={'flex rounded-2xl flex-1 h-[600px] border-[#dedede] border-[1px] px-8'}>
                    <h2 className={'text-2xl font-semibold mt-5'}>The total ammount</h2>
                </div>
            </div>

        </div>
    )
}

export default App
