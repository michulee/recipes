import axios from "axios";
import { createApi } from "unsplash-js";

// on your node server
const unsplash = createApi({
  accessKey: process.env.REACT_APP_ACCESS_KEY,
  //...other fetch options
});
export default unsplash;
