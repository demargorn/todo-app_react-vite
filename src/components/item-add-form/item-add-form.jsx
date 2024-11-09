import { useState } from 'react';
import './item-add-form.css';

function ItemAddForm({ onAdded }) {
   const [label, setLabel] = useState('');
   const onLabelChange = (e) => setLabel(e.target.value);
   const onSubmit = (e) => {
      e.preventDefault();
      onAdded(label);
      setLabel('');
   };

   return (
      <form className='item-add-form d-flex' onSubmit={onSubmit}>
         <input
            type='text'
            className='form-control'
            onChange={onLabelChange}
            placeholder="What's next you want?"
            value={label} // контролируемый элемент
         />
         <button className='btn btn-outline-secondary'>Add Task</button>
      </form>
   );
}

export default ItemAddForm;
