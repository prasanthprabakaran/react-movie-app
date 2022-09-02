import { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";

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

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(dislike + 1);
  return (
    <div className="counter-container">
      <IconButton
        color="primary"
        onClick={incrementLike}
        aria-label="Like-button"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        color="warning"
        onClick={incrementDisLike}
        aria-label="DisLike-button"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
