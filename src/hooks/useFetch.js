import { useEffect, useState } from "react";


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getAPI = async() => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getAPI();
    }, [url])


  return {
    isLoading: state.isLoading,
    hasError: state.hasError,
    data: state.data
  };
}
