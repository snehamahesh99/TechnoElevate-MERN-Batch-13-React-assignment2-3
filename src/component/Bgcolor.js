import React, {useState} from 'react'
// import Select from 'react-select'
// import React, from 'react'

function Bgcolor()
{
    var colors =[
        {
            value:1,
            label:"red"
        },
        {
            value:2,
            label:"blue"
        },
        {
            value:3,
            label:"orange"
        },
        {
            value:4,
            label:"green"
        },
    ];
    const [setbgcolor,value]=useState(colors.label);
     const handle=()=>
    {
        value(colors.label);
    }
    return(
        <div>
            <style>{'body {background-color:'+setbgcolor+';}'}</style>
            <select options={colors}>select</select>
            <center>
                <b>the background color is:{setbgcolor}</b>
            </center>
             </div>
    );
}
export default Bgcolor;