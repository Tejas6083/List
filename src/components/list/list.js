import React, { useState } from 'react';
import './listStyle.css';


const Popup = ({text, delet, closePopup}) => {

    const{id, employee_salary, employee_age, employee_name} = text;
    
    // Popup Window
    return (
    <div className='popup'>
        <div className='popup_inner'>
            <h3> {id}: {employee_name} </h3>
            <h5> Age: {employee_age} </h5>
            <h5> Salary: {employee_salary} </h5>

            <button className="button" onClick={() => delet(text)}>Delete me</button>
            <br />
            <button className="button" onClick={closePopup}>close me</button>

        </div>
    </div>
    );
}

const List = ({name, delet}) => {

    const{id, employee_salary, employee_age, employee_name} = name;
    const [showPopup, setshowPopup] = useState(false);

    const togglePopup = () => {
        setshowPopup(!showPopup);
    }
    return (

        <div className='List' value={id} onClick={() => togglePopup()}>
            <div className='List-details'>
                <span className="List-title-heading">
                    Name:
                </span>                
                <span className="List-title">
                    {employee_name}
                </span>
            </div>
            <div className='List-details'>
                <span className="List-sub">
                    Salary: {employee_salary}
                </span>
                <span className='List-sub'>
                    Age: {employee_age}
                </span>
            </div>

            {showPopup ? 
                <Popup
                    text = { name }
                    delet = {delet}
                    closePopup={togglePopup}
                />
                : null
            }
        </div>
        
    )
};

export default List;
