import axios from "axios";
import * as constants from "./constants/constants";

const fetchTodo = async (amountTodos = 5) => {
    const response = await axios.get(`${constants.API_URL}?_limit=${amountTodos}`);
    return response.data;
}

export default fetchTodo;
