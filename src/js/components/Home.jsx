import { useState } from "react";




//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	function handleChange(event) {
		setInputValue(event.target.value)

	}
	function addTask(event) {
		if (event.key == "Enter") {
			setTodos([
				...todos, inputValue
			])
			setInputValue("")
		}
	}
	function deleteTask(id) {
		const newTodos = todos.filter((item, index) => index != id)
		setTodos(newTodos)
	}
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-7">

					<h1> To Do List </h1>
					<ul>
						<li>
							<input type="text"
								onChange={handleChange}
								value={inputValue}
								onKeyDown={addTask}
								placeholder="Whats do you need to do?" />
						</li>
						{
							todos.map((task, index) => (
								<li>
									{task}
									<span onClick={() => deleteTask(index)}>
										<i class="fa-solid fa-trash" ></i>
									</span>
								</li>
							))
						}

					</ul>
					<div> {todos.length} tasks</div>
				</div>
			</div>
		</div >
	);
};

export default Home;