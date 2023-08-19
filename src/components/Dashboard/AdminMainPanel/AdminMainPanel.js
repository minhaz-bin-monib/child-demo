
import { useState, useEffect  } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';
import "./AdminMainPanel.css"

const AdminMainPanel = () => {
    const babySiters = useLoaderData();
    const [enrolments, setEnrolments] = useState([]);
    const [Suscribers, setSuscribers] = useState([]);
    const [services, setServices] = useState([]);

    console.log(babySiters);
    useEffect(() => {
        fetch('http://localhost:5000/enrollment',{
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
       setEnrolments(data);
    })

    fetch('http://localhost:5000/subscribers',{
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
       setSuscribers(data);
    })

    fetch('http://localhost:5000/services',{
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
      
    })
    .then(res => res.json())
    .then(data => {
       setServices(data);
    })

      }, []);




    //   useEffect(()=>{
    //     fetch('http://localhost:5000/enrollment')
    //     .then(res => res.json())
    //     .then(data => setEnrolments(data))
    // },[enrolments])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/subscribers')
    //     .then(res => res.json())
    //     .then(data => setSuscribers(data))
    // },[Suscribers])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[services])

    
    // console.log(enrolments);
    // console.log(services);
    // console.log(Suscribers);

    let newEnrolments = enrolments.filter(f => f.status == 'New');
    let acceptedEnrolments =  enrolments.filter(f => f.status == 'Accepted');
    let onboardEnrolments = enrolments.filter(f => f.status == 'Onboard');
    let rejectedEnrolments = enrolments.filter(f => f.status == 'Rejected');



    return (
        <div>
            <Maindashboard></Maindashboard> <span style={{display:'block', height:'60px', width:'1100px', backgroundColor:'ghostwhite',marginLeft:'256px'}}></span>
            
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px'
            }}>

                <div style={{ display: 'flex' }}>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>{babySiters.length}</Card.Title>


                            <Card.Link href="/dashboard/babysiter">Baby Siter More..</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>{Suscribers.length}</Card.Title>


                            <Card.Link href="#">Suscriber More..</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>{services.length}</Card.Title>


                            <Card.Link href="#">Service More..</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>{newEnrolments.length}</Card.Title>


                            <Card.Link href="/dashboard/enrolment">New Enrolement More..</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>{acceptedEnrolments.length}</Card.Title>


                            <Card.Link href="/dashboard/acceptedenrolment">Accepted Enrolement More..</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>{onboardEnrolments.length}</Card.Title>


                            <Card.Link href="/dashboard/onboardenrolment">Onboard Enrolement..</Card.Link>

                        </Card.Body>
                    </Card>

                    
                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>{rejectedEnrolments.length}</Card.Title>


                            <Card.Link href="/dashboard/rejectedenrolment">Rejected Enrolement..</Card.Link>

                        </Card.Body>
                    </Card>
                    
                </div>
            </div>

        </div>
    );
};

export default AdminMainPanel;