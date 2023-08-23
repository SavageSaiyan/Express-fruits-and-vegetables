import React from 'react'

function Index({vegetables}) {
  return (
    <div>
         <nav>
            <a href="/vegetable/new">Create New Vegetable</a>
        </nav>
        {
            vegetables.map((vegetable, i)=> {
                return (
                    <li key={i}>
                        <a href={`/vegetable/${vegetable.id}`}>  {vegetable.name} </a> is{vegetable.color} <br /> 
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