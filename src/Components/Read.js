import {useEffect,useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

let Read=()=>{

    let [APIData, setAPIData] = useState([]);
    useEffect(()=>{
        axios.get('https://6121d661f5849d0017fb42e0.mockapi.io/fakeData').
        then(response=>{setAPIData(response.data)})
        },[]);

    let setData=(item)=>{
        console.log(item);
        let { id, firstName, lastName, checkBox } = item;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkBox)
    }
    const getData = () => {
        axios.get(`https://6121d661f5849d0017fb42e0.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    
    let onDelete=(id)=>{
        axios.delete(`https://6121d661f5849d0017fb42e0.mockapi.io/fakeData/${id}`).
        then(()=>{getData();})
    }

    let allAPIData=APIData.map((item)=>{
        return (
        <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.checkBox ? 'Checked' : 'UnChecked'}</td>
            <Link to="/Update"><button onClick={()=>setData(item)}>Update</button></Link>
            <Link><button onClick={()=>{onDelete(item.id)}}>Delete</button></Link>
        </tr>
        )
    })

    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">HandleName</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>{allAPIData}</tbody>
        </table>
    )
}

export default Read;