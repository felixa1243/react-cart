import React, {FunctionComponent} from "react";

type Props = {
    src: string
    alt?: string
}
export const CardImage: FunctionComponent<Props> = ({src, alt}) => {
    return (
        <div className={'border-gray-400 w-96 h-96 bg-[#e4e4e4] flex items-center justify-center rounded-2xl'}>
            <img src={src} className={'max-w-[70%] w-[70%]'} alt={alt && alt}/>
        </div>
    )
}