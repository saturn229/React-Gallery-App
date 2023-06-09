import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom';
  import axios from 'axios';


//App Components
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm';
import PicList from './Components/PicList';
import apiKey from "./config.js";


function App() {
    const [beeImages, setBeeImages] = useState([])
    const [spaceImages, setSpaceImages] = useState([])
    const [artImages, setArtImages] = useState([])
    const [pics, setPics] = useState([]);
    const [query, setQuery] = useState("flowers");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleQueryChange(query);
        handleQueryChange("bees");
        handleQueryChange("space");
        handleQueryChange("art");
      }, [query]);

      const handleQueryChange = searchText => {
        let activeFetch = true;
        setLoading(true);
        setQuery(searchText);
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            if (activeFetch) {
              if (searchText === "bees") {
                setBeeImages(response.data.photos.photo)
              } else if (searchText === "space") {
                setSpaceImages(response.data.photos.photo);
              } else if (searchText === "art") {
                setArtImages(response.data.photos.photo);
              } else {
                setPics(response.data.photos.photo);
                setLoading(false);
              }
            }
          })
          .catch(error => {
            // handle error
            console.log("Error fetching and parsing data", error);
          });
        return () => { activeFetch = false };
      }

    

    return (
        <BrowserRouter>
            <div className='container'>
                <SearchForm changeQuery={handleQueryChange}/>
                <nav className='main-nav'>
                    <Nav />
                </nav>
                <div className="photo-container">
                
                    {
                        (loading)
                        ? <p>loading...</p>
                        : <PicList data={pics}/>
                    }
                
                <Switch>
                    <Route path="/" element={<Nav to={'/search'} />} />
                    <Route path="search" element={<PicList data={pics} query={query} />} />
                    <Route path="search/:searching" element={<PicList data={pics} query={query} />} />
                    <Route path="bees" element={<PicList data={beeImages} query="cats"/>} />
                    <Route path="space" element={<PicList data={spaceImages} query="dogs"/>} />
                    <Route path="art" element={<PicList data={artImages} query="computers" />} />
                </Switch>

                </div>
            </div>

        </BrowserRouter>
        
    )

}


export default App;