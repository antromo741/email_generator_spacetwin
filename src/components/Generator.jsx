import React from 'react'
import "./generator.css"

import CSVbutton from './CSVbutton.js'
import { useState } from 'react';
var randomstring = require("randomstring");


export default function Generator({ numberOfEmails, domain }) {
    const [data, setData] = useState('');
    const submittedNumber = numberOfEmails ? numberOfEmails : 15;
    const submittedDomain = domain ? domain : '@test.mailtrail.pro';
    const generateList = () => {
        console.log('Initialized Generator');
        var emailListObject = [];
        for (var i = 0; i < submittedNumber; i++) {
            var myText = randomstring.generate({
                length: 12,
                charset: 'alphanumeric',
                readable: true,
                capitalization: false,
            });
            //console.log('string: ', myText + '@test.mailtrail.pro');
            var tempObject = ['email', myText + '@' + submittedDomain];
            emailListObject.push(tempObject);
        }
        console.log('emailListObject: ', emailListObject);
        setData(emailListObject);
    }
    return <div><button onClick={generateList}>Generate Email List</button><CSVbutton emailListObject={data} /></div>


}



