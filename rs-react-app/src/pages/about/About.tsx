import { ErrorButton } from '../../entities/ErrorButton';
import { Logo } from '../../entities/Logo';

export const About = () => (
  <div className="flex flex-col min-h-screen">
    <header className="bg-blue-500 h-56 flex items-center justify-evenly text-center text-white">
      <Logo />
      <ErrorButton />
    </header>
    <main className="flex justify-evenly h-32 text-7xl items-center">
      It is a test with about
    </main>
  </div>
);
