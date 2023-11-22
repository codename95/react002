import  React,  { useEffect, useState } from "react";

function Home() {
  const [todos, setTodos] = useState([]);

  const [title, setNewTodo] = useState("");
  const [description, setDescription] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if(storedTodos){
     setTodos(storedTodos);
    }
  }, []);



  const handleAddTodo = (e) => {
    e.preventDefault();
    
    const mytodo = {
      title,
      description,
      isUrgent,
    };
  
    // Update the state with the new todo
    setTodos([...todos, mytodo]);
  
    // Clear the form fields after submission
    setNewTodo("");
    setDescription("");
    setIsUrgent(false);
  
    // Save todos to localStorage after updating the state
    saveTodosToLocalStorage();
  };
  

  const saveTodosToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  return (
    <div className="container">
        <div className="row justify-content-center">
        <h1 className="display-5 text-center m-bottom">TodoGram!</h1>
        </div>
      <div className="row justify-content-center">
        <div className="col-5">
          
          <div className="row m-bottom">
            <div className="pending-items ">
              <h3>Urgent Tasks</h3>
              <ul className="list-group">
              {todos.filter(o => o.isUrgent).map((todo) => (
                  <li key={todo.title} className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value="checked"
                      checked={todo.isUrgent}
                      onChange={() =>{}}
                    />
                    <label className="form-check-label">{todo.title}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row m-bottom">
            <div className="completed-items">
              <h3>Not So Urgent Tasks</h3>
              <ul className="list-group">
               {todos.filter(o => !o.isUrgent).map((todo) => (
                  <li key={todo.title} className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value="checked"
                      checked={todo.isUrgent}
                      onChange={() =>{}}
                    />
                    <label className="form-check-label">{todo.title}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-5">
          <form className="m-bottom">
          <h3>Hey! let's add todo items here!</h3>

            <div className="mb-3">
              <label className="form-label">Todo Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                Enter only smart titles 😊.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={isUrgent}
                onChange={() => setIsUrgent(!isUrgent)}
              />
              <label className="form-check-label">Is Urgent</label>
            </div>
            <div className="d-grid gap-2">
              <button
                onClick={handleAddTodo}
                className="btn btn-primary"
                type="button"
              >
                Save item
              </button>
            </div>
          </form>

          <div className="row m-bottom">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
