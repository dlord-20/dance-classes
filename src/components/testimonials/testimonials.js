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

    //This needs to be a state


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
        console.log('-----------useEffect change array---------------');
        console.log(display);
        setDisplay(changeDisplayArray());
        return() => {
            changeDisplayArray();
        }
    }, [props.currentClass])





    const [displayTestimony, setDisplayTestimony] = useState(display[0]);

    //Need a way to call this when we change a page
    //This needs to be two functions - one that sets displayIndex and the other that sets displayTestimony
    //When index doesn't change but display array changes we need a way to capture that
    const changeDisplayIndex = () => {
        if(display.length === 0) {
            console.log('length = 0')
            console.log(display);
            setDisplayIndex(0);
        }
        // if(display.length === 0 && displayIndex === 0) {
        //     changeDisplay();
        // }
        console.log('length = ' + display.length);
        if(displayIndex < (display.length - 1)) {
            setDisplayIndex(displayIndex + 1);
            console.log('set plus one');
        } else {
            console.log('set zero');
            setDisplayIndex(0);
            console.log('in - ' + displayIndex);
        }
        console.log('displayIndex = ' + displayIndex);
    }

    const [displayIndex, setDisplayIndex] = useState(0);

    //set interval for changeDisplay and maybe this is how you'd fix page change
    useEffect(() => {
        console.log('------------useEffect index------------')
        console.log(display.length);
        changeDisplayIndex();
        return () => {
            // changeDisplay();
        }
    }, [display]);

    const changeDisplay = () => {
        console.log('changeDisplay function');
        console.log('displayIndex = ' + displayIndex);
        return setDisplayTestimony(display[displayIndex]);
    }

    useEffect(() => {
        console.log('------------useEffect change display-----------')
        changeDisplay();
        return () => {

        }
    }, [display[displayIndex]])


    return (
        <div>
            <div className="testimonies">
                <p onClick={changeDisplayIndex}>&#x2190;</p>
                <div>
                    {displayTestimony}
                </div>
                <p onClick={changeDisplayIndex}>&#x2192;</p>
            </div>
        </div>
    );
  }