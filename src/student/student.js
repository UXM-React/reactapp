import React from 'react';
import './student.css';
import {Button} from 'react-bootstrap';

const student = (props) =>{
    return(
    <div className="student">
    <form>
        <div>
            <label>Full Name:</label>
            <input type="text" name="name"/>
        </div>
        <div>
            <label>Email ID:</label>
            <input type="email" name="name"/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="name" required/>
        </div>
        <div>
            <label>Phone Number:</label>
            <input type="number"  min="10"/>
        </div>
        <div>
            <label>Gender:</label>
            {/* <div>{this.props.gender.map(gen => {
                return<input type="Radio" name="gen" id={gen.name} >{gen.name}</input>
            })}
            </div> */}
            <input type="Radio" name="gen" id="radiobtn1" />Male
            <input type="Radio" name="gen" id="radiobtn2" />Female
        </div>
        <div>
            <label>Known Languages:</label>
            <input type="checkbox" name="english" id="lang1" />English
            <input type="checkbox" name="tamil" id="lang2" />Tamil
            <input type="checkbox" name="telugu" id="lang3"/>Telugu
        </div>
        <div className="location">
            <label>Locaiton:</label>
            <select name="City">
                <option value="-1" defaultValue>select..</option>
                <option value="Hyderbad">Hyderbad</option>
                <option value="Chennai">Chennai</option>
                <option value="Banglore">Banglore</option>
                <option value="Pune">Pune</option>
            </select>
        </div>
        <div className="text-center">
            <Button className="btn-success" varient="success">Submit</Button>
        </div>  
        
    </form>
 </div>);
}
export default student;