import React from 'react'

function Show({fruit}) {
  console.log(fruit)
  return (
    <div>
      <h1>The {fruit.name} is {fruit.color} </h1>
      {
        fruit.readyToEat ? "It's ready to eat" : "Ew Yuck!"
      }
      <br/>
      {
        fruit.isItGood ? `Yes I like ${fruit.name}` : `No i don't like ${fruit.name}`
      }
    </div>
  )
}

module.exports = Show;