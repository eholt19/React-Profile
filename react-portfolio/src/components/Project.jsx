export default function Project({ title, image, deployedLink, repoLink, deployed }) {
  return (
    <div className="column is-one-third">
      <div className="card" style={{ height: '100%' }}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <h3 className="title is-5">{title}</h3>
          <div className="buttons mt-3">
            {deployedLink && (
              <a
                href={deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button is-link is-small"
              >
                Live Demo
              </a>
            )}
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button is-dark is-small"
              >
                GitHub Repo
              </a>
            )}
            {!deployedLink && deployed && (
              <span className="tag is-warning is-light is-medium">{deployed}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
