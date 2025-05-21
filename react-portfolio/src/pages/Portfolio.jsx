import Project from '../components/Project';

const projects = [
  {
    title: 'Weather Dashboard',
    image: '/weather.png',
    deployedLink: 'https://weather-dashboard-m4xd.onrender.com',
    repoLink: 'https://github.com/eholt19/Weather-Dashboard',
  },
  {
    title: 'Kanban Board',
    image: '/kanban.png',
    deployedLink: 'https://kanbanboard-suje.onrender.com',
    repoLink: 'https://github.com/eholt19/KanbanBoard',
  },
  {
    title: 'Employee Tracker',
    image: '/employeeTracker.png',
    repoLink: 'https://github.com/eholt19/Employee_Tracker',
  },
  {
    title: 'Employee Payroll Tracker',
    image: '/payroll.png',
    deployed: 'Open Default Browser on index.html',
  },
  {
    title: 'GitHub Actions',
    image: '/gitHubActions.png',
    deployedLink: 'https://githubactions-d5f5.onrender.com/',
    repoLink: 'https://github.com/eholt19/GitHubActions',
  },
  {
    title: 'Vehicle Builder',
    image: '/vehicleBuilder.png',
    deployed: 'Terminal',
  },
];


export default function Portfolio() {
  return (
    <section className="section">
      <h2 className="title is-3">Portfolio</h2>
      <div className="columns is-multiline is-centered">
        {projects.map((project, idx) => (
          <Project key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
