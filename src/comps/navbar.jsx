import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="/ide_barcode_scanner_app">Scanner</Link>
        </li>
        <li>
          <Link to="/ide_barcode_scanner_app/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
}
