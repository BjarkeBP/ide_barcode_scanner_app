import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

export default function App() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        {scanResult ? (
          <div>Success: {scanResult}</div>
        ) : (
          <div id="reader" className="w-48 flex-col  items-center "></div>
        )}
      </div>
    </div>
  );
}
