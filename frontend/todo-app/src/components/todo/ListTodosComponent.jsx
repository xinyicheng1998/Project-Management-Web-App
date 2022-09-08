import moment from "moment";
import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			message: null
		}
		this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
		this.refreshTodos = this.refreshTodos.bind(this)
		this.updateTodoClicked = this.updateTodoClicked.bind(this)
		this.addTodoClicked = this.addTodoClicked.bind(this)
	}


	componentWillUnmount() {
		console.log("componentWillUnmount")
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true
	}

	componentDidMount() {
		this.refreshTodos();
	}

	refreshTodos() {
		let username = AuthenticationService.getLoggedInUserName();
		TodoDataService.retrieveAllTodos(username)
			.then(response => {
				// console.log(response)
				this.setState({ todos: response.data })
			})
	}

	deleteTodoClicked(id) {
		let username = AuthenticationService.getLoggedInUserName();
		TodoDataService.deleteTodo(username, id)
			.then(response => {
				this.setState({ message: `Delete of todo ${id} successfully` })
				this.refreshTodos();
			})
	}

	addTodoClicked() {
		this.props.navigate('/todos/-1');
	}

	updateTodoClicked(id) {
		this.props.navigate(`/todos/${id}`);
		// let username = AuthenticationService.getLoggedInUserName();
		// TodoDataService.deleteTodo(username, id)
		// 	.then(response => {
		// 		this.setState({ message: `Delete of todo ${id}` })
		// 		this.refreshTodos();
		// 	})
	}

	render() {
		return (<div>
			<h1 className="welcome-title">List Todos</h1>
			{this.state.message && <div className="alert alert-success">{this.state.message}</div>}
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th>Description</th>
							<th>Target date</th>
							<th>Is completed?</th>
						</tr>
					</thead>
					<tbody>
						{this.state.todos.map(
							todo =>
								<tr key={todo.id}>
									<td>{todo.description}</td>
									<td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
									<td>{todo.done.toString()}</td>
									<td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)} >Update</button></td>
									<td><button className="btn btn-danger" onClick={() => this.deleteTodoClicked(todo.id)} >Delete</button></td>
								</tr>
						)}
					</tbody>
				</table>
				<div className="row">
					<button className="btn btn-success mx-auto btn-lg" onClick={this.addTodoClicked}>Add</button>
				</div>
			</div>
		</div>);
	}
}

export default ListTodosComponent