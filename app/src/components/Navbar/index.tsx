import { Links } from "./utils";

import "./styles.css";

export function Navbar() {
  return (
    <nav>
      <img src="" alt="Logo de la pagina" />

      <ul>
        {Object.keys(Links).map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}
