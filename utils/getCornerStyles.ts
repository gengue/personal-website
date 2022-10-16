type Props = {
  bg: string;
  border: string;
};

type Position = "top" | "bottom";

function getCornerStyles({ bg, border }: Props, pos: Position = "bottom") {
  let position;
  if (pos === "bottom") {
    position = {
      bottom: "-12px",
      right: "-12px",
      transform: "rotate(135deg)",
    };
  } else {
    position = {
      top: "-12px",
      left: "-12px",
      transform: "rotate(-45deg)",
    };
  }

  return {
    backgroundColor: bg,
    borderBottom: border,
    height: "23px",
    width: "23px",
    ...position,
  };
}

export default getCornerStyles;
