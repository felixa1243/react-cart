import React, {FunctionComponent, ReactNode} from "react";
type Props = {
    children:ReactNode,
    className?:string,
    onClick?:(e?:React.MouseEvent<HTMLElement>)=>any
}
export const Card: FunctionComponent<Props> = ({children,className,onClick})=>{
    return (
        <div className={'flex rounded-lg flex-1 border-[#dedede] border-[1px] px-8 mx-8 flex-row shadow-lg shadow-gray-200 p-7 shadow-lg shadow-gray-200 '+className} onClick={onClick}>
            {children}
        </div>
    )
}