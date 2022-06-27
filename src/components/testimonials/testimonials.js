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

    var filteredTestimonies = [];

    if(props.currentClass === 'k1' || props.currentClass === 'k2' || props.currentClass === 'k3' || props.currentClass === 'g1g3') {
        filteredTestimonies = danceClasses.filter(item => item.danceClassName === props.currentClass)
    } else {
        filteredTestimonies = danceClasses.map(item => item);
        console.log('here');
    }

    const display = filteredTestimonies.map(item => <Testimony testimony={item}/>);

    const [displayIndex, setDisplayIndex] = useState(0);
    const [displayTestimony, setDisplayTestimony] = useState(display[displayIndex]);

    //Need a way to call this when we change a page
    //This needs to be two functions - one that sets displayIndex and the other that sets displayTestimony
    const changeDisplay = () => {
        console.log('-------------------------')
        if(display.length === 0) {
            console.log('length = 0')
            console.log(display);
            setDisplayIndex(0);
            return setDisplayTestimony([]);
        }
        console.log('length = ' + display.length);
        if(displayIndex < (display.length - 1)) {
            setDisplayIndex(displayIndex + 1);
            console.log('set plus one');
        } else {
            console.log('set zero');
            setDisplayIndex(0);
            console.log('in - ' + displayIndex)
        }
        console.log('displayIndex = ' + displayIndex);
        return setDisplayTestimony(display[displayIndex]);
    }

    //set interval for changeDisplay and maybe this is how you'd fix page change
    useEffect(() => {
        setDisplayIndex(0);
        changeDisplay();
        return () => {
            // changeDisplay();
        }
    }, [props.currentClass]);


    return (
        <div>
            <div className="testimonies">
                <p onClick={changeDisplay}>&#x2190;</p>
                <div>
                    {displayTestimony}
                </div>
                <p onClick={changeDisplay}>&#x2192;</p>
            </div>
        </div>
    );
  }