import React from 'react';

const SearchBox = ({value, onChange, onSearch, placeholder = 'Type here'}) => {
   const handleInputChange = (e) => {
     const value = e.target.value;
     if (onChange) {
       onChange(value);
     }
     console.log(value);
   }
   return (
     <div>
       <input type='text' onChange={handleInputChange} value={value} placeholder={placeholder}/>
       <button onClick={onSearch}>
         Search
       </button>
     </div>
   )
}


export default SearchBox;
