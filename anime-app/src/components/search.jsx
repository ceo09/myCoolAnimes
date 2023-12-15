"use client"
import { useState, useEffect } from "react";


const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    //console.log("Search value:", search);
    // You can perform additional actions here, like fetching data based on the search value
  };
  useEffect(() => {
    const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=60&search=${search}&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '714685b24cmshe2dc3655d4e352ep16f772jsn2766f3f047b9',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

const animeData = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const dataBase = result.data
        console.log(dataBase)
        
    } catch (error) {
        console.error(error);
    }
}
animeData()
  }, [search])

  return (
    <div className="bg-white w-full h-100px flex justify-center pt-6">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search anime"
          type="search"
          id="search"
          className="p-4 font-Poppins outline outline-2 outline-blue-500 md:w-[300px] w-[200px] h-[20px] md:[h-40px] bg-white text-black"
          value={search}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="md:w-[100px] w-[100px] h-[32px] md:h-[32px] bg-blue-500 text-white text-center"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
