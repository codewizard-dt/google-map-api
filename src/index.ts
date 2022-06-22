import { Loader } from "@googlemaps/js-api-loader";
import { Company } from "./Company";
import { MyMap } from "./MyMap";
import { User } from "./User";

// const user = new User();
// const company = new Company();
// console.log(user, company);
const loader = new Loader({
  apiKey: "AIzaSyBgXZVqpjEkbxWRkmEw4ukpqDjNFGYAxo0",
  version: "weekly",
});
loader.load().then(() => {
  const map = new MyMap();
  for (let i = 0; i < 10; i++) {
    map.addMarker(new User());
    map.addMarker(new Company());
  }
})