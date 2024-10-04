import axios from "axios";

const useRequest = {
  GET: async () => {
    try {
      const { data } = await axios.get("http://localhost:5050/tasks");
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  GETWithName: async (name) => {
    try {
      const { data } = await axios.get(`http://localhost:5050/tasks/${name}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  POST: async (task) => {
    try {
      await axios.post("http://localhost:5050/tasks", task);
    } catch (err) {
      console.log(err);
    }
  },
  PATCH: async (id, upadatedTask) => {
    try {
      await axios.patch(`http://localhost:5050/tasks/${id}`, upadatedTask);
    } catch (err) {
      console.log(err);
    }
  },
  DELETE: async (id) => {
    try {
      await axios.delete(`http://localhost:5050/tasks/${id}`);
    } catch (err) {
      console.log(err);
    }
  },
};

export default useRequest;
