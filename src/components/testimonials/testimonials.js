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

    const changeDisplayArray = () => {
        var filteredTestimonies = [];
        if(props.currentClass === 'k1' || props.currentClass === 'k2' || props.currentClass === 'k3' || props.currentClass === 'g1g3') {
            filteredTestimonies = danceClasses.filter(item => item.danceClassName === props.currentClass)
        } else {
            filteredTestimonies = danceClasses.map(item => item);
            console.log('here');
        }
    
        return filteredTestimonies.map(item => <Testimony testimony={item}/>);
    }

    const [display, setDisplay] = useState(changeDisplayArray());


    useEffect(() => {
        setDisplay(changeDisplayArray());
        return() => {
            changeDisplayArray();
        }
    }, [props.currentClass])





    const [displayTestimony, setDisplayTestimony] = useState(display[0]);

    //Need to make this a plus or minus depending on the input
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

    //set interval for changeDisplay
    useEffect(() => {
        changeDisplayIndex(0);
        return () => {
            // changeDisplay();
        }
    }, [display]);

    const changeDisplay = () => {
        return setDisplayTestimony(display[displayIndex]);
    }

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