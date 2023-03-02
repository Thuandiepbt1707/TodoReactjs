import React from "react";
import AddTodo from "./AddTodo.js";
import './listTodo.scss'
class ListTodo extends React.Component {
    state = {
        listTodo:[
            {id: "1", title: "Do homework"},
            {id: "2", title: "Do housework"},
            {id: "3", title: "Do something"},
        ]
    }
    addNewTodo= (todo) => {
      this.setState({
        listTodo:[...this.state.listTodo,todo]
      })
    }
    deleteTodo = (todo) =>{
      this.setState({
        listTodo : this.state.listTodo.filter(item => item !== todo)
      })
    }
  render() {
    let {listTodo} = this.state;
    return (
      <div className="container">
        <AddTodo 
          addNewTodo = {this.addNewTodo}
        />
        <div className="list-todo-content">
            {listTodo && listTodo.length > 0 &&
                listTodo.map((item, index) =>{
                    return (
                      <div className="{item.id} todochill">
                        <span>{index+1} - {item.title} </span>
                        <div className="btn">
                          <button className="edit">Edit</button>
                        <button className="delete"
                        onClick={() => this.deleteTodo(item)}
                        >Delete</button>
                        </div>
                      </div>
                    );
                })
            }
          <></>
        </div>
      </div>
    )
  }
}

export default ListTodo;
