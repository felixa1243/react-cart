import React, {FunctionComponent} from "react";
import bluedenim from '../assets/bluedenim.png'

type Props = {
    child?: React.ReactNode
}
export const CardImage: FunctionComponent<Props> = ({child}) => {
    return (
        <div className={'w-[450px] h-[450px] border-gray-400 bg-gray-100 flex items-center justify-center rounded-2xl'}>
            <img src={bluedenim} className={'h-[70%] object-cover'}/>
        </div>
    )
}