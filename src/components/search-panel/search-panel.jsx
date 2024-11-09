import { useState } from 'react';
import './search-panel.css';

function SearchPanel({ onSearchChange }) {
   const [term, setTerm] = useState('');
   const searchChange = (e) => {
      onSearchChange(term);
      setTerm(e.target.value);
   };

   return (
      <input
         className='form-control search-input'
         placeholder='Type here'
         type='text'
         value={term}
         onChange={searchChange}
      />
   );
}

export default SearchPanel;
