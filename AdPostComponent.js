import React from "react"
import {getAdvertisementImage} from "../widget-utils/utils";

export function AdPostComponent(props){
    const {publisher} = props.data.properties;

    return <div className={"advertisement"}>
        <img src={getAdvertisementImage(publisher)} className={"advertisement__image"} />
    </div>
}