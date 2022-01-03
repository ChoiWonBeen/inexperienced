import React, { useEffect } from "react";
import { TodoistApi } from '@doist/todoist-api-typescript';
import { useRecoilState, useSetRecoilState } from "recoil";

import "./TodoListComponent.scss";

const API_KEY = "ba36d45b618f5ff6b53db6ac4ca2ec400c23ff25";
const api = new TodoistApi(API_KEY);

export interface TodoListComponentProps {};

const TodoListComponent: React.FC<TodoListComponentProps> = (props) => {
  
  useEffect(() => {
    api.getTasks()
    .then((task) => {
      task.map(t => {
        return console.log(t)
      })
    })
    .catch((error) => console.log(error))
  }, [])
  
  return (
    <div>
      
    </div>
  );
}

export default TodoListComponent;