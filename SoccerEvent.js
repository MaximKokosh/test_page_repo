import React, { PureComponent } from "react";

export default class SoccerEvent extends PureComponent {
   render() { 
    const { content } = this.props.data.content;
    return (<div className={"soccer-event"}>
            <div className={"soccer-event__time"}>
                {content.time}
            </div>
            <div className={"soccer-event__type"}>
                {content.event_type}
            </div>
            <div className={"soccer-event__text"}>
                {content.text}
            </div>
        </div>);
  }
}