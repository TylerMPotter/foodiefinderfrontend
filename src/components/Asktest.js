import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
  }
    <div>
    <form>
      <fieldset>
      <legend>Foodie Finder</legend>

      <div>
        <label for="location">Your Address: </label>
        <input type="text" id="location" name="location" placeholder= "350 6th Ave, New York, NY 10118"/>
      </div>

      <div>
          <label for="distance">How Far Are You Willing To Travel In Miles: </label>
          
          <input type="number" id="distance" name="distance" placeholder= "1" />
      </div>

        <div>
          <label for="cusine">Choose Your Cusine: </label>
          <select id="cusine" name="cusine">
            <option value="restaurants">Surprise Me!</option>
            <option value="burgers">Burgers</option>
            <option value="chicken_wings">Chicken Wings</option>
            <option value="chinese">Chinese</option>
            <option value="filipino">Filipino</option>
            <option value="italian">Italian</option>
            <option value="indian">Indian</option>
            <option value="japanese">Japanese</option>
            <option value="mexican">Mexican</option>
            <option value="pizza">Pizza</option>
            <option value="sandwiches">Sandwiches</option>
            <option value="sushi">Sushi</option>
            <option value="thai">Thai</option>
            <option value="vietnamese">Vietnamese</option>
          </select>
        </div>

        <div>
          <label for="prince">Price: </label>
          <select id="price" name="price">
            <option value="1">$</option>
            <option value="1,2">$$</option>
            <option value="1,2,3">$$$</option>
            <option value="1,2,3,4">$$$$</option>
          </select>
        </div>
      </fieldset>
      </form>
    </div>

export default AddTask