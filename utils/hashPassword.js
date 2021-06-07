import bcrypt from "bcrypt";

async function hashPassword(password) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log("password not hashed", error);
  }
}
export default hashPassword;
