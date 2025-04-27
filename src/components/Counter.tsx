import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("Клик! Текущий count (внутри обработчика):", count);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  console.log("Компонент Counter перерисован! Новое значение count:", count);

  return (
    <div>
      <h2>Счетчик</h2>
      {/* Отображаем текущее значение состояния */}
      <p>Текущее значение: {count}</p>

      {/* Добавляем кнопки и привязываем обработчики событий */}
      {/* onClick - это специальный prop для обработки кликов */}
      <button onClick={handleIncrement}>Увеличить (+)</button>
      <button onClick={handleDecrement} style={{ marginLeft: "10px" }}>
        Уменьшить (-)
      </button>
    </div>
  );
};

export default Counter;