import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hello from "../Components/Hello";
import { useState, useEffect } from "react";
import Activity from "../Components/Activity";
import SessionsDuration from "../Components/SessionsDuration";
import Performance from "../Components/PerformanceRadar";
import PerformanceScore from "../Components/PerformanceScore";
import InformationCards from "../Components/Information";
import CaloriesIcon from "../icons/calories.png";
import CarbsIcon from "../icons/carbs.png";
import ProteinIcon from "../icons/protein.png";
import FatIcon from "../icons/fat.png";

import getData from "../API/Api";
import { useParams, useNavigate } from "react-router-dom";

/**
 * Function getting datas from getData and applying it to each component
 * @param {number} id - user ID
 * @param {string} categorie - Data category for each component
 * @returns promise
 * @returns Dashboard page with all components and the right data depending on the user
 */

export default function Dashboard() {
  const { id } = useParams();
  const { categorie } = useParams();
  const navigate = useNavigate();
  const [userMain, setUserMain] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userSessions, setUserSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();

  useEffect(() => {
    getData(id, categorie).then((data) => {
      if (typeof data !== "undefined") {
        setUserMain(data);

        getData(id, "activity").then((data) => {
          // /** Allows the Xaxis of the chart to start from 1 */
          const sessions = data.sessions.map((item, index) => ({
            ...item,
            xaxis: index + 1,
          }));
          setUserActivity({ ...data, sessions });
        });

        getData(id, "average-sessions").then((data) => setUserSessions(data));

        getData(id, "performance").then((data) => setUserPerformance(data));
      } else {
        navigate("/Error");
      }
    });
  }, [id, categorie, navigate]);

  if (!userMain || !userActivity || !userSessions || !userPerformance) {
    return null;
  }

  /**
   * Data for the Information Cards
   * @type {array} informations needed for all four cards
   * @returns array
   */

  const informations = [
    {
      icon: CaloriesIcon,
      quantity: userMain?.calorie,
      type: "Calories",
    },
    {
      icon: ProteinIcon,
      quantity: userMain?.proteine,
      type: "Protéines",
    },
    {
      icon: CarbsIcon,
      quantity: userMain?.glucide,
      type: "Glucides",
    },
    {
      icon: FatIcon,
      quantity: userMain?.lipide,
      type: "Lipides",
    },
  ];

  return (
    <>
      <Header />
      <section className="personalInfo">
        <Footer />

        <Hello name={userMain?.firstName} />
        <section className="stats">
          <div className="mainStats">
            <Activity userActivity={userActivity?.sessions} />
            <SessionsDuration userSessions={userSessions?.sessions} />
            <Performance userPerformance={userPerformance?.data} />
            <PerformanceScore userMain={userMain?.score} />
          </div>
          {/* Created a card for each type from the "informations" const */}
          <aside className="informationCards">
            {informations.map((props) => (
              <InformationCards {...props} key={props.type} />
            ))}
          </aside>
        </section>
      </section>
    </>
  );
}
