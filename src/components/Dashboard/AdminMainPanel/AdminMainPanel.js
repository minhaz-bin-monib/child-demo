
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';
import '.././Dashboard-nav.css'
import "./AdminMainPanel.css"

const AdminMainPanel = () => {
    const babySiters = useLoaderData();
    const [enrolments, setEnrolments] = useState([]);
    const [Suscribers, setSuscribers] = useState([]);
    const [services, setServices] = useState([]);

    console.log(babySiters);
    useEffect(() => {
        fetch('http://localhost:5000/enrollment', {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setEnrolments(data);
            })

        fetch('http://localhost:5000/subscribers', {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setSuscribers(data);
            })

        fetch('http://localhost:5000/services', {
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
    let acceptedEnrolments = enrolments.filter(f => f.status == 'Accepted');
    let onboardEnrolments = enrolments.filter(f => f.status == 'Onboard');
    let rejectedEnrolments = enrolments.filter(f => f.status == 'Rejected');



    return (
        <section className="admin_panel_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>

                </div>


                <div className="col-md-10 admin_panel_main_div" >

                   

                    <div class="container">
                        <div class="row">
                            <h2>Dashboard</h2>
                            <div class="col-lg-3 col-sm-6">
                                <div class="card-box bg-blue">
                                    <div class="inner">
                                        <h3> {babySiters.length} </h3>
                                        <p> Babysitters </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                    </div>
                                    <a href="/dashboard/babysiter" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-sm-6">
                                <div class="card-box bg-green">
                                    <div class="inner">
                                        <h3> {Suscribers.length} </h3>
                                        <p> Subscribers </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                                    </div>
                                    <a href="/dashboard/subscribeControll" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="card-box bg-orange">
                                    <div class="inner">
                                        <h3> {services.length} </h3>
                                        <p> Total Services </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                                    </div>
                                    <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="card-box bg-red">
                                    <div class="inner">
                                        <h3> {newEnrolments.length} </h3>
                                        <p> New Enrollment </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-users"></i>
                                    </div>
                                    <a href="/dashboard/newEnrolment" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="card-box bg-orange">
                                    <div class="inner">
                                        <h3> {acceptedEnrolments.length} </h3>
                                        <p> Accepted Enroll </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                                    </div>
                                    <a href="/dashboard/acceptedenrolment" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="card-box bg-red">
                                    <div class="inner">
                                        <h3> {onboardEnrolments.length} </h3>
                                        <p> Onhold Enroll </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-users"></i>
                                    </div>
                                    <a href="/dashboard/onboardenrolment" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="card-box bg-blue">
                                    <div class="inner">
                                        <h3> {rejectedEnrolments.length} </h3>
                                        <p> Rejected Enroll </p>
                                    </div>
                                    <div class="icon">
                                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                    </div>
                                    <a href="/dashboard/rejectedenrolment" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AdminMainPanel;