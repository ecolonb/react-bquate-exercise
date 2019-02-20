/**
 * En esta parte utilizo Promesas y Async - await
 *
 */
import axios from 'axios'

// using promise using fetch
export async function getAlbumsHttp() {
    const getlbumsPromise = new Promise((resolve, reect) => {
        fetch("http://localhost:2786/api/albums/getall")
            .then(res => (res = res.json()))
            .then(json => {
                resolve(json.albums);
            })
            .catch(err => {
                reect(err);
            });
    });
    return getlbumsPromise;
}

// async await using axios
export async function getTracksHttp() {
    const result = await axios("http://localhost:2786/api/tracks/getall");
    return result.data.tracks;
}


export async function getArtistsHttp() {
    const result = await axios("http://localhost:2786/api/artists/getall");
    return result.data.artists;
}
export default () => {}