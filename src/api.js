import axios from "axios"

const BASE_URL ="https://api.themoviedb.org/3"

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThkOTk2OWQ1OGQ5NWE1Y2ExN2NjZjcwZTkwZjkxYyIsInN1YiI6IjY0YjI4MGM1MjNkMjc4MDEyNjE5ZWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohb45ijF-hRrspgcmraOO07Qe-3wHdP294TsHgsJvz8"

//confiration
const headers={

    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi=async(url,params)=>{
    try {
        const {data}=await axios.get(BASE_URL + url,{
            headers,
            params
        }) 
        return data;

    } catch (err) {
        console.log(err);
        return err;
    }
}