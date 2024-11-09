function ItemStatusFilter({ filter, onFilterChange }) {
   const arrButtons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' },
   ];

   const buttons = arrButtons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
         <button
            type='button'
            className={`btn ${clazz}`}
            key={name}
            onClick={() => onFilterChange(name)}
         >
            {label}
         </button>
      );
   });
   return <div className='btn-group'>{buttons}</div>;
}

export default ItemStatusFilter;
