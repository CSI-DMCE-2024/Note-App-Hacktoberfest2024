import React, { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";
import UpdateTodo from "./UpdateTodo";

const Home = () => {
  const colors = ["#ff9999", "#99ccff", "#9999ff", "#cc99ff", "#ff99ff"];
  const [navbarColor, setNavbarColor] = useState("#343a40");
  const [todo, setTodo] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState("");
  const changeNavbarColor = (color) => {
    setNavbarColor(color);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const [editText, setEditText] = useState({
    title: "",
    description: "",
    tag: "",
    date: "",
  });

  const ShowAlert = (s) => {
    setAlert("Todo has been successfully " + s);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };
  return (
    <div className="overflow-hidden">
      <nav
        className="navbar navbar-dark d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: navbarColor,
          transition: "background-color 0.3s",
        }}
      >
        <div className="d-flex align-items-center" style={{ flexShrink: 0 }}>
          <img
            style={{ height: "45px" }}
            src="/My Notes-logos_white.png"
            alt="My Notes"
          />
        </div>
        <div className="flex-grow-1 ms-3">
          <input
            className="form-control bg-dark text-light"
            name="search"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
            style={{ minWidth: "0" }}
          />
        </div>
        <div className="d-flex">
          {colors.map((color, index) => (
            <button
              key={index}
              className="btn rounded-circle mx-1"
              style={{
                backgroundColor: color,
                width: "30px",
                height: "30px",
                border: "none",
              }}
              onClick={() => changeNavbarColor(color)}
            ></button>
          ))}
        </div>
      </nav>
      {alert && (
        <div
          className="alert alert-success position-absolute start-50 translate-middle"
          style={{ zIndex: "500", top: "4vh" }}
        >
          {alert}
        </div>
      )}
      <CreateTodo todo={todo} setTodo={setTodo} ShowAlert={ShowAlert} />
      <UpdateTodo
        editText={editText}
        setEditText={setEditText}
        todo={todo}
        setTodo={setTodo}
        ShowAlert={ShowAlert}
      />
      <div className="row justify-content-center">
        <h1 className="">{todo.length === 0 && "No Notes Found"}</h1>
        {todo
          .filter((target) => {
            if (target.title.toLowerCase().includes(search.toLowerCase())) {
              return target;
            } else if (
              target.tag.toLowerCase().includes(search.toLowerCase())
            ) {
              return target;
            } else {
              return null;
            }
          })
          .map((target) => {
            return (
              <TodoItem
                key={target.id}
                target={target}
                editText={editText}
                setEditText={setEditText}
                todo={todo}
                setTodo={setTodo}
                ShowAlert={ShowAlert}
              />
            );
          })}
      </div>
      <button
        type="button"
        className="btn btn-dark rounded-circle shadow-sm p-0"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "50px",
          width: "60px",
          height: "60px",
        }}
        data-bs-toggle="modal"
        data-bs-target="#createNotes"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Home;
