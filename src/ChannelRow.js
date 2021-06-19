import React from 'react'
import "./ChannelRow.css"
import {Avatar} from "@material-ui/core"
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined"

function ChannelRow(
    {image,channel,subs,noOfVideos,description,verified}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRowLogo"
            alt={channel} src={image}/>
            <div className="channelRowText">
                <h4>
                    {channel} {verified && <VerifiedIcon/>}
                </h4>
                <p>
                    {subs} subscribers + {noOfVideos} videos
                </p>
                <p>
                    {description}
                </p>

            </div>

            
        </div>
    )
}

export default ChannelRow
