import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="has-background-primary p-4">
      <div className="container is-flex is-justify-content-space-between is-align-items-center">
        <h1 className="title has-text-white m-0">Emily Holt</h1>
        <Navigation />
      </div>
    </header>
  );
}
