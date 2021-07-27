import axios from "axios"
import React, { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { img_300, noPicture } from "../../config/config"
import "./Carousel.css"

const handleDragStart = (e) => e.preventDefault()

const Gallery = ({ id, media_type }) => {
  const [credits, setCredits] = useState([])

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
    </div>
  ))

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  }

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    setCredits(data.cast)
  }

  useEffect(() => {
    fetchCredits()
    // eslint-disable-next-line
  }, [])

  //   const createItems = (length, [handleClick]) => {
  //     let deltaX = 0
  //     let difference = 0
  //     const swipeDelta = 20

  //     return Array.from({ length }).map((item, i) => (
  //       <div
  //         data-value={i + 1}
  //         className="item"
  //         onMouseDown={(e) => (deltaX = e.pageX)}
  //         onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
  //         onClick={() => difference < swipeDelta && handleClick(i)}
  //       >
  //         <span className="item-inner" />
  //       </div>
  //     ))
  //   }

  //   const [activeIndex, setActiveIndex] = useState(0)
  //   const [item] = useState(createItems(5, [setActiveIndex]))

  //   const slidePrev = () => setActiveIndex(activeIndex - 1)
  //   const slideNext = () => setActiveIndex(activeIndex + 1)
  //   const syncActiveIndex = ({ item }) => setActiveIndex(item)

  const renderSlideInfo = ({ item, itemsCount }) => {
    return `${item}\\${itemsCount}`
  }

  const renderDotsItem = ({ isActive }) => {
    return isActive ? "x" : "o"
  }

  const renderPrevButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? "0.5" : 1 }}>&lt;</span>
  }

  const renderNextButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? "0.5" : 1 }}>&gt;</span>
  }

  const renderPlayPauseButton = ({ isPlaying }) => {
    return isPlaying ? "PAUSE" : "PLAY"
  }

  return (
    // <AliceCarousel
    //   mouseTracking
    //   infinite
    //   disableDotsControls
    //   disableButtonsControls
    //   responsive={responsive}
    //   items={items}
    //   autoPlay
    //   controlsStrategy="alternate"
    // />
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlayControls
      disableSlideInfo={false}
      renderSlideInfo={renderSlideInfo}
      renderDotsItem={renderDotsItem}
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
      renderPlayPauseButton={renderPlayPauseButton}
    />
  )
}

export default Gallery
