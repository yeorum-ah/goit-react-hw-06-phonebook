import { Contacts, SearchField } from './Filter.styled';
import { onFilter } from 'Redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const filterValue = event.target.value;
    console.log(filterValue);
    dispatch(onFilter(filterValue));
  };

  return (
    <Contacts>
      <SearchField
        type="text"
        placeholder="Search contacts..."
        onChange={handleInputChange}
      />
    </Contacts>
  );
};
