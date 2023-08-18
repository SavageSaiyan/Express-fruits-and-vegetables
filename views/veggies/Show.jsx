import React from 'react'

function Show({vegetables}) {
    console.log(vegetables)
  return (
    <div>
        <h1>The {vegetables.name} is {vegetables.color}</h1>
        {
            vegetables.readyToEat ? "It's ready to eat" : "Ew Yuck!"
        }
    </div>
  )
}

module.exports = Show;