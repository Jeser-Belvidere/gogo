import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";

function App() {
  const userFriendlyAddress = useTonAddress();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mazal</h1>
      <TonConnectButton />
      <span>{"Address " + userFriendlyAddress}</span>
    </>
  );
}

export default App;
