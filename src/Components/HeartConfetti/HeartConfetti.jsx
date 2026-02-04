import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export const HeartConfetti = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={250}
      colors={["#ff4d6d", "#ff758f", "#ffd6e0", "#91001b","#f40934"]}
      drawShape={(ctx) => {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
        ctx.bezierCurveTo(-5, 3, 0, 5, 0, 7);
        ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
        ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
        ctx.fill();
      }}
    />
  );
}
