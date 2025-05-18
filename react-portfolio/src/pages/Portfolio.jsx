import Project from '../components/Project';

const projects = [
  {
    title: 'Weather Dashboard',
    image: '/images/weather.png',
    deployedLink: 'https://weather-dashboard-m4xd.onrender.com',
    repoLink: 'https://github.com/eholt19/Weather-Dashboard',
  },
  // Add more projects here
];

export default function Portfolio() {
  return (
    <section>
      <h2 className="title is-3">Portfolio</h2>
      <div className="columns is-multiline">
        {projects.map((project, idx) => (
          <Project key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
