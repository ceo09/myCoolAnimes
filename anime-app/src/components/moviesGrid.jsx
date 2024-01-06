//import Error from "next/error";
"use client"
// import necessary modules
import Image from "next/image";
//import MoviePage from "./moviePage";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
//import { ToastContainer, toast } from 'react-toastify';

const AnimeCard = (props) => {
  return (
      <div className="bg-white w-[200px] h-fit cursor-pointer rounded-sm">
        <Image src={props.img} height={"400"} width={"560"} alt="images" className="w-[200px] rounded-md h-[200px]" />
        <h1 className="text-blue-500 text-md font-bold text-left p-3">{props.title}</h1>
        <p className="text-blue-500 text-md font-bold text-left p-3">{props.synopsis}</p>
      </div>
  );
};

const AnimeGrid = () => {
  const [search, setSearch] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=3000&search=${search}&genres=Fantasy%2CDrama%2Action&sortBy=ranking&sortOrder=asc`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '714685b24cmshe2dc3655d4e352ep16f772jsn2766f3f047b9',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
          }
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const result = await response.json();
        const dataBase = result.data;
        setAnimeList(dataBase);
        setError(null);
        console.log(dataBase);
      } catch (error) {
        console.error(error);
        setAnimeList([]); // Clear the animeList in case of an error
        setError(`An error occurred while fetching data. Please try again later. !!!`);
        window.onoffline = function() {
          setError(`ERR_NETWORK: Currently Offline!`)
        };
        window.ononline = function() {
         }
      }
      setLoading(false)
    };

    fetchData();
  }, [search]);

  return (
    <div className="w-[full] min-h-screen max-h-fit bg-white pt-20">
      <div className="bg-white w-full h-100px flex justify-center pt-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // You can perform additional actions here, like fetching data based on the search value
          }}
        >
          <input
            placeholder="Search anime"
            type="search"
            id="search"
            className="p-4 font-Poppins outline outline-2 outline-blue-600 md:w-[400px] w-[200px] h-[20px] md:[h-60px] rounded-md bg-white text-black text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      {loading ? (
        <div className="w-full h-screen">
          <h1 className="text-center text-blue-500 text-2xl mt-20 font-bold">Loading...</h1>
        </div>
      ): error ? (
        <div className="grid justify-center">
          <div className="text-red-500 font-bold text-center p-3 bg-red-100 rounded-md w-fit h-fit m-3">
          {error}
          </div>
        </div>
      ) : (
        <div className="container grid md:grid-cols-5 gap-5 justify-center mt-10 p-10">
          {animeList && animeList.length > 0 ? (
            animeList.map((anime) => (
                <Link to={`/anime/${anime.id}`}>
                  <AnimeCard key={anime.id} img={anime.image} title={anime.title} />
                </Link>
            ))
          ) : (
            <div className="text-blue-500 text-center p-3 text-xl">No results found</div>
          )}
        </div>
      )
      }
    </div>
  );
};

export default AnimeGrid;
