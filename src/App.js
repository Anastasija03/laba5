import React, { useState } from "react";
import "./App.css";

import Tree from "./components/Tree";
import BinaryTree from "./algorithms/BinaryTree";

const binaryTree = new BinaryTree();

function App() {
  const [type, setType] = useState(false);
  const [newValue, setNewValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [deleteValue, setDeletevalue] = useState("");

  const handleAddNewElement = () => {
    binaryTree.insert(newValue);
    console.log("Новый элемент добавлен", binaryTree);
  };

  const handleSearchValue = () => {
    const response = binaryTree.find(searchValue);
    if (response) {
      console.log("Нашлось!", response);
    } else console.log("не найдено");
  };

  const handleDeleteValue = () => {
    const response = binaryTree.remove(deleteValue);
    console.log("Я сделал", binaryTree, response);
  };
  return (
    <>
      <button onClick={() => setType(!type)}>
        {type ? "Дерево" : "Красно-черное дерево"}
      </button>
      <button onClick={() => console.log(binaryTree)}> вывести дерево</button>
      {!type && (
        <>
          <br />
          <div>
            <label>
              введите значение нового элемента дерева
              <input
                type="number"
                onChange={(e) => setNewValue(e.target.value)}
              />
            </label>
            <button onClick={handleAddNewElement}>
              Добавить новый элемент
            </button>
          </div>
          <br />
          <div>
            <label>
              введите значение для поиска
              <input
                type="number"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </label>
            <button onClick={handleSearchValue}>Найти</button>
          </div>
          <br />
          <div>
            <label>
              Введите значение для удаления
              <input
                type="number"
                onChange={(e) => setDeletevalue(e.target.value)}
              />
            </label>
            <button onClick={handleDeleteValue}>Удалить</button>
          </div>
        </>
      )}
      {type && <Tree />}
    </>
  );
}

export default App;
