import { useEffect, useState } from "react";
import axios from "axios";
function useTodo(refresh) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  };


  useEffect(() => {
    const rr = setInterval(() => {
      fetchData();
    }, refresh * 1000);

    fetchData();

    return () => {
      clearInterval(rr);
    };
  }, [refresh]);



  return { todos, loading };
}
export default useTodo;
