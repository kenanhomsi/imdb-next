import Results from "@/components/Results";

const api_key=process.env.API_KEY;
// export const dynamic ="force-dynamic"
export default async  function Home({searchParams}) {
  const genre=searchParams.genre || 'fetchTrending';
  const res= await fetch(`https://api.themoviedb.org/3${genre ==='fetchTopRated'?'/movie/top_rated':'/trending/all/week'}?api_key=${api_key}&language=en-US&page=1`,{next:{revalidate:100000}});
  const data= await res.json();

  if(! res.ok){
    throw new Error('failed to fetch data');
  }
  const results=data.results;
  return (
    <div className="">
        <Results results={results} />
      
    </div>
  )
}
