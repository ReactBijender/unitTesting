// import axios from "axios";
import { useEffect, useState, useTransition } from "react";
const MyListing = () =>{
    const [userInfo, setUserInfo] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPending, startTransition] = useTransition();

    const responseData = async () =>{
        startTransition(async () => {
            try{
                const pageNumber = 1;
                // const response = await axios.get(`https://randomuser.me/api?page=${pageNumber}`);
                const response =  await fetch(`https://randomuser.me/api?page=${pageNumber}`)
                const data = await response.json();
                console.log("error=>", response, data);
                // return response.data;
                setUserInfo(data.results);
                return data;
            } catch(e){
                console.log("error=>", e);           
                setError(error);
                 return;
            } 
          })
        /*try{
            const pageNumber = 1;
            // const response = await axios.get(`https://randomuser.me/api?page=${pageNumber}`);
            const response =  await fetch(`https://randomuser.me/api?page=${pageNumber}`)
            const data = await response.json();
            // console.log("error=>", response, data);
            // return response.data;
            return data;
        } catch(e){
            console.log("error=>", e);
            setError('Failed to fetch data');

            setLoading(false);
        }*/
    }
    useEffect(()=>{
        responseData()
        /*responseData().then((randomdata)=>{            
            if (randomdata) {
                setUserInfo(randomdata.results);
                // setLoading(false);
              }
            // console.log("result=>", randomdata.results)
        });   */     
    },[])
    // console.log("userInfo=>", userInfo)
    if (isPending) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (<table>
        <thead><tr><th colSpan={3}>List of prpduct</th></tr></thead>
        <tbody>
            {userInfo && userInfo.map((info)=>{
                return (<tr key={Math.random()}>
                    <td> {info.name.title}  {info.name.first}  {info.name.last}</td>
                    <td> {info.gender}</td>
                    <td><img src={info.picture.thumbnail} alt="Img"/></td>
                </tr>)
            })}
            
        </tbody>
    </table>)
}
export default MyListing;