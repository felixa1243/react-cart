import {FunctionComponent, ReactNode} from "react";

type Props = {
    children: ReactNode,
    className?: string
}
export const ButtonGroup: FunctionComponent<Props> = ({children, className}) => {
    return (
        <div
            className={`flex rounded-md shadow-sm ${className && className}`} role={"group"}>
            {children}
        </div>
    )
}