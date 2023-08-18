import React from 'react'

function Index({vegetables}) {
  return (
    <div>
        {
            vegetables.map((vegetable, i)=> {
                return (
                    <li key={i}>
                        <a href={`/vegetable/${i}`}>  {vegetable.name} </a> is{vegetable.color} <br /> 
                        {
                            vegetable.readyToEat ? "it is ready to eat" : "it is not ready to eat"
                        }
                    </li>
                )
            })
        }
    </div>
  )
}

module.exports = Index