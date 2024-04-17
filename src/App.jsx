import { useState } from "react";
import Scanner from "./comps/scanner";

export default function App() {
  const [scanResult, setScanResult] = useState(null);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Scanner setScanResult={setScanResult} />
      {scanResult ? <div>Success: {scanResult}</div> : <div></div>}
    </div>
  );
}
