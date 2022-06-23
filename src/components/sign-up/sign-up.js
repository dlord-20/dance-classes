import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Cover from '../cover/cover';
import CoverImg from './City.jpg';

export default function SignUp() {

    const handleUserInput = (e) => {
      //Handle change and input it to where you want to go
      console.log(e.target.value); //test works
    }

    return (
      <div>
        <Cover 
          pageName='Sign-up'
          imgLink={CoverImg}
          imgAltText='what is this?'
        />
        <div className="sign-up">
          <h1>Join a Class Today!</h1>
          <p>Please fill out the form for your child today!</p>
          <form action='#'>
            <div>
              <label>Select Class</label><br/>
              <input type="radio" id="k1" name="select-class" value="k1"/>
              <label>K1 (Saturday's 9:00-9:30am)</label><br/>
              <input type="radio" id="k2" name="select-class" value="k2" />
              <label>K2 (Saturday's 9:30-10:00am)</label><br/>
              <input type="radio" id="k3" name="select-class" value="k3" />
              <label>K3 (Saturday's 10:00-10:30am)</label><br/>
              <input type="radio" id="G1G3" name="select-class" value="g1g3" />
              <label>G1-G3 (Saturday's 10:30-11:00am)</label><br/>
            </div>
            <div>
              <label for="parentFirstName">Parent's first name</label>
              <input type="text" id="parentFirstName" name="parentFirstName"  onChange={handleUserInput}/><br/>
              <label for="parentLastName">Parent's last name</label>
              <input type="text" id="parentLastName" name="parentLastName"/><br/>
              <label for="email">Email (Main form of contact)</label>
              <input type="text" id="email" name="email"/><br/>
              <label for="childsFirstName">Child's first name (Preffered Name)</label>
              <input type="text" id="childsFirstName" name="childsFirstName"/><br/>
              <label for="childsFirstName">Child's last name</label>
              <input type="text" id="childsFirstName" name="childsFirstName"/><br/>
              <label for="childsBirthday">Child's birthday</label>
              <input type="text" id="childsBirthday" name="childsBirthday"/><br/>
            </div>
            <div>
              <label>Bunch of text for agreement</label><br/>
              <input type="checkbox" id="agreement" name="agreement"/>
              <label for="agreement">Consent to agreement</label>
            </div>
            <div>
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    );
  }