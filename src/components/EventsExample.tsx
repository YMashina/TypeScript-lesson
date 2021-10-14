import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  DragEvent,
  useState,
  useRef,
} from "react";
import * as events from "events";

const EventsExample: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isDraggedInto, setIsDraggedInto] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clickHandler = (event: MouseEvent) => {
    console.log(inputValue);
    console.log(inputRef.current?.value);
  };

  const dragHandler = (event: DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };

  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("drop!!!");
    setIsDraggedInto(false);
  };

  const dragLeaveHandler = (event: DragEvent<HTMLDivElement>) => {
    console.log("dragLeave");
    setIsDraggedInto(false);
  };

  const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggedInto(true);
    console.log("dragOver");
  };

  return (
    <div>
      <div>
        <input
          type={"text"}
          value={inputValue}
          onChange={changeHandler}
          placeholder={"controlled"}
        />
      </div>
      <div>
        <input type={"text"} ref={inputRef} placeholder={"uncontrolled"} />
      </div>

      <button onClick={clickHandler}>press me</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: "200px", height: "200px", background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        style={{
          width: "200px",
          height: "200px",
          background: isDraggedInto ? "red" : "blue",
          marginTop: "2rem",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
