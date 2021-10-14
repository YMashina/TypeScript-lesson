import React from "react";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import CardsPage from "./components/CardsPage";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";

const App = () => {
  return (
    <div>
      TypeScript: Props, Events, Router, Hooks, Requests.
      <BrowserRouter>
        <div>
          <div>
            <div>
              <NavLink to={"/users"}>Users</NavLink>
            </div>
            <div>
              <NavLink to={"/todos"}>Todos</NavLink>
            </div>
            <div>
              <NavLink to={"/cards"}>Cards & Inputs</NavLink>
            </div>
          </div>

          <Route path={"/users"} exact>
            <UsersPage />
          </Route>
          <Route path={"/todos"} exact>
            <TodosPage />
          </Route>
          <Route path={"/cards"} exact>
            <CardsPage />
            <EventsExample />
          </Route>
          <Route path={"/users/:id"} exact>
            <UserItemPage />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
