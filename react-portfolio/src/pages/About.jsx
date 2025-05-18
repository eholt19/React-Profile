export default function About() {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-three-quarters has-text-centered">
          <h2 className="title is-3">About Me</h2>
          <img
            src="/path-to-your-photo.jpg"
            alt="Emily Holt"
            style={{ maxWidth: '150px', borderRadius: '50%', marginBottom: '1rem' }}
          />
          <p>
            Hi! I’m Emily, a full-stack web developer with a passion for building clean, functional, and engaging web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
