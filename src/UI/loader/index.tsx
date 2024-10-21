import st from './loader.module.scss';
import lightSaber from '@/assets/lightSaber.svg';

export const Loader = () => {
  return (
    <div className={st.loader}>
      <img width="70" height="70" src={lightSaber} loading="lazy" />
    </div>
  );
};
