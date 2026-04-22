import { useState } from "react";
import { activities } from "../data/activities";
import ActivityCard from "./ActivityCard";
import ActivityModal from "./ActivityModal";

function Activities() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="activities" style={{ marginTop: "3rem" }}>
      <h2>Activities</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {activities.map((item, i) => (
          <ActivityCard key={i} item={item} onClick={setSelected} />
        ))}
      </div>

      {selected && (
        <ActivityModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default Activities;