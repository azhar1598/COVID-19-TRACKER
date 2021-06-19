import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import './VideoCard.css'

function VideoCard({image,avatar,title,channelImage,views,timestamp,channel}) {
    return (
        <div className="videoCard">

            <img src={image} className="videoCardThumbnail" alt=""/>
            <div className="videoCardInfo" >
                <Avatar className="videoCardAvatar" alt={channelImage} src={avatar}/>
                <div className="videoCardText">
                    <h4>{title}</h4>
                    
                    <p>{channel}</p>
                    <p>
                        {views} + {timestamp}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default VideoCard
