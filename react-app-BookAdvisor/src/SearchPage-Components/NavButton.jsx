import './NavButton.css';

const NavButton = ({ imageSrc, altText }) => {
    return (
                <div className='buttonContainer'>
                 <button className='buttonStyle' onClick={e => (alert("Button clicked!"))}>
                        <img className='buttonImageStyle' src={imageSrc} alt={altText}/>
               </button>
               </div>            
           
    );
}
export default NavButton;