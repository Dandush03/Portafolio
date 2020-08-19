import React from 'react';

// Components
import Loading from './Loading';
import { HeroInfo, GroupArticle, Footer } from '../components';

export default function Home() {
  return (
    <>
      <Loading />
      <main className="col-1">
        <section className="col-1">
          <HeroInfo />
        </section>
        <section className="col-1">
          <GroupArticle />
        </section>
        <Footer />
      </main>
    </>
  );
}
