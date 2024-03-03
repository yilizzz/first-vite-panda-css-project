import Header from "./components/header";
import Content from "./components/content";

import { useModeData } from "./context/modeContext.jsx";

function App() {
  const { modeData } = useModeData();

  return (
    <>
      <Header modeData={modeData} />
      <Content modeData={modeData} />
    </>
  );
}

export default App;
