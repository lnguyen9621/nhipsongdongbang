import React from 'react';
import './videocard.styles.css';

export const VideoCard = ({ video }) => {

    return (
        <div className="videocard-container">
            <iframe width="316" height="178" title={video.snippet.title} src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.publishedAt}</p>
        </div>
    );
}