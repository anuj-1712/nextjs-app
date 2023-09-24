import React from 'react'

const Loader = ({top,left}) => {
  return (
    <div>
      <img
          src="https://media3.giphy.com/media/hWZBZjMMuMl7sWe0x8/giphy.gif?cid=ecf05e47s77ioe43qoepqfy5x1g9x98k28625wjz4295klb8&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          style={{
            position: "absolute",
            top:`${top}%`,
            left:`${left}%`,
            translate:`-${left}% -${top}%`,
            zIndex:"-1"
          }}
        />
    </div>
  )
}

export default Loader
