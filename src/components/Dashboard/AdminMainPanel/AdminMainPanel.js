
import { Card } from 'react-bootstrap';
import Maindashboard from '../MainDashboard/Maindashboard';
import "./AdminMainPanel.css"

const AdminMainPanel = () => {


    return (
        <div>
            <Maindashboard></Maindashboard>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px'
            }}>

                <div style={{ display: 'flex' }}>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>6</Card.Title>


                            <Card.Link href="/dashboard/babysiter">Baby Siter More..</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>6</Card.Title>


                            <Card.Link href="#">More..</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>6</Card.Title>


                            <Card.Link href="#">More..</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>6</Card.Title>


                            <Card.Link href="#">More..</Card.Link>

                        </Card.Body>
                    </Card>

                    <Card className='cardDesing blue'>
                        <Card.Body>
                            <Card.Title>6</Card.Title>


                            <Card.Link href="#">More..</Card.Link>

                        </Card.Body>
                    </Card>


                </div>
            </div>




        </div>
    );
};

export default AdminMainPanel;