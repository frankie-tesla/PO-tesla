import { createHash } from "crypto";
import CarService from "../apis/carListService";

const Favorite = () => {
  const onClick = async () => {
    const car = new CarService();

    const res = await car.Login({
      autoLogin: true,
      email: "frankie.j.kim@polarisoffice.com",
      password: createHash("sha256").update("fhrhxla12!").digest("hex")
    });
    console.log(res);
  };
  return <button onClick={onClick}>login</button>;
};

export default Favorite;
