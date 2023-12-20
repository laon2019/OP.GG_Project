import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RankInfo from "./RankInfo";
import { useSelector } from "react-redux";

const UserInfo = ({ user }) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const leagueInfo = useSelector((state) => state.user.leagueInfo);

  return (
    <div>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/profileicon/${userInfo.profileIconId}.png`}
              rounded
              style={{
                width: "120px",
                height: "120px",
                border: "1px solid black",
                margin: "10px", // 여백 추가
              }}
            />
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <h4 style={{ marginBottom: "5px" }}>{userInfo.name}</h4>
            <h4 style={{ color: "#808080", margin: "10px" }}>{user.code}</h4>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <Tabs defaultActiveKey="solo" id="rank-tabs" className="mb-3">
              <Tab eventKey="solo" title="솔로 랭크">
                <RankInfo
                  rankInfo={leagueInfo[1]}
                />
              </Tab>
              <Tab eventKey="free" title="자유 랭크">
                <RankInfo
                  rankInfo={leagueInfo[0]}
                />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserInfo;