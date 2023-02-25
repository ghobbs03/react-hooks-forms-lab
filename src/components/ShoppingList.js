import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterText, setFilterText] = useState("");
  


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });




  const [filteredItemsToDisplay, setFilteredItems] = useState([...itemsToDisplay]);


  function onItemFormSubmit(newItem) {
    setFilteredItems([...filteredItemsToDisplay, newItem])
  }


  function handleFilteredList(event) { 
    const text = event.target.value;
    setFilterText(text);

    const arrayState = (itemsToDisplay.filter((item) => (item.name.toLowerCase().includes(text.toLowerCase()) )));
    
    if (arrayState === []) {
      setFilteredItems([...itemsToDisplay])

    } else {
      setFilteredItems([...arrayState]);
    }
  
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={filterText} onSearchChange={handleFilteredList}/>
      <ul className="Items">
        {filteredItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
