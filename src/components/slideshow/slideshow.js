import { React, useState, useEffect } from 'react';
import slideshowArray from './slideshowObject';
import Slide from './slide';

export default function Slideshow(props) {

    const [index, setIndex] = useState(0);
    const [displaySlides, setDisplaySlides] = useState([]);

    //Cycles in a carousel manner through entire slideshow array from left to right (got it be an easier way but it works)
    const selectSlideshowDisplay = (num) => {
        var tempArray = [];
        if(index > slideshowArray.length - num) {
            tempArray.push(slideshowArray[index]);
            if(slideshowArray.length - 1 > index) {
                for(let i = index + 1; i < slideshowArray.length; i++) {
                    tempArray.push(slideshowArray[i]);
                }
            }
            const tempNum = tempArray.length;
            for(let i = 0; i < num - tempNum; i++) {
                tempArray.push(slideshowArray[i]);
            }
            
        } else {
            for (let i = index; i < index + num; i++) {
                tempArray.push(slideshowArray[i])
            }
        }

        return tempArray.map(slide => <Slide image={slide} key={slide.altImg}/>);
    }

    //Index should be 'num' behind length of total slideshowArray
    const changeIndex = () => {
        if(index === slideshowArray.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    //changes slides whenever the index changes
    useEffect(() => {
        setDisplaySlides(selectSlideshowDisplay(props.numOfPictures));
        return() => {

        }
    }, [index])

    //Timer to change in index of the array (allows the 'movement' of the images)
    useEffect(() => {
        const interval = setInterval(() => {
            changeIndex();
        }, 4500);
        return () => clearInterval(interval);
    })

    return (
        <div className='slideshow'>
            <h3>Slideshow</h3>
            <div className='slides'>
                {/* Array goes here */}
                {displaySlides}

            </div>
        </div>
    );
  }