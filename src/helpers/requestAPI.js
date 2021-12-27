import axios from "axios";
import * as constants from "../constants/api";

export const fetchTodoAPI = async (amountTodos = 5) => {
    const response = await axios.get(`${constants.API_URL}?_limit=${amountTodos}`);
    return response.data;
}

export const createTodoAPI = async (title) => {
    const body = { title, completed: false };
    const response = await axios.post(constants.API_URL, body);
    return response.data;
}

export const editTodoAPI = async (todo) => {
    const response = await axios.put(`${constants.API_URL}/${todo.id}`, todo);
    return response.data;
}

export const deleteTodoAPI = async (id) => {
    const response = await axios.delete(`${constants.API_URL}/${id}`);
    return response.status;
}
