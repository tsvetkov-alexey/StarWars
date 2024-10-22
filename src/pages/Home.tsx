import { Pagination } from '@/UI/pagination';
import { AllCharacters } from '@/components/AllCharacters';
import { Filter } from '@/components/Filter';
import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import { SearchPhrase } from '@/components/SearchPhrase';
import { TitlePhrase } from '@/components/TitlePhrase';
import { selectFilter } from '@/redux/filter/slice';
import { useSelector } from 'react-redux';

export const Home = () => {
  const { isFetching, search } = useSelector(selectFilter);

  return (
    <>
      <Header />
      <main className="content">
        <section className="section container">
          <TitlePhrase />
          <Search />
          <Filter />
          {search ? <SearchPhrase /> : ''}
        </section>
        <AllCharacters />
      </main>
      {!isFetching ? <Pagination /> : ''}
    </>
  );
};
