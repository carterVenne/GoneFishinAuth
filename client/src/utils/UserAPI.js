import axios from "axios";

export default {

  getUsers: function() {
    return axios.get("/api/users");
  },
 
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },

  deleteUser: function(email) {
    return axios.delete("/api/users/" + email);
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};