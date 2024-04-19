import React from 'react';
import './NavButton.css';


const NavButton = ({ imageSrc, altText }) => {
    return (
            <div className="buttonStyle">
                 <button onClick={e => (alert("Button clicked!"))}>
                        <img src={imageSrc} alt={altText}/>
               </button>
            </div>
    );
}

export default NavButton;