import React, { useEffect, useState } from 'react'
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";
import UpdateTodo from "./UpdateTodo";
// import sum from "../../public/light.png"

const Home = () => {
  const [theme, setTheme] = useState('light')

  const [todo, setTodo] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState("");

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

  const handleTheme = (e) => {
    e.preventDefault();
    if (theme === 'light') {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }

  const checkTheme = () => {
    if (theme === 'light') {
      return true
    }
    else {
      return false
    }
  }
  return (
    <div className={`overflow-hidden bg-${checkTheme() ? 'light' : 'dark'}`} style={{minHeight: "100vh"}}>
      <nav className={`navbar navbar-dark d-flex justify-content-between align-items-center px-3 bg-${checkTheme() ? 'dark' : 'secondary'}`}>
        <img style={{ height: '100px' }} src="/My Notes-logos_white.png" alt="My Notes" />
        <div className='d-flex justify-content-between gap-3'>
          <div>
            <input
              className="form-control mr-sm-2"
              name="search"
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button className={`bg-${checkTheme() ? 'dark' : 'secondary'} border border-2 border-white rounded-circle`} onClick={handleTheme}>
            {
              checkTheme() ?
                <img src="/light.png" alt="Sun for Light theme" width="25px" className='rounded-circle' />
                :
                <img src="/moon.png" alt="Moon for Dark theme" width="25px" className='rounded-circle' />
            }
          </button>
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
      <CreateTodo todo={todo} setTodo={setTodo} ShowAlert={ShowAlert} checkTheme={checkTheme} />
      <UpdateTodo
        editText={editText}
        setEditText={setEditText}
        todo={todo}
        setTodo={setTodo}
        ShowAlert={ShowAlert}
        checkTheme={checkTheme}
      />
      <div className="row justify-content-center">
        <h1 className="">
          {todo.length === 0 && "No Notes Found"}
        </h1>
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
                theme={theme} checkTheme={checkTheme}
              />
            );
          })}
      </div>
      <button
        type="button"
        className={`btn btn-${checkTheme() ? 'dark' : 'secondary'} rounded-circle shadow-sm p-0`}
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
  )
}

export default Home