import React from "react";

const EmbedComponent = (props) => {
    return (
        <div className={"embed-comp"}>
           {props.data.content.embed-comp}
        </div>
    );
};

export default EmbedComponent;