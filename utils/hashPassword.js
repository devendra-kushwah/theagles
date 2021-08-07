import bcrypt from "bcrypt";
import errors from './constants';

async function hashPassword(password) {
  const { passwordNotHashed } = errors;
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(passwordNotHashed, error);
  }
}
export default hashPassword;
