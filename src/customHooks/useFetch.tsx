// import { useEffect, useState } from 'react';

// export default function useFetch(url: string) {
//   const [data, setData] = useState<T | null>(null);
//   const [error, setError] = useState<Error | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     setData(null);
//     setError(null);
//     setLoading(true);

//     fetch(url)
//       .then((response) =>
//         response.status === 200 ? response.json() : new Error('Ошибка на сервере'),
//       )
//       .then((responseData) => setData(responseData))
//       .catch((e) => setError(e))
//       .finally(() => setLoading(false));
//   }, [url]);

//   return [data, error];
// }
