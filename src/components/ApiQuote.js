import { useState, useEffect } from 'react';

function ApiQuote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'dgGMc62aYreWbt4OKKJqoQ==3uAkLbsKPPXkzpiV',
          },
        });
        const json = await res.json();
        setData(await json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) {
    return (
      <div>Something went wrong!</div>
    );
  }

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      &quot;
      { data[0].quote }
      &quot;
    </div>
  );
}

export default ApiQuote;
