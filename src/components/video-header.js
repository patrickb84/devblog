import React from "react"
import "./video-header.scss"
import headerVid from "../assets/lively.mp4";

const VideoHeader = () => {
  return (
    <div className="video-header">
      <video playsInline autoPlay muted loop>
        <source src={headerVid} type="video/mp4" />
      </video>

      <header className="viewport-header">

        <h1 className="w-100 display-1 text-white font-peacock my-2 my-md-5 px-2">
          Welcome to a{" "}
          <em className="font-peacock-loop underline-wavy">lively</em> place...
        </h1>
      </header>
    </div>
  )
}

export default VideoHeader
