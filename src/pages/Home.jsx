import React from 'react';

// Components
import Loading from './Loading';
import { HeroInfo } from '../components';

export default function Home() {
  return (
    <>
      <Loading />
      <main className="col-1">
        <section className="col-1">
          <HeroInfo />
        </section>
        <section className="col-1">
          <div className="main-container project">
            <h2 className="title" id="projects">Projects</h2>
          </div>
        </section>
      </main>
    </>
  );
}
