import { Sequelize } from "sequelize"

const {PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT} = process.env


const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: 'postgres',})


console.log(`Connected to ${PGDATABASE}`)


export const testconnection = async () => {
    await sequelize.authenticate({logging: false})
    console.log('Connection has been established successfully.')
}


export const connectDB = async () => {
    try {
       // 5.
      await sequelize.sync();
        console.log('DB has been synced')
    } catch (error) {
      console.log(error);
    }
  };

export default sequelize