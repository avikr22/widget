import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


const items = [
    {
        title: 'What is React',
        content: 'React is fron end javascript framework'
    },

    {
        title: 'What is Java',
        content: 'Java is programming language'
    },

    {
        title: 'What is HTML',
        content: 'HTML is a markup language'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]

export default() => {
    return (
    <div>
        <Translate/>
    </div>
    );
};

