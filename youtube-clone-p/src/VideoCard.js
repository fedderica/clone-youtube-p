import { Avatar } from '@mui/material'
import React from 'react'
import './VideoCard.css';

function VideoCard({image, title, channel, views, timestamp, channelImage }){
  return (
    <div className='videoCard'>
        <img className="videoCard_thumbnail" src={image} alt="" />
        <div className="videoCard__info">
            <Avatar
            className="videoCard__avatar"
            alt={channel}
            src={channelImage}
             />
             <div className='video__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                <p>{views} * {timestamp}</p>
                </p>
                </div>
                </div>
                </div>
  );
}

export default  VideoCard