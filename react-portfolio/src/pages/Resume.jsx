export default function Resume() {
  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="content">
          <h2 className="title is-4">Resume</h2>
          <a
            href="/resume.pdf"
            download
            className="button is-link is-outlined mb-4"
          >
            Download My Resume
          </a>
          <h3 className="title is-5">Proficiencies</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Node.js, Express</li>
            <li>PostgreSQL, MySQL</li>
            <li>REST APIs, GraphQL</li>
            <li>Git, Vite, Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
