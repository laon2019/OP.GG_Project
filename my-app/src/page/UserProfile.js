import React from "react";
import { useSelector } from "react-redux";
import UserInfo from "../component/UserInfo";

const UserProfile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const exampleUser = {
    name: "SummonerName",
    profileIconUrl: "/img/icon.jpeg",
    soloRank: "Gold III",
    soloRankImage: "/img/gold.jpeg", 
    soloRankPoints: 75, 
    soloWins: 100, 
    soloLosses: 50, 
    soloWinrate: 66,
    freeRank: "Gold V",
    code: "#KR1",
  };
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          border: "1px solid black",
        }}
      >
        <UserInfo user={exampleUser} />
      </div>
    </div>
  );
};

export default UserProfile;