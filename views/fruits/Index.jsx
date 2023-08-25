import React from 'react'
const Default = require('../layout/Default')

function Index({fruits}) {
  return (
    <Default title={"Fruits Index Page"}>
        <nav>
            <a href="/fruits/new">Create New Fruit</a>
        </nav>
        <ul>
        {fruits.map((fruit, i)=> {
                return (
                    <li key={i}>
                        <a href={`/fruits/${fruit.id}`}>  {fruit.name} </a> is{fruit.color} <br /> 
                        {
                            fruit.readyToEat 
                            ? "it is ready to eat" 
                            : "it is not ready to eat"}
                            {/* {delete goes here} */}
                            <form method='POST'action={`/fruits/${fruit._id}?_method=DELETE`} >
                                <input type="submit" value="DELETE" />
                            </form>
                            <a href={`/fruits/${fruit._id}/edit`}> Edit This Fruit</a>
                    </li>
                )
            })
        }
        </ul>
        
    </Default>
  )
}

module.exports = Index