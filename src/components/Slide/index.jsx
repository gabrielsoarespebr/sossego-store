import style from './style.module.css'
import slide2 from '../../assets/images/slide2.png'
import slide3 from '../../assets/images/slide3.png'
import slide4 from '../../assets/images/slide4.png'
import { useEffect, useState } from 'react'

let indexTemp = 0;

export const Slide = () => {
    const [currentSlide, setCurrentSlide] = useState(slide2)

    const slides = [
        slide2,
        slide3,
        slide4
    ]

    useEffect(() => {
        setTimeout(() => {
            setCurrentSlide(slides[indexTemp]);

            indexTemp = indexTemp == (slides.length - 1) ? 0 : ++indexTemp;
        }, 13000)
    }, [currentSlide])

    return (
        <>
            <img src={currentSlide} alt="Slide" />

        </>
    )
}