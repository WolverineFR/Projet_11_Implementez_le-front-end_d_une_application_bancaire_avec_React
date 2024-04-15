import React from "react";
import IconCard from "../../components/IconCard";
import dataIcon from "../../data/dataIcon.json";

function Home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {dataIcon.map((data) => (
          <IconCard key={data.id} data={data} className />
        ))}
      </section>
    </main>
  );
}

export default Home;
