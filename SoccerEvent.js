import React from "react";

const SoccerEvent = (props) => {
   render() { return (
        <div className={"soccer-event"}>
            <div className={"soccer-event__time"}>
                {props.data.content.time}
            </div>
            <div className={"soccer-event__type"}>
                {props.data.content.event_type}
            </div>
            <div className={"soccer-event__text"}>
                {props.data.content.text}
            </div>
        </div>
    );
};

export default SoccerEvent;