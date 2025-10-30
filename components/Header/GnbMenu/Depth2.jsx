import React from "react";

const Depth2 = ({ depth1 }) => {
  console.log("Depth2 depth1 👉", depth1);

  if (!depth1?.depth?.length) return null;

  return (
    <ul className="depth2-menu">
      {depth1.depth.map((depth2, depth2Idx) => {
        return (
          <li key={depth2Idx}>
            <a href={depth2.url}>{depth2.value}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Depth2;
