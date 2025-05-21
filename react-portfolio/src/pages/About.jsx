export default function About() {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-half has-text-centered">
          <h2 className="title is-3">About Me</h2>
          <img
            src="/emi.png"
            alt="Emily Holt"
            style={{ maxWidth: '180px', borderRadius: '50%', marginBottom: '1rem' }}
          />
          <p>
            Hi! I’m Emily, a full-stack web developer and recent graduate of the University of Utah Coding Bootcamp.
            I transitioned into tech from a background in education, where I worked closely with students and led classroom instruction.
            I love building clean, functional web apps and I'm always looking to learn and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
