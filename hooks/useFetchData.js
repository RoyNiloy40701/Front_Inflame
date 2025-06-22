import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(apiEndpoint) {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiEndpoint) {
      setLoading(false);
      return;
    }

    const fetchAllData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(apiEndpoint, { timeout: 10000 }); // 10s timeout
        console.log("API Response:", res.data); // Debug log

        // Defensive: always return an array for allData
        if (Array.isArray(res.data)) {
          setAllData(res.data);
        } else if (Array.isArray(res.data.blogs)) {
          setAllData(res.data.blogs);
        } else {
          setAllData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message, error.response?.status);
        setError(error.response?.status === 404 ? "API endpoint not found" : "Failed to fetch data");
        setAllData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [apiEndpoint]);

  return { allData, loading, error };
}

export default useFetchData;