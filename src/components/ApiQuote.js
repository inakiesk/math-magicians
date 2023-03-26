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
            'Content-Type': 'application/json',
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
      <div className="errorQuote">Something went wrong!</div>
    );
  }

  if (isLoading) {
    return (
      <div className="loadingQuote">Loading...</div>
    );
  }

  return (
    <div className="apiWrapper">
      <div className="apiQuote">
        &quot;
        {data[0].quote}
        &quot;
      </div>
      <div className="apiAuthor">
        -
        {data[0].author}
      </div>
    </div>
  );
}

export default ApiQuote;
