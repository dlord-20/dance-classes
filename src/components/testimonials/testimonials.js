import {
    React,
    useEffect,
    useState
    } from 'react';
import { 
    NavLink, 
    Outlet
    } from 'react-router-dom';
import danceClasses from './testimonial-object';
import Testimony from './testimony';

export default function Testimonials(props) {

    //Sets the array used through the function according to the page
    const changeDisplayArray = () => {
        var filteredTestimonies = [];
        if(props.currentClass === 'k1' || props.currentClass === 'k2' || props.currentClass === 'k3' || props.currentClass === 'g1g3') {
            filteredTestimonies = danceClasses.filter(item => item.danceClassName === props.currentClass)
        } else {
            filteredTestimonies = danceClasses.map(item => item);
        }
    
        return filteredTestimonies.map(item => <Testimony testimony={item}/>);
    }

    const [display, setDisplay] = useState(changeDisplayArray());

    //Get the array used for the page
    useEffect(() => {
        setDisplay(changeDisplayArray());
        return() => {
            changeDisplayArray();
        }
    }, [props.currentClass])

    const [displayTestimony, setDisplayTestimony] = useState(display[0]);

    //Adds or subtracts depending on which arrow clicked
    const changeDisplayIndex = (num) => {
        //Don't think we need this commented out code anymore
        // if(display.length === 0) {
        //     console.log('length = 0')
        //     console.log(display);
        //     setDisplayIndex(0);
        //     // return;
        // }

        if(num === -1 && displayIndex === 0) {
            setDisplayIndex(display.length - 1);
        } else if(num === -1) {
            setDisplayIndex(displayIndex + num);
        } else if (displayIndex < (display.length - 1)) {
            setDisplayIndex(displayIndex + num);
        } else {
            setDisplayIndex(0);
        }
    }

    const addToIndex = () => {
        changeDisplayIndex(1);
    }

    const minusToIndex = () => {
        changeDisplayIndex(-1);
    }

    const [displayIndex, setDisplayIndex] = useState(0);

    //Cycle testimonies
    useEffect(() => {
        if(display.length > 1) {
            const interval = setInterval(() => {
            changeDisplayIndex(1);
            }, 3000);
        return () => clearInterval(interval);
        }
    })

    //Reset index back to zero for new page
    useEffect(() => {
        changeDisplayIndex(0);
    }, [display]);

    //Display correct array according to array
    const changeDisplay = () => {
        return setDisplayTestimony(display[displayIndex]);
    }

    //Is called on a page change and changes testimonies to the corresponding array
    useEffect(() => {
        changeDisplay();
        return () => {

        }
    }, [display[displayIndex]])


    return (
        <div>
            <div className="testimonies">
                <p onClick={minusToIndex}>&#x2190;</p>
                <div>
                    {displayTestimony}
                </div>
                <p onClick={addToIndex}>&#x2192;</p>
            </div>
        </div>
    );
  }