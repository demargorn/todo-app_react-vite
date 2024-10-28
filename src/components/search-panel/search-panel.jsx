import { useState } from 'react';
import './search-panel.css';

function SearchPanel({ onSearchChange }) {
   const [term, setTerm] = useState('');
   const searchChange = (e) => {
      setTerm(e.target.value);
      onSearchChange(term);
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
