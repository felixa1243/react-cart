import React, {FunctionComponent} from "react";

type Props = {
    src: string
    alt?: string
}
export const CardImage: FunctionComponent<Props> = ({src, alt}) => {
    return (
        <div className={'flex justify-center items-center border-gray-400 bg-[#e4e4e4] p-2 rounded-lg max-w-[250px] xs:max-w-[180px]'}>
            <img src={src} className={'xs:w-[150px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px] lg:w-[200px] lg:h-[200px] object-contain'} alt={alt && alt}/>
        </div>
    )
}