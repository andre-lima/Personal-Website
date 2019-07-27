import React from "react";
import { Header } from "./components/Header/Header";
import { MainTitle } from "./components/MainTitle/MainTitle";
import "./App.scss";
import ProjectItem from "./components/ProjectItem/ProjectItem";

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <MainTitle />
      <div className="skills">
        <ProjectItem projectName="Angular" />
        <ProjectItem projectName="SASS, LESS" />
        <ProjectItem projectName="Typescript" />
        <ProjectItem projectName="jQuery" />
        <ProjectItem projectName="Linux" />
      </div>
      <div className="projects">
        <ProjectItem projectName="AirFrance" />
        <ProjectItem projectName="Microportal" />
      </div>
    </main>
  );
};

export default App;
