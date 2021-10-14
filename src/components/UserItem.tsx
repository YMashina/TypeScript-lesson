import React, { FC } from "react";
import { IUser } from "./types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div>
      {user.id}. {user.name} lives in {user.address.city} on{" "}
      {user.address.street} street.
      <button onClick={() => onClick(user)}>--{">"}</button>
    </div>
  );
};

export default UserItem;
