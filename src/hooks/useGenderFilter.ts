import { setAllGenders, setFemale, setMale, setNotAvailableGender } from '@/redux/filter/slice';
import { useAppDispatch } from '@/redux/store';

export const useGenderFilter = () => {
  const dispatch = useAppDispatch();

  const handleGenderChange = (gender: string) => {
    switch (gender) {
      case 'all':
        dispatch(setAllGenders(true));
        dispatch(setMale(true));
        dispatch(setFemale(true));
        dispatch(setNotAvailableGender(true));
        break;
      case 'male':
        dispatch(setAllGenders(false));
        dispatch(setMale(true));
        dispatch(setFemale(false));
        dispatch(setNotAvailableGender(false));
        break;
      case 'female':
        dispatch(setAllGenders(false));
        dispatch(setMale(false));
        dispatch(setFemale(true));
        dispatch(setNotAvailableGender(false));
        break;
      case 'N/A':
        dispatch(setAllGenders(false));
        dispatch(setMale(false));
        dispatch(setFemale(false));
        dispatch(setNotAvailableGender(true));
        break;
    }
  };

  return { handleGenderChange };
};
