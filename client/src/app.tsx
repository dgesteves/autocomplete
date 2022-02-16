import React, { useEffect, useState } from "react";
import AutoComplete from "./components/autoComplete";
import fetchLocations from "./api";

function App() {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    fetchLocations()
      .then((locations) => setOptions(locations))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container" data-testid="app">
      <AutoComplete options={options} />
    </div>
  );
}

export default App;
