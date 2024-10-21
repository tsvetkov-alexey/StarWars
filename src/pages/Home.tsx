import { CharacterCard } from '@/components/CharacterCard';
import { Filter } from '@/components/Filter';
import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import { TitlePhrase } from '@/components/TitlePhrase';

export const Home = () => {
  return (
    <>
      <Header />
      <main className="content">
        <section className="section container">
          <TitlePhrase />
          <Search />
          <Filter />
        </section>
        <section className="section__cards container">
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </section>
      </main>
    </>
  );
};
