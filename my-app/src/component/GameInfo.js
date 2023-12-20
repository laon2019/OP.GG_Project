import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

const GameInfo = ({ game }) => {
  return (
    <Card.Body>
      <Row>
        <Col xs={12} md={2}>
          <div>{`${game.name}`}</div>
          <div>{`${game.result}`}</div>
          <div>{`${game.gameTime}`}</div>
        </Col>
        <Col xs={12} md={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ position: "relative", marginRight: "10px" }}>
              <Image
                src={game.championIcon}
                alt="Champion Icon"
                thumbnail
                style={{ width: "80px", height: "80px", padding: "0" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "black",
                  color: "white",
                  padding: "2px 7px",
                  fontSize: "12px",
                  borderRadius: "50%",
                }}
              ></div>
            </div>

            <Row>
              <Col xs={6}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ position: "relative"}}>
                    <Image
                      src={game.spell1Icon}
                      alt="Spell 1 Icon"
                      thumbnail
                      style={{ width: "35px", height: "35px", padding: "0" }}
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    <Image
                      src={game.spell2Icon}
                      alt="Spell 2 Icon"
                      thumbnail
                      style={{ width: "35px", height: "35px", padding: "0" }}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src={game.championRunes1}
                    alt="Rune 1 Icon"
                    thumbnail
                    style={{
                      width: "35px",
                      height: "35px",
                      marginBottom: "0px",
                      padding: "0",
                    }}
                  />
                  <Image
                    src={game.championRunes2}
                    alt="Rune 2 Icon"
                    thumbnail
                    style={{ width: "35px", height: "35px", padding: "0" }}
                  />
                </div>
              </Col>
            </Row>
            <div>
              <div>{`KDA: ${game.kills}/${game.deaths}/${game.assists}`}</div>
              <div>{`평점: ${game.rating}`}</div>
            </div>
          </div>

          <Row style={{ marginTop: "30px", marginLeft: "-5px", marginRight: "-5px" }}>
            {game.itemIcons.map((itemIcon, index) => (
              <Col xs={1} key={index} style={{ padding: "0" }}>
                <Image
                  src={itemIcon}
                  alt={`Item ${index + 1}`}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "5px",
                    padding: "0",
                  }}
                  thumbnail
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row>
            <Col xs={6}>
              {game.friendlyMinions.map((item, index) => (
                <Col key={index}>
                  <Image
                    src={item[0]}
                    alt={`Item ${index + 1}`}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "5px",
                      padding: "0",
                    }}
                    thumbnail
                  />
                  {item[1]}
                </Col>
              ))}
            </Col>
            <Col xs={6}>
              {game.enemyMinions.map((item, index) => (
                <Col key={index}>
                  <Image
                    src={item[0]}
                    alt={`Item ${index + 1}`}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "5px",
                      padding: "0",
                    }}
                    thumbnail
                  />
                  {item[1]}
                </Col>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Card.Body>
  );
};

export default GameInfo;
