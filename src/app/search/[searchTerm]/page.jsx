// import Results from "@/components/Results";
import Results from "../../../components/Results";

const api_key=process.env.API_KEY;

export default async function page({params}) {
    const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${params.searchTerm}&language=en-US&page=16&include-adult=false`)
    const data=await res.json();
    const results=data.results;
    return (
    <div>
        {
            results && results.length == 0 && (
                <h1 className=" text-2xl text-center pt-6">No results found</h1>
            )
        }
        {
            results && <Results results={results} />
        }
        
    </div>
  )
}


