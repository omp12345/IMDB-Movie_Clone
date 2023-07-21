import axios from "axios"

const BASE_URL ="https://api.themoviedb.org/3"

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2I1ODQxMDJiNmExYmMyMzJmMWNjOTZmNWE2MjBhMyIsInN1YiI6IjY0YTVlYjlmY2FlNjMyMDEwMjg3ZTQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrLorY1kURtlTAHzbVsV2YhQHPL1RtYV1LB7LmknEBs"

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