import {FunctionComponent} from "react";
import {CardImage} from "./CardImage";

type Props = {
    title: string
}
export const ProductCard: FunctionComponent<Props> = (props) => {
    return (
        <div className={"flex w-full my-6"}>
            <CardImage/>
            <div className={"flex flex-col h-24"}>
                <h2 className={"text-3xl font-medium ml-6 mt-3"}>{props.title}</h2>
            </div>
        </div>
    );
}