import { useState } from "react";




//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	function handleChange(event) {
		setInputValue(event.target.value)

	}
	function addTask(event){
         if (event.key=="Enter"){
			setTodos([
				...todos, inputValue
			])
		 }
	}
	function deleteTask (id) {
		const newTodos = todos.filter((item, index) => index != id )
		setTodos (newTodos)
	}
	return (
		<div className="container">
			<h1>MY TODOS </h1>
			<ul>
				<li>
					<input type="text"
						onChange={handleChange}
						value={inputValue}
                        onKeyDown={addTask}
						placeholder="Whats do you need to do?" />
				</li>
                {  
				  todos.map( (task, index) => (
					    <li>
							{task} 
							<span onClick={() => deleteTask (index) }>
								<i class="fa-solid fa-trash" ></i>
							</span> 
					   </li>
				  ) )
				}
           				
		
					
			
			</ul>
			<div>23 tasks</div>

		</div >
	);
};

export default Home;