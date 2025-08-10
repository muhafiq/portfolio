import bcrypt from "bcryptjs";
import { db } from ".";
import { users } from "./schema";

export const seedUser = async () => {
  db.insert(users)
    .values({
      email: "muhafiq18@gmail.com",
      name: "Muh. Afiq Ma'mun",
      password: bcrypt.hashSync("rahasiabanget18!", 10),
    })
    .then((data) => {
      console.log(data);
    });
};
