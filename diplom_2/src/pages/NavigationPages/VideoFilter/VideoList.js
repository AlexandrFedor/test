import React from "react";



const VideoList= (props) => {

    return (
        <div>
        <li className="content-video">
          <iframe
            width="1136"
            height="639"
            src={props.post.url}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </li>
        <div className="text-video">
          <p className="text-video">{props.post.description}</p>
        </div>
      </div>
    )

}

export default VideoList