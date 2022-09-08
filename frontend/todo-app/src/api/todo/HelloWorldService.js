import axios from "axios"

class HelloWorldService {
	executeHelloWorldService() {
		return axios.get('http://localhost:8080/hello-world');
		// console.log("executed service")
	}

	executeHelloWorldBeanService() {
		return axios.get('http://localhost:8080/hello-world-bean');
	}

	executeHelloWorldPathVariableService(name) {
		// let username = 'test123'
		// let password = 'test456'
		// let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
		return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
			// , {
			// 	headers: {
			// 		authorization: basicAuthHeader
			// 	}
			// }
		);
	}

}

export default new HelloWorldService()