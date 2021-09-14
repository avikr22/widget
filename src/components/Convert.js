import React, {useState, useEffect} from 'react';
import axios from 'axios';
//Whenver we receive language or text we need to run some addditional code. 
//The ideal way of wiring that up is to use useEffect hook. We are going to put language and text 
// in that dependency array or 2nd argument.
const Convert = ({language , text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    //We want to rerun this hook whenever text changes. 
    useEffect(() => {
        //after 500ms it will set debouncedText to text if the timer is not cancelled
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        //but if the text piece changes before 500ms , we want to cancel the timer

        return () => {
            clearTimeout(timerId);
        };
    },[text]  );


  

    useEffect(()=> {
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params : {
                    q: debouncedText,
                    target: language.value,
                    key : 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText); 
        };  
        //This function will be invoked anytime we change text or language 
        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}

export default Convert;