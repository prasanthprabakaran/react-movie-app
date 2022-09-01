import { useState } from "react";

// props - properties - pass arguments to components
// hook - make react listen change
// hook - function - 'use' - useState
// const [state, setState] = useState(InitialValue);
// state - current value
// setState - function - update State - informing react that state
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  // onClick & all event listeners - camelCase
  // Task - build dislike button - dislike should increase
  return (
    <div className="counter-container">
      <button className="like-button" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>
      <button
        className="dislike-button"
        onClick={() => setDisLike(dislike + 1)}
      >
        👎 {dislike}
      </button>
    </div>
  );
}
