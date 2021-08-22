import {Button,Form} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router'

let Update =()=>{
    let history=useHistory();

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [checkBox, setCheckBox] = useState();
    let [id, setID] = useState(null);

    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckBox(localStorage.getItem('Checkbox Value'));
    },[]);

    let updateAPIData=()=>{
        axios.put(`https://6121d661f5849d0017fb42e0.mockapi.io/fakeData/${id}`,{
            firstName,
            lastName,
            checkBox
        }).
        then(()=>{history.push('/Read')})
    }

    return(
        <>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name"  onChange={(e)=>setFirstName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name"  onChange={(e)=>setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to the terms and conditions" checked={checkBox} onChange={(e)=>setCheckBox(!checkBox)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={updateAPIData} >
                Update
            </Button>
        </>
    )
}

export default Update;