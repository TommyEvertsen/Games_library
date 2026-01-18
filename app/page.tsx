"use client";

import Card from "./components/Card";

export default function Home() {
  return (
    <div className="homeWrapper h-full mx-14">
      <div className="homeGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
        <div className="col1 ">
          <Card title="Chrono trigger" />
        </div>
        <div className="col1">
          <Card title="Chrono trigger" text="Gurkemeie" />
        </div>
        <div className="col1">
          <Card title="Chrono trigger" />
        </div>
      </div>
    </div>
  );
}
