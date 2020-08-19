import React from 'react';
import PropTypes from 'prop-types';

// Component
import Img from '../containers/Img';

export default function Article({
  projectLink, title, imgUrl, imgAlt, subTitle, brief, category, target, ghUrl,
}) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const path = require(`../assets/images/${imgUrl}`);
  return (
    <article className="projects col-1">
      <div className="project-img col-md-2 col-1">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <figure>
            <div>
              <h5>{title}</h5>
            </div>
            <Img imgUrl={path} imgAlt={imgAlt} />
          </figure>
        </a>
      </div>
      <div className="project-info col-md-2 col-1">
        <div>
          <div className="brief">
            <h5 className="title">{subTitle}</h5>
            <span>
              <span>Brief:</span>
              {brief}
            </span>
          </div>
          <div className="category">
            <h5>{category}</h5>
          </div>
          <div className="targets">
            <span>
              <span>The targets: </span>
              <span>{target}</span>
            </span>
          </div>
          <div className="click">
            {ghUrl
              ? <a href={ghUrl}>Click Here to See Full Description</a>
              : <a href={ghUrl}>This is a Private Project</a>}
          </div>
        </div>
      </div>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  ghUrl: PropTypes.string,
};

Article.defaultProps = {
  ghUrl: null,
};
