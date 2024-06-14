import Image from "next/image";

const api_key=process.env.API_KEY;

export default async function page({params}) {
    const MovieId=params.id;

    const res=await fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${api_key}`);
    
    const movie=await res.json();
    console.log(movie);

  return (
    <div className=" w-full">
        <div className=" p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
                
                    <Image
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path||movie.poster_path}`}
                        width={500}
                        height={300}
                        className="rounded-lg max-w-[100%] h-[100%]"
                    ></Image>
                
                <div className=" p-2">
                    <h2 className='text-lg font-bold mb-3'>{movie.title || movie.name}</h2>
                    <p className="text-lg mb-3">{movie.overview}</p>
                    <p className="mb-3">
                    <span className="font-semibold mr-1">Data releases :</span>
                    {movie.release_date || movie.first_air_date}
                    </p>
                    <p  className="mb-3">
                    <span className="font-semibold mr-1">Rating:</span>
                        {movie.vote_count}</p>
                </div>    
        </div>
        
    </div>
  )
}
