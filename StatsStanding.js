import React from "react";

const StatsStanding = (props) => {

render() {
    const {item} = props.data.content;

    return (
        <table style={{width: "100%"}}>
            <tbody>
            <tr>
                <td colSpan={4} style={{textAlign: "center", fontWeight: "bold"}}>{item.category}</td>
            </tr>
            <tr>
                <td colSpan={4}><br/></td>
            </tr>
            {item.ranking.map(i => (
                <tr key={i.rank}>
                    <td style={{fontSize: "24px"}}><b>{i.rank}</b></td>
                    <td><img style={{height: "50px"}} src={i.headshot || i.logo}  alt={`logo`}/> </td>
                    <td><b>{i.player ? `${i.player} (${i.team})` : i.team}</b></td>
                    <td style={{fontSize: "18px"}}>{i.points || i.goals}</td>
                </tr>
            ))}

            <tr>
                <td colSpan={4} style={{textAlign: "center"}}>
                    <a target='_blank' href={item.cta}>Click here for a complete overview</a>
                </td>
            </tr>
            </tbody>
        </table>
    )
}        
};


export default StatsStanding;