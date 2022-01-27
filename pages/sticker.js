import { useState } from "react";
import styles from "../styles/Sticker.module.css";

/*
Word Wrap Function - The function returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the column number. You try to break lines at word boundaries.
Like a word processor, break the line by replacing the last space in a line with a newline.

wordwrap("This is some kind of a longlonglonglong text", 10) = "This is\nsome kind\nof a\nlonglonglo\nnglong\ntext"
*/

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
