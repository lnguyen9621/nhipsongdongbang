import React from 'react';
import { VideoCard } from '../videocard/videocard.component';
import './videocardlist.styles.css';

export const VideoCardList = ( { videolist }) => {

    return (
        <div className="videocard-list">
            {videolist.map(item => (
                <VideoCard key={item.snippet.resourceId.videoId} video={item} />
            ))}
        </div>
    );
}