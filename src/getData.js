import axios from "axios";

const url = 'http://numbersapi.com/random/trivia?json'

const config = {
    transformResponse: response => response,
}

export default async() => {
    const { data } = await axios.get(url, config);
    return data;
}
