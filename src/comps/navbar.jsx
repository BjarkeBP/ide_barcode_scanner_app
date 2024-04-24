import { Link } from "react-router-dom";
import { usePoints } from "../hooks/PointsProvider";

export default function Navbar() {
  const { points } = usePoints(); // Corrected destructuring if only using points

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-gray-800 text-white p-4 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/ide_barcode_scanner_app">Scanner</Link>
        </li>
        <li>
          <Link to="/ide_barcode_scanner_app/shop">Shop</Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <span>Points: {points}</span>
      </div>
    </nav>
  );
}
