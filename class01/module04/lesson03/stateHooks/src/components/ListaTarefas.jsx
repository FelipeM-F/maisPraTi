import { useState } from "react";

function ListaTarefas() {
  const [text, setText] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      setTarefas([...tarefas, text]);
      setText("");
    }
  };

  const removerTarefa = (index) => {
    setTarefas((prevTarefas) => prevTarefas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={adicionarTarefa}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: "100%", height: "50px", overflowY: "auto", resize: "vertical" }}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ol style={{ paddingLeft: '20px' }}>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span>{index + 1}. {tarefa}</span>
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ListaTarefas;

