import React, { useEffect, useState } from "react";
import AnimatedTree from "../animations/AnimatedTree";
import { initSvg } from "../helpers";

async function AnimatedTreeFunction() {
  let canvas = initSvg();
  let animatedTree = new AnimatedTree(canvas);
  return await animatedTree;
}

function Tree() {
  const [addValue, setAddvalue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [deleteValue, setDeleteValue] = useState("");
  const [animatedTree, setAnimatedTree] = useState(null);

  useEffect(() => {
    AnimatedTreeFunction().then((data) => setAnimatedTree(data));
    return () => {
      document.querySelectorAll("svg").forEach((el) => el.remove());
    };
  }, []);

  const handleAddValue = async () => {
    if (animatedTree) {
      animatedTree.insert(addValue);
      animatedTree.updateCoordinates();
      await animatedTree.animateToCoordinates();
    }
  };

  const handleSearchValue = () => {
    const response = animatedTree.find(searchValue);
    if (response) {
      console.log("Нашлось!", response);
    } else console.log("Не найдено");
  };

  const handleDeleteValue = async () => {
    const response = animatedTree.remove(deleteValue);
    console.log("Я сделал", animatedTree, response);
    animatedTree.updateCoordinates();
    await animatedTree.animateToCoordinates();
  };

  return (
    <>
      <div>
        <label>
          введите значение нового элемента дерева
          <input type="number" onChange={(e) => setAddvalue(e.target.value)} />
        </label>
        <button onClick={handleAddValue}>добавить элемент</button>
      </div>
      <div>
        <br />
        <label>
          введите значение для поиска
          <input
            type="number"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
        <button onClick={handleSearchValue}>Найти</button>
      </div>
      <div>
        <br />
        <label>
          Введите значение для удаления
          <input
            type="number"
            onChange={(e) => setDeleteValue(e.target.value)}
          />
        </label>
        <button onClick={handleDeleteValue}>Удалить</button>
      </div>
    </>
  );
}

export default Tree;
