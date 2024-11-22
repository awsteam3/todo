import React, { useState } from "react";
import './App.css';  // CSSファイルをインポート

function App() {
  const [tasks, setTasks] = useState([]);  // タスクを管理するためのstate
  const [newTask, setNewTask] = useState("");  // 新規タスクの入力内容を管理するstate

  // タスク追加の関数
  const addTask = () => {
    if (newTask.trim() === "") return;  // 空のタスクは追加しない
    const newTaskObject = { id: Date.now(), text: newTask, isCompleted: false };  // タスクオブジェクトを作成
    setTasks([...tasks, newTaskObject]);  // 既存のタスクリストに追加
    setNewTask("");  // 入力フィールドをクリア
  };

  // タスク完了のチェックを切り替える関数
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // タスクを削除する関数
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));  // 指定したid以外のタスクを残す
  };

  return (
    <div className="app-container">
      <h1 className="app-title">TODO 管理アプリ</h1>

      <div className="task-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="タスクを入力"
          className="task-input"
        />
        <button onClick={addTask} className="add-button">追加</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTaskCompletion(task.id)}
              className="task-checkbox"
            />
            <span
              className={`task-text ${task.isCompleted ? "completed" : ""}`}
            >
              {task.text}
            </span>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
