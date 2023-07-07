export const key = "8e71f8de4d5d09c0e4a7002c6f6eff0c";

const request = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=PAGE_NUMBER
    `,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=PAGE_NUMBER
    `,
    requestNowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=PAGE_NUMBER
    `,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=PAGE_NUMBER
    `,
    requestPopularTvShows:`https://api.themoviedb.org/3/tv/popular?api_key=${key}&page=PAGE_NUMBER
    `,
    requestTopRatedTvShows:`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&page=PAGE_NUMBER
    `,
    requestSearchMoviesorTvShows:`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&page=PAGE_NUMBER
    `,
}
export default request 