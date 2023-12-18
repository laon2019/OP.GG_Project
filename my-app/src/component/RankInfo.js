import React from "react";
import Image from "react-bootstrap/Image";

const RankInfo = ({ rank, rankImage, points, wins, losses, winrate }) => {
  return (
    <div style={{ padding: "10px", margin: "10px", display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "10px" }}>
        <Image
          src={rankImage}
          rounded
          style={{
            width: "80px",
            height: "80px",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", margin: "0 10px" }}>
        <p>티어 {rank}</p>
        <p>{points}P</p>
      </div>
    </div>
  );
};

export default RankInfo;