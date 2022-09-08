import React, { Component } from "react";
import { Link } from 'react-router-dom';
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {

	constructor(props) {
		super(props)
		this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
		this.state = {
			welcomeMessage: ""
		}
		this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
		this.handleError = this.handleError.bind(this)
	}

	render() {
		return (
			<div>
				<h1 className="welcome-title">Welcome!</h1>
				<div className="container">
					{/* to use params below, we import withParams */}
					Welcome {this.props.params.name}.
					Look at your todos <Link to="/todos">here</Link>
				</div>
				<div className="container">
					Click here to get a customized welcome message.
				</div>
				<button onClick={this.retrieveWelcomeMessage}
					className="btn btn-info btn-lg welcome-button">
					Get Welcome Message
				</button>
				<div className="container">
					{this.state.welcomeMessage}
				</div>
				<div id="carouselExampleIndicators" class="carousel slide container" data-ride="carousel" data-interval="1000" >
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img class="d-block w-100" src="https://free4kwallpapers.com/uploads/wallpaper/have-a-coffee-1024x768-wallpaper.jpg" alt="First slide" />
							<div class="carousel-caption d-none d-md-block">
								<h5>Coffee Morning</h5>
								<p>Start your day from a cup of coffee</p>
							</div>
						</div>
						<div class="carousel-item ">
							<img class="d-block w-100" src="https://wallpaperfx.com/view_image/amazing-green-forest-1024x768-wallpaper-15616.jpg" alt="Second slide" />
							<div class="carousel-caption d-none d-md-block">
								<h5>Go for a walk</h5>
								<p>venenatis a condimentum vitae sapien pellentesque</p>
							</div>
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/2/25/Sea_Japan.jpg" alt="Third slide" />
							<div class="carousel-caption d-none d-md-block">
								<h5>Take a break</h5>
								<p> sit amet volutpat consequat mauris nunc congue nisi v</p>
							</div>
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		);
	}

	retrieveWelcomeMessage() {
		// HelloWorldService.executeHelloWorldService()
		// 	.then(response => this.handleSuccessfulResponse(response))
		// .catch()

		// HelloWorldService.executeHelloWorldBeanService()
		// 	.then(response => this.handleSuccessfulResponse(response))

		HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
			.then(response => this.handleSuccessfulResponse(response))
			.catch(error => this.handleError(error))
	}

	handleSuccessfulResponse(response) {
		// console.log(response)
		// this.setState({welcomeMessage: response.data})
		this.setState({ welcomeMessage: response.data.message })

	}

	handleError(error) {
		// console.log(error.response)
		let errorMessage = '';

		// when the user is not authorized at all
		// response is null
		if (error.message) {
			errorMessage += error.message;
		}

		if (error.response && error.response.data) {
			errorMessage += error.response.data.message;
		}

		this.setState({ welcomeMessage: errorMessage })

	}



}

export default WelcomeComponent