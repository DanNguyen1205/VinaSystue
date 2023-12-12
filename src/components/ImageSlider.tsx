import React from 'react'
import { useState } from "react"
import {ArrowBigLeft, ArrowBigRight, CircleDot, Circle} from "lucide-react"

type ImageSliderProps = {
    imageUrls: string[]
}

export function ImageSlider({imageUrls}: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        imageIndex === imageUrls.length-1 ? setImageIndex(0)
        : setImageIndex(imageIndex+1)
    }
    
    function showPrevImage() {
        imageIndex === 0 ? setImageIndex(imageUrls.length-1)
        : setImageIndex(imageIndex-1)
        
    }

    return (    
    <div style={{width:"100%", height:"100%", position:"relative"}}>
        {/* Render all our images in our dom to prepare for animations */}
        <div style={{width:"100%", height: "100%", display:"flex", overflow:"hidden"}}>
        {/* The overflow CSS shorthand property sets the desired behavior when content does not fit in the parent element box (overflows) in the horizontal and/or vertical direction. Since our images are overflowing out of the container they are hidden */}
        {/* The translate() CSS function repositions an element in the horizontal and/or vertical directions. When we change the index we are just moving the images */}
            {imageUrls.map(url => (
                <img key={url} src={url} className='img-slider-img' style={{translate:`${-100 * imageIndex}%`}}/>
            ))}
        </div>
        {/* <img src={imageUrls[imageIndex]} alt="" className='img-slider-img'/> */}
        <button onClick={showPrevImage} className='img-slider-btn left-0'><ArrowBigLeft/></button>
        <button onClick={showNextImage} className='img-slider-btn right-0'><ArrowBigRight/></button>
        <div style={{position: "absolute", bottom:"0.5rem", left:"50%", translate:"-50%", display:"flex", gap:".25rem" }}>
            {imageUrls.map((_, index) => (
                <button className='img-slider-dot-btn' onClick={() => setImageIndex(index)}>{index === imageIndex ? <CircleDot/> : <Circle/>}</button>
            ))}
        </div>
    </div>
    )

}

    