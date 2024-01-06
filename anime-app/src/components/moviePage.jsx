"use client"
import Image from "next/image"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const MoviePage = () => {
    const params = useParams()
    const [anime, setAnime] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const url = `https://anime-db.p.rapidapi.com/anime/${params}`;
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
            setAnime(dataBase);
            console.log(dataBase);
          } catch (error) {
            console.error(error);
            setAnime([]); // Clear the animeList in case of an error
          }
        };
    
        fetchData();
      }, [params.id]);
    
    return (
        <div className="h-screen w-full bg-white justify-center">
            <div className="justify-center">
                <Image src={anime.image} width={300} height={300} className="w-[300px] h-[300px]" />
                <h2 className="text-left text-blue-600 font-bold p-3">{anime.title}</h2>
                <p className="text-blue-400 text-left p-3">{anime.synopsis}</p>
            </div>
        </div>
    )
}
export default MoviePage;