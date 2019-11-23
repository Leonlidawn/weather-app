import React from 'react'
import './Todos.scss'
const todoList = [
  "make css more readable and structured",
  "add text input and auto suggestion for picking cities",
  "more locations",
  "change to another weather api which provides more organised data",
  "allow picking location in a map, 1 possible api for map is mapbox",
  "use https",
  "give it a proper domain name",
  "add google account login and allowing saving favourate locations for users"
]

class Todos extends React.Component {

  componentDidMount() {
    this.list = document.querySelector('ol');
    this.body = document.querySelector('body');
    console.log(this.body);
    this.toggle = () => {
      // console.log(this.list.classList);
      if (this.list.classList.contains('close')) {
        this.body.classList.add('overflow-hidden');
        this.list.classList.remove('close')
      } else {
        this.body.classList.remove('overflow-hidden');
        this.list.classList.add('close')
      }


    }
  }



  render() {

    console.group(this.toggle);
    return (
      <div className="todos">

        <button onClick={this.toggle}>
          Todos
        </button>
        <ol className="close">
          {todoList.map(
            (todo) =>
              <li key={todoList.indexOf(todo)}>
                <span>{todo}</span>
              </li>
          )}
        </ol>
      </div>
    )
  }
}

export default Todos;