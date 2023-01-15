import axios from "axios";

const SearchImages = async (term) =>{

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID Y9tdUm4MzZ3CSW74xTOk9SCc3xRmMtNovapd2yaGVms', 
        },
        params: {
            query: term
        }
    })
    console.log(response.data.results);
    return response.data.results;
}

export default SearchImages;