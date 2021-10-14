import React, { FC, useCallback, useEffect, useState } from "react";
import { IUser } from "./types";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

interface UserItemPageParams {
  id: string;
}

const UserItem: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const params = useParams<UserItemPageParams>();
  const history = useHistory();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const responce = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(responce.data);
    } catch (e) {
      alert(e);
    }
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          history.push("/users");
        }}
      >
        Back to list
      </button>
      <h3>User page of {user?.name}</h3>
      <div>{user?.email}</div>
      <div>
        {user?.address.city}, {user?.address.street}, {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItem;
