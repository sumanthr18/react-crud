import {Button,Form} from 'react-bootstrap'
import {useState} from 'react';
import {useHistory} from 'react-router'
import axios from 'axios';

let Create = () =>{

    let history=useHistory();

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [checkBox, setCheckBox] = useState(false);

    const postData=(e)=>{
        axios.post('https://6121d661f5849d0017fb42e0.mockapi.io/fakeData',
        {
            firstName,
            lastName,
            checkBox,
        }).
        then(()=>{history.push('/Read')})
    }

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to the terms and conditions" onClick={(e)=>setCheckBox(!checkBox)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={postData}>
                Submit
            </Button>
        </>
    )
}

export default Create;