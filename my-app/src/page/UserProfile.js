import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UserInfo from "../component/UserInfo";
import { Card, Row, Col } from "react-bootstrap";
import GameInfo from "../component/GameInfo";

const UserProfile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const leagueInfo = useSelector((state) => state.user.leagueInfo);

  useEffect(()=>{
    console.log(userInfo);
    console.log(leagueInfo);
  }, [userInfo])
  const exampleUser = {
    name: "연장근무",
    profileIconUrl: "/img/icon.jpeg",
    soloRank: "Gold III",
    soloRankImage: "/img/EMERALD.jpeg",
    soloRankPoints: 75,
    soloWins: 100,
    soloLosses: 50,
    soloWinrate: 66,
    freeRank: "Gold V",
    code: "#KR1",
  };

  const exampleGames = [
    {
      name: "솔로랭크",
      result: "승리",
      gameTime: "20:30",
      championIcon:
        "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
      championLevel: 7,
      spell1Icon:
        "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerBarrier.png",
      spell2Icon:
        "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerFlash.png",
      kills: 10,
      deaths: 2,
      assists: 5,
      rating: 3.25,
      itemIcons: [
        "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png",
        "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/223116.png",
        "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/223110.png",
        "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/223085.png",
        "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/223089.png",
        "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/223078.png",
      ],
      championRunes1:
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
      championRunes2:
        "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png",
      friendlyMinions: [
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사1",
        ],
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사3",
        ],
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사3",
        ],
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사4",
        ],
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사5",
        ],
      ],
      enemyMinions: [
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사6",
        ],
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사7",
        ],
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사8",
        ],
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사9",
        ],
        [
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Aatrox.png",
          "소환사10",
        ],
      ],
    },
  ];

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
      <Row>
        <Col md={8} style={{ margin: "10px auto" }}>
          {exampleGames.map((game, index) => (
            <Card
              key={index}
              style={{ border: "1px solid black", margin: "10px" }}
            >
              <GameInfo game={game} />
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
