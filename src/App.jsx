import { useEffect, useState } from "react";
import Scanner from "./comps/scanner";

export default function App() {
  const [scanResult, setScanResult] = useState(null);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (scanResult) {
      const newValue = points + 1;
      setPoints(newValue);
    }
  }, [scanResult]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <div className="flex justify-center">Points: {points}</div>
        <div>
          <Scanner setScanResult={setScanResult} />
        </div>
        {scanResult ? <div>Success: {scanResult}</div> : <div></div>}
      </div>
    </div>
  );
}
