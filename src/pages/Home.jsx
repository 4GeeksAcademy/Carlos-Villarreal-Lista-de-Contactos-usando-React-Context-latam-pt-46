import { useReducer } from "react";

function reducer(state, action) {
	switch(action.type) {
		case "UPDATE_TODO_INPUT": {
			return {
				...state,
				inputTodo: "Esta es una tarea"
			}
			//default:
				throw new Error("Action not available in reducer: ${action.type}")
		}
	}
}

function initialValue() {
	return {
		todos: [],
		inputTodo: ""
	}
}
export const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialValue())
	return (
		<div className="text-center mt-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-6">
						<div className="flex">
							<div className="mb-3">
								<label for="exampleFormControlInput1" className="form-label fs-1">Agrega un todo</label>
								<input 
									type="text" 
									className="form-control" 
									id="exampleFormControlInput1" 
									placeholder="Agregar contacto"
									value={state.inputTodo} 
									onChange={(event) => {
										dispatch({type: "UPDATE_TODO_INPUT"})
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-6">
						<ul className="list-group list-group-flush">
							{
								state.todos.map(() => {
									return <li className="list-group-item">An item</li>
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}; 