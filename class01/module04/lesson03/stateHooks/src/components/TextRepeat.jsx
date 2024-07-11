import { useState } from "react";

function TextRepeat() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <form>
        <textarea
          value={text}
          onChange={handleChange}
          style={{ width: "100%", height: "100px", overflowY: "auto", resize: "none", wordWrap: "break-word" }}
        />
      </form>
      <p style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{text}</p>
    </div>
  );
}

export default TextRepeat;
