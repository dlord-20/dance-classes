import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import slideshowArray from './slideshowObject';
import Slide from './slide';

export default function Slideshow(props) {

    const [index, setIndex] = useState(0);
    const [displaySlides, setDisplaySlides] = useState([]);

    const selectSlideshowDisplay = (num) => {
        
        var tempArray = [];

        for (let i = index; i < index + num; i++) {
            tempArray.push(slideshowArray[i])
        }

        return tempArray.map(slide => <Slide image={slide} />);
    }

    //Index should be 'num' behind length of total slideshowArray
    const changeIndex = () => {
        console.log('index = ' + index);
        console.log('slideshowArray.length = ' + slideshowArray.length);
        console.log('props.numOfPictures + 1 = ' + (props.numOfPictures + 1));
        if(index === slideshowArray.length - (props.numOfPictures)) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    useEffect(() => {
        console.log('index = ' + index);
        console.log('numOfPictures = ' + props.numOfPictures);
        setDisplaySlides(selectSlideshowDisplay(props.numOfPictures));
        return() => {

        }
    }, [index])

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(index);
            console.log(displaySlides);
            changeIndex();
        }, 8000);
        return () => clearInterval(interval);
    })

    // const changeDisplaySlides = () => {
    //     setDisplaySlides(selectSlideshowDisplay(3, index))
    // }


    return (
        <div className='slideshow'>
            <h3>Slideshow</h3>
            <div>
                {/* Array goes here */}
                {displaySlides}

            </div>
        </div>
    );
  }