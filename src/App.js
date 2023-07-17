import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect } from 'react';
import { useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';
import {Routes,Route} from 'react-router-dom';
import SearchedHouse from './components/SearchedHouse';




function App() {




  let [allHouses,setAllHouses] = useState([]);




  useEffect( () => {
    async function getHousesInfo(){
      let resp = await fetch('houses.json');
      let data = await resp.json();
      console.log(data);
      setAllHouses(data);
    }
    getHousesInfo();
  },[]);




  return (
    <div className="App">
      {/* <h1> Hello World!</h1> */}
      <Header/>
      <SearchFilter houses={allHouses}/>
     


{/* Routing */}
    <Routes>
      <Route path ="/" element={<House houses={allHouses}/>} />
      <Route path="searchresults/:county" element={<SearchResults houses={allHouses}/>} />
      <Route path="searchedhouse/:id" element={<SearchedHouse houses={allHouses}/>} />
    </Routes>
    </div>
  );








}




export default App;