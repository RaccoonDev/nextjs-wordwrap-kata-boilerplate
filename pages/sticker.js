import { useState } from "react";
import styles from "../styles/Sticker.module.css";

export function wordwrap(text, width) {
  return text;
}

export default function Sticker() {
  const [text, setText] = useState("");
  const [width, setWidth] = useState(80);

  const changed = (e) => setWidth(e.target.value);

  const textChanged = (e) => setText(e.target.value);

  return (
    <div>
      <div className={styles.control}>
        Width: <input onChange={changed} type="number" value={width} />
        <p>Enter text here:</p>
        <div>
          <textarea onChange={textChanged} value={text} rows="15" cols="200" />
        </div>
      </div>
      <pre className={styles.sticker}>{wordwrap(text, width)}</pre>
    </div>
  );
}
