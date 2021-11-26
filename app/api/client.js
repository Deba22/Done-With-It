import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.0.2.2:9000/api", //For Android, instead of using IP address, use 10.0.2.2.
});

export default apiClient;
