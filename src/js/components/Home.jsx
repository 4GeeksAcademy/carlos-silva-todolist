import React, { useState } from "react";




//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>MY TODOS{inputValue} </h1>
			<ul>
				<li>
					<input type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {if(e.key === "Enter"){
						setTodos(todos.concat([inputValue]));
						setInputValue("");
					} }}
						placeholder="Whats do you need to do?" />
				</li>

				
				{
					todos.map( (t) => {
						<li> 
						  {t} <i class="fa-solid fa-trash" onClick={() => setTodos(todos.filter((element, index) => element != t )) }></i>
							</li>

					}

					)
				}
			</ul>
           <div>23 tasks</div>

		</div >
	);
};

export default Home;