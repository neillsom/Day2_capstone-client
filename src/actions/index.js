export const fetchStylesFromApi = () =>{
	return () => {
		fetch(`http://localhost:8080/api/styles`)
		.then(response => response.json())
		.then(styles => console.log(styles))
		.catch(error => console.log(error))
	}
}
