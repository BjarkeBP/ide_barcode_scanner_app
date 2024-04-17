import { useEffect, useState } from "react";
import Scanner from "../comps/scanner";
import { usePoints } from "../hooks/PointsProvider";

export default function ScannerPage({}) {
  const [scanResult, setScanResult] = useState(null);
  const { points, addPoints, removePoints } = usePoints(); // Corrected destructuring

  useEffect(() => {
    if (scanResult) {
      addPoints(1);
    }
  }, [scanResult]);

  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="mt-16 flex justify-center">Points: {points}</div>
        <div>
          <Scanner setScanResult={setScanResult} />
        </div>
        {scanResult ? <div>Success: {scanResult}</div> : <div></div>}
      </div>
    </div>
  );
}
