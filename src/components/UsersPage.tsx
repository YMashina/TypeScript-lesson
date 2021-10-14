import React, { FC, useCallback, useEffect, useState } from "react";
import { ITodo, IUser } from "./types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";
import { useHistory } from "react-router-dom";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = useCallback(async () => {
    try {
      const responce = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(responce.data);
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            user={user}
            key={user.id}
            onClick={() => history.push("/users/" + user.id)}
          />
        )}
      />
    </div>
  );
};

export default UsersPage;
