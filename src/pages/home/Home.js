import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import create from "../../assets/icons/ai_create.png";
import RootLayout from "../../layout/RootLayout";
import "./Home.scss";
import CrewDetailsCard from "../../components/crewDetailsCard/CrewDetailsCard";
import { ROUTE_CONSTANTS } from "../../constants/routeConstants";
import { useState, useEffect } from "react";
import { getCrews } from "../../service/HomeService";

var crews = [
  {
    id: "1",
    name: "name",
    agents: ["agent1", "agent1", "agent1"],
    isReportSectionPresent: true,
  },
  {
    id: "2",
    name: "name",
    agents: ["agent1", "agent1", "agent1"],
    isReportSectionPresent: true,
  },
  {
    id: "3",
    name: "name",
    agents: ["agent1", "agent1", "agent1"],
    isReportSectionPresent: true,
  },
  {
    id: "4",
    name: "name",
    agents: ["agent1", "agent1", "agent1"],
    isReportSectionPresent: true,
  },
  {
    id: "5",
    name: "name",
    agents: ["agent1", "agent1", "agent1"],
    isReportSectionPresent: true,
  },
];

const PageWrapper = () => {
  const navigate = useNavigate();
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    (async () => {
      const crewList = await getCrews().catch((err) => console.log(err));
      setCrew(crewList);
    })();
    
  }, []);

  const redirectToCreateCrew = () => {
    navigate(ROUTE_CONSTANTS.CREW_PAGE);
  };

  const redirectToCrewInteraction = (id) => {
    navigate(`${ROUTE_CONSTANTS.CREW_PAGE}/:${id}`);
  };

  return (
    <>
      <Button
        className={"next-step-btn-wrapper p-2 mx-3 mt-3"}
        onClick={redirectToCreateCrew}
      >
        <img src={create} alt="create crew" className="w-100" />
      </Button>

      <div className="crewContainer col-12 d-flex flex-wrap">
        {crew.map((crew, index) => (
          <div
            key={index}
            className="col-4 d-flex justify-content-center mb-5 p-5 "
          >
            <CrewDetailsCard
              name={crew.name}
              agents={crew.agents}
              isReportSectionPresent={crew.isReportSectionPresent}
              id={crew.id}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Home = () => <RootLayout children={<PageWrapper />}></RootLayout>;

export default Home;
