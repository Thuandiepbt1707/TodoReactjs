import React from "react";

class AddTodo extends React.Component {
    state = {
        id : "",
        title : "",
    }
    changeTitle = (event) => {
        this.setState({
            title : event.target.value
    })
    }
    clickAdd = () => {
        if(!this.state.title){
            alert("Mời nhập!!!")
            return;
        }
        let todo = {
            id : Math.floor(Math.random()*3000),
            title : this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title : ""
        })
    }
  render() {
    let { title} = this.state;
    return (
      <div className="addtodo">
        <input type="text" value={title}
            onChange = {(event) => this.changeTitle(event)}/>
        <button className="add"
            onClick={() => this.clickAdd()}
        >Add</button>
      </div>
    );
  }
}
export default AddTodo;