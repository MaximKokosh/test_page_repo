import React from "react"

export const renderSponsor = (sponsor, sponsorLogos, children) => {
    if(!sponsor) return children;

    return <div>
        <div className={"sponsor-header"}>
            Sponsored by {sponsor}
        </div>
        <div>{children}</div>
    </div>
};