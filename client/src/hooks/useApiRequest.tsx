import { useState, useEffect, useCallback } from 'react';

interface ApiRequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: string | null;
}

interface ApiRequestResponse {
  data: any;
  error: string | null;
  loading: boolean;
  sendRequest: (url: string, options: ApiRequestOptions) => Promise<any>;
}

const useApiRequest = (): ApiRequestResponse => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = useCallback(
    async (url: string, options: ApiRequestOptions) => {
      setLoading(true);

      try {
        const requestOptions = {
          method: options.method,
          headers: options.headers || {},
          body: options.body,
        };

        const response = await fetch(url, requestOptions);

        const responseData = await response.json();
        setData(responseData);
        setError(null);
        return responseData;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    // You can perform additional actions when data or error changes
    // For example, you might want to redirect or show a notification on error
    if (error) {
      console.error('API request error:', error);
    }
  }, [error]);

  return {
    data,
    error,
    loading,
    sendRequest,
  };
};

export default useApiRequest;
