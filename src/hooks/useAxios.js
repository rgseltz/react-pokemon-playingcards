import React, {useState, useEffect} from 'react';
import Axios from 'axios';
const useAxios = (url, options={}) => {
    const [responses, setResponses] = useState([]);
    const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(null);
    const fetchData = async () => {
        try {
            const res = await Axios.get(url);
            console.log(res)
            setResponses(responses => [...responses, {...res.data}])
            console.log(responses)
        } catch (err){
            setError(err)
        }
    }
    

        

    return [fetchData, responses, error]
}
export default useAxios;