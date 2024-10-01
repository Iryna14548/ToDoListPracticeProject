import './App.css';

function App() {
    return (
        <>
            <h1>ToDo Input</h1>
            <div>
                <input
                    type="text"
                    id="newToDo"
                    name="newToDo"
                    required
                    placeholder="New ToDo"
                    className="todo-input"
                />
                <button className="todo-input__button">Button</button>
            </div>
        </>
    );
}

export default App;
