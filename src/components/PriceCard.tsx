export const PriceCard = () => {
    return <div
        className={"flex rounded-2xl flex-1 h-[450px] border-[#dedede] border-[1px] px-8 mx-8 flex-col shadow-lg shadow-gray-200"}>
        <h2 className={"text-3xl font-semibold mt-5"}>The total ammount</h2>
        <div className={"flex w-full mt-4 justify-center py-2 flex-col items-center"}>
            <div className={"grid grid-cols-2 gap-y-4 w-full px-2 items-center"}>
                <p className={"text-xl font-light text-left"}>Temporary Ammount</p>
                <p className={"text-xl font-semibold text-right self-end"}>$5.4</p>
                <p className={"text-xl font-light text-left"}>Shipping</p>
                <p className={"text-xl font-semibold text-right self-end"}>Gratis</p>
            </div>
            <span className={"bg-[#dedede] h-[1px] w-[95%] mt-6"}></span>
        </div>
    </div>;
}