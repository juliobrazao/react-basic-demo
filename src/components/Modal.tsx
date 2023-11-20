import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App.context";

function TodoCard(props: any){

  const [isActive] = useState<string>(props.isActive ? 'success' : 'danger');
  return (
    <>
      <div className={`alert alert-${isActive}`}>
        { props.title }
      </div>
    </>
  )
};

export default function Modal(){
  
  const { title, showModal, handleToggleModal } = useContext(AppContext);
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/2/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      {showModal && (
        <div className={`modal${showModal ? ' fade show' : ''}`} tabIndex={-1} role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{ title }</h5>
              </div>
              <div className="modal-body h-75">
                { todos && todos.map(todo => <TodoCard isActive={todo.completed} title={todo.title} />)}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleToggleModal}>
                  Close
                </button>
                {/* Additional buttons or actions can be added here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
