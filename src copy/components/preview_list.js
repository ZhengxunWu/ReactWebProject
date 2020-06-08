import React, {Component} from "react"
import PreviewItem from "./preview_item"

const VideoList = (props) => {
  const PreviewItems=props.videos.map((video)=>{
    return (
    <PreviewItem 
      onVideoSelect={props.onVideoSelect}
      key={video.etag} 
      video={video} />
    );
  });
  
  return (
   <ul className="col-md-4 list-group">
    {PreviewItems}
   </ul>
  );
};

export default VideoList 