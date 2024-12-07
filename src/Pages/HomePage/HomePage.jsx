import React from "react";
import Banner from "../../components/Banner/Banner"
import ProjectsList from "../../components/ProjectList/ProjectList";

const HomePage = () => {
  return (
    <main className="home">
      <Banner />
    <section id="ProjectList"> 
      <ProjectsList />
    </section> 
    </main>
  );
};

export default HomePage;
