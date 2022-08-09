import { BrowserRouter, Link } from 'react-router-dom';
export default function App({ name }) {
  return (
    <BrowserRouter>
      <header>
        <h2>navbar: {name}</h2>
        <nav>
          <ul>
            <li>
              <Link to="react">React</Link>
            </li>
            <li>
              <Link to="angular">Angular</Link>
            </li>
            <li>
              <Link to="vue">Vue</Link>
            </li>
            <li>
              <Link to="all">All Applications</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
}
