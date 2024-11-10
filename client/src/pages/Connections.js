import React from "react";
import ConnectionForm from "../components/ConnectionForm";

function Connections() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Make a Connection</h2>
      <ConnectionForm />
    </div>
  );
}

export default Connections;
