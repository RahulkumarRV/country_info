
import './App.css';
import React ,{useEffect, useState}from 'react';
import {
  Button
} from "@material-ui/core";

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setcountry] = useState('Asia Region')

  useEffect(() =>{
   
    const getCountriesData = async () =>{
      await fetch("https://restcountries.eu/rest/v2/region/Asia")
      .then((response) => response.json())
      .then((data) =>{
        const countries = data.map((country) =>(
          {
            name: country.name,
            capital: country.capital,
            flag: country.flag, 
            region: country.region,
            subregion: country.subregion, 
            population: country.population, 
            borders: country.borders,
            languages: country.languages
          }));

          
          setCountries(countries);
      });
    };
    getCountriesData();
  }, []);
  
  const refreshCountryData = async () =>{
    await fetch("https://restcountries.eu/rest/v2/region/Asia")
    .then((response) => response.json())
    .then((data) =>{
      const countries = data.map((country) =>(
        {
          name: country.name,
          capital: country.capital,
          flag: country.flag, 
          region: country.region,
          subregion: country.subregion, 
          population: country.population, 
          borders: country.borders,
          languages: country.languages
        }));
        setCountries(countries);
    });
  }
  return (
    <div className="App">
      <div className="left_side">
      {
              countries.map((country) =>(
                
                  <div className="country_info_container">
                    <div className="country_container_img">
                     <img className="country_img"  alt={country.flag} src={country.flag}></img>
                    </div>
                    <div className="country_container_info">
                      <h3 className="name">{country.name}</h3>
                     
                      <p>{"Population: " + country.population}</p>
                      <p>{"Region: " + country.region}</p>
                      <p>{"Subregion: " + country.subregion}</p>
                      <p>{"Capital: " + country.capital}</p>
                      <p>{"Population: " + country.population}</p>
                      <p>{"Languages: "+ country.languages.map(data =>(
                        (" " + data.name)
                      ))}</p>
                     
                     <p>{"Borders: " + country.borders}</p>
                    </div>
                  </div>
                
              ))
            }
      </div>
      <div className="right_side">
      <Button  variant="contained" color="primary" onChange={refreshCountryData}>
        SHOW
      </Button>
      </div>
    </div>
  );
}

export default App;
