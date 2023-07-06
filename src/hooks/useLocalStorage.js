import React from 'react';

function useLocalStorage(itemName, initialValue){
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    try{
        setTimeout(() => {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setLoading(false);
          setItem(parsedItem);
        }, 2000);

      } catch (error) {
        setLoading(false);
        setError(error);
      }

    }, []);
    
    // Actualiza tanto el estado como el localStorage
    const saveItem = (newItem) => {
      const stringifiedTodos = JSON.stringify(newItem)
      localStorage.setItem('TODO_LIST', stringifiedTodos)
      setItem(newItem)
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    }
}

export {useLocalStorage}