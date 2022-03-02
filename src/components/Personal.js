import { Grid, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./personal.css";
// import PhoneField from 'material-ui-phone-number';
// import MuiPhoneNumber from "material-ui-phone-number";

export default function Personal (){


    const [starwarsData, setStarwarsData] = useState([])
    useEffect(() => {
     fetch('https://akabab.github.io/starwars-api/api/all.json')
     .then(response => response.json())
     .then(data => setStarwarsData(data))
 
     console.log("use Effect done")
 }, [])

//   starwarsData && console.log(starwarsData)
const charactersArray = starwarsData.map((character) => character)
// console.log(charactersArray)
    const humansArray = charactersArray.filter( character => character.species === 'human')
    const humansJSX = humansArray.map( character => {
        return (
            <div key ={character.id}>
                <h3>{character.name}</h3>
                <h2>{character.species}</h2>
                <img  className= 'portrait'
                src={character.image} alt="" />
                <h5>Homeworld: {character.homeworld}</h5>
            </div>
        )
    })
    const droidsArray = charactersArray.filter( character => character.species === 'droid')
    






    const [count, setCount] = useState(0);
    function handleNext () {
        setCount( count + 1);
    }
    function handlePrev () {
        setCount( count - 1);
    }
    
    if (count > 37) { setCount(0)} else if (count < 0) {setCount (37)}



  


    


console.log(humansArray)
console.log(droidsArray)



    const JSXArray = humansArray.map((character) => {
         return(
            <div key ={character.id} id ='character-container'>
                <div id="header">
                    <h1>{character.name} {character.id}</h1>
                    <p>{character.species}</p>
                </div>
                <div id="main">
                    <div id="description">
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptas maxime assumenda molestias sapiente dicta, corrupti reiciendis. Accusantium repudiandae tenetur hic saepe, itaque, atque non nam dolore ducimus corrupti laborum.</p>
                    </div>
                    <div id="Affliations">
                        <h2>Affiliations</h2>
                        
                        <ul>
                            {character.affiliations.map(affiliate => <li key={affiliate}>{affiliate}</li>)}
                        </ul>
                    </div>
                   {character.masters && <div id="masters">
                        <h2>Masters</h2>
                        <ul>
                        {character.masters}
                        {/* {character.masters.map(master => <li key={master}>{master}</li>)} */}
                        </ul>
                    </div>}
                   {character.apprentices && <div id="apprentices">
                        <h2>Apprentices</h2>
                        {character.apprentices}
                    </div>}
                </div>
                <div id="side">
                    <img src={character.image} alt='' />
                    <ul id="personal-details">
                       <li>Born: {Math.abs(character.born)}  {Math.sign(character.born) === 1 ? 'A.B.Y' : 'B.B.Y'}</li>
                    </ul>
                </div>


            </div>
        ) 
         })
 


    return (
    
        <div id='container'>     
             <Paper className = "paper" 
             elevation = {20}
             > 
           {JSXArray[count]}
             
             </Paper>
             
             <div id="buttons">
             <button onClick={handlePrev}>Prev</button>
             <button onClick={handleNext}>Next</button>
             </div>
        </div>
    )
}


// <form action="" id='personal--form'>
//                 <input placeholder = "First Name" type="text" name="firstName" id="first-name" />
//                 <input placeholder = "Last Name" type="text" name="lastName" id="last-name" />
//                 <input placeholder = "Email" type="email" name="email" id="email" />
//                 <input placeholder = "Phone Number" type="tel" name="telephone" id="telephone" />
//             </form>