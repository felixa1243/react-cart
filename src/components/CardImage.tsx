import React, {FunctionComponent} from "react";

type Props = {
    src: string
    alt?: string
}
export const CardImage: FunctionComponent<Props> = ({src, alt}) => {
    return (
        <div className={'flex justify-center items-center border-gray-400 bg-[#e4e4e4] p-2 rounded-lg sm:max-w-[180px] lg:max-h-[250px] lg:max-w-[250px] xs:w-full '}>
            <img src={src} className={'xs:max-w-[200px] sm:w-[100px] sm:h-[100px] md:w-[200px] lg:w-[200px] lg:h-[200px] object-contain'} alt={alt && alt}/>
        </div>
    )
}