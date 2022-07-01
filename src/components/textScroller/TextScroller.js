import React from "react";
import { useSpring, animated } from "react-spring";

export default function TextScroller({ text }) {
  const [key, setKey] = React.useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(60%,0" },
    to: { transform: "translate(-100%,0"},
    config: { duration: 10000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div
      key={key}
      className="hover:text-white text-xs hover:underline hover:underline-offset-6"
    >
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  );
}
