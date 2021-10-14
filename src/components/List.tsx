import React, { FC } from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List: FC<ListProps<any>> = ({ items, renderItem }) => {
  return <div>{items.map(renderItem)}</div>;
};

export default List;
