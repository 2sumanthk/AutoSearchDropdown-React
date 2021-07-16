import React, { useState } from "react";
import "./SearchBar.css";
import {debounce} from '../helper_functiions/debounce'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ toparent, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = debounce(() => saveInput());

  const handleler = (event)=>{
    const searchWord = event.target.value;
    console.log(searchWord)
    setWordEntered(searchWord);
    handleFilter();
  }

  const saveInput = ()=>{
    console.log(wordEntered)
      const newFilter = data.data.filter((value) => {
          return value.employee_name.toLowerCase().includes(wordEntered.toLowerCase());
      });
    if (wordEntered === "") {
      setFilteredData([]);

    } else {
      setFilteredData(newFilter);
    }
    console.log('Saving data')
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleClickItem = (e, SingleEmpData)=>{
    console.log("InChild", SingleEmpData)
    toparent(SingleEmpData)
    setFilteredData([]);
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input 
          type="text" 
          
          placeholder={"Search an Employee..."}
          value={wordEntered}
          onChange={(event)=>handleler(event)}
        />
        <div className="searchIcon">
          {filteredData?.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData?.length !== 0 && (
        <div className="dataResult">
          {filteredData?.slice(0, 5).map((value, key) => {
            return (
              <li className="dataItem" key={value.id} onClick={e => handleClickItem(e, value)}>
                <p>{value.employee_name}</p>
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
