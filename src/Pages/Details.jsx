import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {key} from '../Request'
import {AiOutlinePlus, AiOutlineShareAlt} from 'react-icons/ai'
import {BsFillHandThumbsUpFill} from 'react-icons/bs'

const Details = () => {
    const params = useParams();
    const [moviedetail, setMoviesDetail] = useState(null);
    
    const fetchMovie = async () => {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`)
            const data = await response.json();
            setMoviesDetail(data);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchMovie();
    },[])

    console.log(moviedetail)

  return (
    <div className='w-100% h-[100%] bg-black text-white'>
        <div className='max-w-[1280px] w-100% mx-auto'>
            {
                <div key={moviedetail?.id} className='flex flex-col md:flex-row'>
                    <div className='w-[100%] md:p-3'>
                        <img src={`https://image.tmdb.org/t/p/original${moviedetail?.backdrop_path}`} className='w-[100%]' alt="" />
                    </div>
                    <div className='mt-[20px] md:mt-0 px-2 w-[100%]'>
                        <h1 className=' text-[1.5rem] font-bold text-[#e50914]'>{moviedetail?.title}</h1>
                        <div className='my-2'>
                            {moviedetail?.genres.map((g)=>(
                                <div key={g.id} className='px-2 inline-block mr-3 text-xl rounded border-white border-[1px]'>
                                    {g.name}
                                </div>
                            ))}
                        </div>
                        {/* <div>
                            <span className='text-gray-500 font-bold cursor-pointer'>Original Title :- </span>{moviedetail.original_title}<br/>
                            <span className='text-gray-500 font-bold cursor-pointer'>Popularity : -</span>{moviedetail.original_title}
                        </div> */}
                        <div className='flex items-center justify-between my-2'>
                            <h3 className='text-[#A6F700]'>Ratings:{moviedetail?.vote_average}</h3>
                            <h3 className='text-[#e50914] border-white rounded border-[1px] px-2'>{moviedetail?.status}</h3>
                        </div>
                        <p className='w-[98%] md:w-[70%]'>
                            {moviedetail?.overview}
                        </p>
                        <div className='flex gap-10 px-4 my-4'>
                            <div className='cursor-pointer flex flex-col items-center justify-center'>
                                <AiOutlinePlus size={25}/>
                                <span>Plus</span>
                            </div>
                            <div className='cursor-pointer flex flex-col items-center justify-center'>
                                <BsFillHandThumbsUpFill size={25}/>
                                <span>Rate</span>
                            </div>
                            <div className='cursor-pointer flex flex-col items-center justify-center'>
                                <AiOutlineShareAlt size={25}/>
                                <span>Share</span>
                            </div>
                        </div>
                        
                        {/* <div className='flex border-white border-[1px] items-center justify-center'>
                            {moviedetail?.production_companies.map((e)=>(
                                <div key={e.id} className='border-[1px] border-white'>
                                    <img className='w-[150px]' src={`https://image.tmdb.org/t/p/original${e.logo_path}`} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className='text-[1rem] md:text-xl'><span className='text-[#e50914]'>Budget:-</span> ${moviedetail?.budget}</div> */}

                    </div>
                </div>
            }
        </div>

    </div>
  )
}

export default Details


// {
//     "adult": false,
//     "backdrop_path": "/zcySy6dnSmyqiichtDgO7AEeZoq.jpg",
//     "belongs_to_collection": null,
//     "budget": 110000000,
//     "genres": [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         }
//     ],
//     "homepage": "http://www.sanandreasmovie.com/",
//     "id": 254128,
//     "imdb_id": "tt2126355",
//     "original_language": "en",
//     "original_title": "San Andreas",
//     "overview": "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
//     "popularity": 2272.527,
//     "poster_path": "/2Gfjn962aaFSD6eST6QU3oLDZTo.jpg",
//     "production_companies": [
//         {
//             "id": 12,
//             "logo_path": "/5ThIuO93vsk47oexKTSdfKEr7EC.png",
//             "name": "New Line Cinema",
//             "origin_country": "US"
//         },
//         {
//             "id": 79,
//             "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
//             "name": "Village Roadshow Pictures",
//             "origin_country": "US"
//         },
//         {
//             "id": 34081,
//             "logo_path": null,
//             "name": "Flynn Picture Company",
//             "origin_country": "US"
//         },
//         {
//             "id": 174,
//             "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
//             "name": "Warner Bros. Pictures",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "CA",
//             "name": "Canada"
//         },
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         },
//         {
//             "iso_3166_1": "AU",
//             "name": "Australia"
//         }
//     ],
//     "release_date": "2015-05-27",
//     "revenue": 473990832,
//     "runtime": 114,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "A rescue pilot survived an earthquake, this is what happens next",
//     "title": "San Andreas",
//     "video": false,
//     "vote_average": 6.209,
//     "vote_count": 7722
// }