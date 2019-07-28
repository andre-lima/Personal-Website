import React from "react";
import Header from "./components/Header/Header";
import MainTitle from "./components/MainTitle/MainTitle";
import "./App.scss";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import SkillItem from "./components/SkillItem/SkillItem";

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <MainTitle />

      <div className="services">
        <h2 className="">
          I can help you with your software's Frontend needs.
          <ul>
            <li>Development</li>
            <li>maintenance</li>
            <li>bootstraping new applications</li>
            <li>support</li>
            <li>code quality and performance audits</li>
            <li>or anything you may need, really...</li>
          </ul>
          <a href="#">Click here to ask for a quote.</a>
        </h2>
      </div>

      <div className="skills">
        <h2>Expert in the following technologies and practices</h2>
        <SkillItem skillName="Angular 8+" />
        <SkillItem skillName="Javascript, Typescript and jQuery" />
        <SkillItem skillName="SASS, LESS" />
        <SkillItem skillName="Linux" />
        <SkillItem skillName="Good practices for a scalable product" />
        <SkillItem skillName="Web Acessibility" />
      </div>

      <div className="projects">
        <h2>
          Worked in apps and websites accessed worldwide by hundreds of
          thousands of users. Including...
        </h2>
        <ProjectItem projectName="AirFrance" />
        <ProjectItem projectName="Microportal" />
      </div>
    </main>
  );
};

export default App;
