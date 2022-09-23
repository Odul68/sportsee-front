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

export default function Home() {
  const [user, setUser] = useState(null);

  const handleData = async () => {
    const promise = await fetch("http://localhost:3000/user/18");
    const res = await promise.json();

    setUser(res.data);
  };

  useEffect(() => {
    // Launch handleData function once at the start when the array is empty and fills it with all the information
    handleData();
  }, []);

  /**
   * Data for the Information Cards
   */

  const informations = [
    {
      icon: CaloriesIcon,
      quantity: user?.keyData?.calorieCount,
      type: "Calories",
    },
    {
      icon: ProteinIcon,
      quantity: user?.keyData?.proteinCount,
      type: "Protéines",
    },
    {
      icon: CarbsIcon,
      quantity: user?.keyData?.carbohydrateCount,
      type: "Glucides",
    },
    {
      icon: FatIcon,
      quantity: user?.keyData?.lipidCount,
      type: "Lipides",
    },
  ];

  return (
    <>
      <Header />
      <section className="personalInfo">
        <Footer />

        <Hello name={user?.userInfos?.firstName} />
        <section className="stats">
          <div className="mainStats">
            <Activity />
            <SessionsDuration />
            <Performance />
            <PerformanceScore />
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
