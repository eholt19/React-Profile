export default function Resume() {
  return (
    <section className="section" style={{ backgroundColor: 'lightyellow' }}>
      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className="title is-4">Resume</h2>
          <a href="/files/resume.pdf" download>Download My Resume</a>
          <h3 className="title is-5 mt-4">Proficiencies</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>REST APIs, GraphQL</li>
            <li>Git, Vite, Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
