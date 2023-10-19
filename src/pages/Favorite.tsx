import CarService from "../apis/carListService";
import { SHA256 } from "crypto-js";

const Favorite = () => {
  const onClick = async () => {
    const car = new CarService();

    const password = "fhrhxla12!";
    const hash = SHA256(password).toString();

    const res = await car.Login({
      autoLogin: true,
      email: "frankie.j.kim@polarisoffice.com",
      password: hash
    });
    console.log(res);
  };
  return <button onClick={onClick}>login</button>;
};

export default Favorite;
