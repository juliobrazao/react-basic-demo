import { useContext } from "react"
import { AppContext } from "../App.context"

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar(){

  const menuItems: { name: string }[] = [
    {
      name: "Home"
    },
    {
      name: "About"
    },
    {
      name: "Contact"
    }
  ];

  const props = useContext(AppContext);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container">
          <a className="navbar-brand">My Context Demo</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              { menuItems.map(menuItem => <li className="nav-item"><a onClick={() => props.setTitle(menuItem.name)} className="nav-link">{menuItem.name}</a></li>)}
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={props.handleToggleModal}>Open Modal</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}