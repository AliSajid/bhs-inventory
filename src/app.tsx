import { Logo } from './logo';
import { NavBar } from './navbar';

export function App() {
  return (
    <>
      <Logo />
      <NavBar />
      <p>Hello Inventory</p>
      <p>
        <a
          class="link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </p>
    </>
  );
}
