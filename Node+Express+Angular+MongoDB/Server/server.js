const{MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);

async function GetConnection() 
{
  let result = await client.connect();
  let db = result.db("Marvellous");
  return db.collection("Batches");
}

async function ReadData()
{
  let data = await GetConnection();
  data = await data.find().toArray();
  console.log("Data retrived from database: ");
  console.log(data);
}

function main()
{
  let ret;

  ret = GetConnection();
  console.log(ret);
  console.log("Database connection is successful");

  ReadData();
}

main()