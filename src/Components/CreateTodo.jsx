import React, { useState } from "react";

function CreateTodo({ todo, setTodo, ShowAlert }) {
  const [text, setText] = useState({
    title: "",
    description: "",
    tag: "",
    date: "",
    dueDate: "",
  });

  // const [dueDate, setDueDate] = useState("");

  // const handleDueDateChange = (e) => {
  //   setDueDate(e.target.value);
  // };

  const onChange = (e) => {
    const { value, name } = e.target;
    setText(() => {
      return {
        ...text,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        title: text.title,
        description: text.description,
        tag: text.tag,
        date: new Date().toLocaleDateString(),
        id: new Date().getTime().toString(),
        dueDate: text.dueDate,
      },
    ]);
    setText({
      title: "",
      description: "",
      tag: "",
    });
    ShowAlert("Saved");
  };
  return (
    <form
      className="modal fade"
      id="createNotes"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      onSubmit={submitHandler}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Todo
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
                value={text.title}
                onChange={onChange}
                autoComplete="off"
                required
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
                value={text.description}
                rows="3"
                onChange={onChange}
                autoComplete="off"
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
                value={text.tag}
                onChange={onChange}
                autoComplete="off"
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
                value={text.dueDate}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-dark"
              data-bs-dismiss="modal"
              disabled={!text.title}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateTodo;
