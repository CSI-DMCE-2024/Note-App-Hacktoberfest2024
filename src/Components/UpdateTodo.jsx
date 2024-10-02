import React from "react";

function UpdateTodo({ editText, setEditText, todo, setTodo, ShowAlert }) {
  const onChange = (e) => {
    const { value, name } = e.target;
    setEditText(() => {
      return {
        ...editText,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodo(
      todo.map((item) => {
        return item.id === editText.id ? editText : item;
      })
    );
    ShowAlert("Updated");
  };
  return (
    <form
      className="modal fade"
      id="updateNotes"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      onSubmit={onSubmit}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Todo
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={editText.title}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={editText.description}
                rows="3"
                onChange={onChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                value={editText.tag}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="due-date" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dueDate"
                name="dueDate"
                value={editText.dueDate}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-dark"
              data-bs-dismiss="modal"
              disabled={!editText.title}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateTodo;
