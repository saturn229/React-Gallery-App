import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom';


//App Components
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm';
import PicList from './Components/PicList';


function App() {
    const [pics, setPics] = useState([]);
    const [query, setQuery] = useState("flowers");
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true);
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=07ff50a646c0e3bcd3901f45b3f4ca8b&tags=${query}&per_page=24&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
        .then(res => res.json())
        .then(resData => {
            setPics(resData.photos.photo);
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
        });
    }, [query]);

    const handleQueryChange = searchText => {
        setQuery(searchText);
    }

    

    return (
        <BrowserRouter>
            <div className='container'>
                <SearchForm changeQuery={handleQueryChange}/>
                <Nav />
                {
                    (loading)
                    ? <p>loading...</p>
                    : <PicList data={pics}/>
                }
                
            </div>

        </BrowserRouter>
    )

}


export default App;