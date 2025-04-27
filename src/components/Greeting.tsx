const Greeting = () => {
  const message = "Это мой первый компонент!";
  return (
    <div>
      <h2>Компонент Приветствия</h2>
      <p>{message}</p>{" "}
      {/* Используем фигурные скобки для вставки JS-выражения в JSX */}
    </div>
  );
};

export default Greeting;
