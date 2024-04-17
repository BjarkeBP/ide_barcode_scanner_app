import { useEffect, useState } from "react";
import Scanner from "./comps/scanner";
import barcodelookup from "./services/barcodelookup";

export default function App() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    if (scanResult) {
      barcodelookup(scanResult);
    }
  }, [scanResult]);

  function test() {
    barcodelookup("7622300683269");
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button onClick={test}>Click me</button>
      <Scanner setScanResult={setScanResult} />
      {scanResult ? <div>Success: {scanResult}</div> : <div></div>}
    </div>
  );
}
