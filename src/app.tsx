import { Logo } from './logo';
import { NavBar } from './navbar';

export function App() {
  return (
    <>
      <div className="flex self-center">
      <NavBar />
      </div>
      <p className='text-center text-lg'>Hello Inventory</p>
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
