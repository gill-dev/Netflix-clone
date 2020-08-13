const API_KEY="aec5748fb1e23b9eede46b4081b580cc";

const requests = {
    fetchTrending :`trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchGenre:`genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest:`movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchHorror:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchComedy:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAction:`discover/movie?api_key=${API_KEY}&with_genres=28`,
}

export default requests;
