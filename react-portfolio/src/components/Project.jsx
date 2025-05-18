export default function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href={deployedLink} target="_blank" rel="noreferrer">
              <img src={image} alt={`${title} screenshot`} />
            </a>
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-5">{title}</p>
          <p>
            <a href={repoLink} target="_blank" rel="noreferrer">GitHub Repo</a>
          </p>
        </div>
      </div>
    </div>
  );
}
