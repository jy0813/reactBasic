import React, {useEffect, useState} from 'react';

function useFetch(baseUrl, initalType) {
  const [data, setData] = useState(null)

  const fetchUrl = (type) => {
    fetch(`${baseUrl}/${type}`)
        .then(res => res.json())
        .then(res => setData(res))
  }

  useEffect(() => {
    fetchUrl(initalType);
  },[])
  return {data, fetchUrl}
}

export default useFetch;