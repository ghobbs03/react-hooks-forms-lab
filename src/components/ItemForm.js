import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [item, setItem] = useState({
    name: "",
    category: ""
  });

  function handleNameChange(event) {
    const { name, value } = event.target;
    setItem((item) => ({...item, [name]: value}));
    console.log(item)

  }

  function handleCategoryChange(event) {
    const { category, value} = event.target;
    setItem((item) => ({...item, category: value}));
    
  }


  function handleSubmit() {
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: item.name,
      category: item.category,
    };

    onItemFormSubmit(newItem);

  }



  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={item.name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={item.category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
