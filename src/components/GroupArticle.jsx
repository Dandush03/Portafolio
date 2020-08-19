import React from 'react';
import Article from './Article';

const json = require('../assets/articles.json');

json.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateB - dateA;
});

const Articles = json.map((a) => (
  <Article
    title={a.title}
    projectLink={a.projectLink}
    imgUrl={a.imgUrl}
    imgAlt={a.imgAlt}
    subTitle={a.subTitle}
    brief={a.brief}
    category={a.category}
    target={a.target}
    ghUrl={a.ghUrl}
    key={a.title}
  />
));
export default function ArticleGroup() {
  return (
    <div className="main-container project">
      <h2 className="title" id="projects">Projects</h2>
      {Articles}
    </div>
  );
}
