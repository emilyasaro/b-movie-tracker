import db from './index.js';
    
import User from './models/user.js';
    
const syncAndSeed = async () => {
  try {
    await db.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    });
    await User.create({
      firstName: 'Bilbo',
      lastName: 'Baggins',
      email: `bilbo@gmail.com`
    });
  } catch (err) {
    console.log(`Error syncing database: ${err}`);
  }
};

export default syncAndSeed;