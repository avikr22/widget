import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ( {label, options, selected, onSelectedChange} ) => {
    const [open, setOpen] = useState(false);
    //here we want to keep reference of dropdown so we will assign it there
    const ref = useRef();

    // To make sure useEffect just runs only one time , we have put 2nd argument as an empty array.
    //We want to run it just one time because we want to set up the eventListener one time. 
    useEffect(() => {
        const onBodyClick = (event) => {
            //ref.current will see if the elekemnt that is clicked on is inside our component
            if(ref.current.contains(event.target)) {
                return;
            }
            //user clicks anywhere outside the dropdown , this will close the dropdown
            setOpen(false);
        };

        //When our component is renedered first time , we will setup event listener
        document.body.addEventListener('click', onBodyClick);

        //Whenver our dropdown is about to be removed from the dom , react is automatically going to call 
        //this cleanup function and remove the event listener. 
        return() => {
            document.body.removeEventListener('click', onBodyClick);
        };
    },[]);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }
        return (
            <div 
                key={option.value} 
                onClick = {() => onSelectedChange(option)}
                className="item"
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref = {ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick= {() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>

    );
};




export default Dropdown;