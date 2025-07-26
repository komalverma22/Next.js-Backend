import axios from "axios";

async function getUserData() {
  
  const response=await axios.get("http://localhost:3000/api/user")
  return response.data;
}

const Home=async ()=>{
  const userData=await getUserData();
  return (
     <div className="flex items-center justify-center h-screen">
  <div className="border p-8 rounded shadow-md bg-red">
    <div>Name: {userData?.name}</div>
    <div>Email: {userData?.email}</div>
  </div>
</div>

  )
}
export default Home