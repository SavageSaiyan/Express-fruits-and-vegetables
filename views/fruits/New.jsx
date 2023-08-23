import React from 'react'

function New() {
  return (
    <div>
        {/* form */}
        <h1>New Fruit Page</h1>

        <form action="/fruits" method="POST">
           Name:  <input type="text" name='name'/> <br />
           Color:  <input type="text" name='color'/> <br />
           Ready To Eat:  <input type="checkbox" name='readyToEat'/> <br />
           <input type="submit" value="create fruit" /> <br />
        </form>
    </div>
  )
}

module.exports = New