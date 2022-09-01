import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("deepskyblue");
  const styles = {
    backgroundColor: color,
  };

  const INITIAL_COLOR_LIST = ["deepskyblue", "orange", "plum"];
  const [colorList, SetColorList] = useState(INITIAL_COLOR_LIST);
  return (
    <div>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter a color" />
      {/* Copy thr colorList & add the newColor to it */}
      <button onClick={() => SetColorList([...colorList, color])}>AddColor</button>

      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
