import React, { createContext, useState } from 'react';
import alertify from 'alertifyjs'

const WordContext = createContext();

export const WordProvider = ({children}) => {

    const [dictionary,setDictionary] = useState([])

    const changeDictionary = (word) => {
        let dictionary;

        if (localStorage.getItem("dictionary") === null) {
            dictionary = [];
        } else {
            dictionary = JSON.parse(localStorage.getItem("dictionary"));
        }
        dictionary.push(word)

        localStorage.setItem("dictionary", JSON.stringify(dictionary));

        updateDictionary(word);
    }

    const updateDictionary = (word) => {
        if (dictionary === null) {
            setDictionary(
              [word]
            )
          } else {
            setDictionary(
              [...dictionary, word]
            )
          }
    }

    const removeWord = (elementKey) => {
        let removeElement = dictionary[elementKey]
    
        let filterState = dictionary.filter(word => word !== removeElement)
    
    
    
        setDictionary(
          filterState
        )
    
        afterRemoveStorage(filterState)
        alertify.notify('Word Deleted ❕','error')
    }
    
    const afterRemoveStorage = (filterState) => {
        localStorage.removeItem("dictionary");
        localStorage.setItem("dictionary", JSON.stringify(filterState));
    }

    const value = {
        changeDictionary,dictionary,setDictionary,removeWord
    } 

    
    return <WordContext.Provider value={value}> {children} </WordContext.Provider>
}

export default WordContext;