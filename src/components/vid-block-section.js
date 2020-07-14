import React from "react"
import ReactPlayer from "react-player/lazy"
import "./vid-block-section.scss"

const VidBlockSection = () => {
  return (
    <div className="row no-gutters my-5 d-flex align-items-center">
      <div className="col-md-3 offset-md-2">
        <div className="py-3 pr-5">
          <h2 className="h1 font-peacock-loop mb-4">We're a bit on the lively side</h2>
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatem, nostrum? Minima doloribus quisquam officia quibusdam.
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, amet?
          </p>
        </div>
      </div>
      <div className="col-md-6 offset-md-1">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=YjyUIwKPAxA"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  )
}

export default VidBlockSection
