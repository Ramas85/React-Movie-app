import'./main.scss'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'

//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';

//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

//import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import Button from 'react-bootstrap/Button';

import Movie from'../movie/Movie';
import Movies from'../data/MoviesData';

function Main() {
    const movies = Movies.map(movie => <Movie key={movie.id}title={movie.pavadinimas} description={movie.tekstas}director={movie.director}/>)
    return (        
    <Container className="p-3">
        <div>
            <div className="row">
                {movies}
            </div>
        </div>
    </Container>
/*
function Main() {
    return (       
    <Container className="p-3">
        <div>
             <div className="row">
               <Movie data={{title:"Born",description:"Action-Thrillers"}}/> 
               <Movie data={{title:"The Jacket",description:"Thriller/Sci-fi"}}/>              
             </div>
    <hr></hr>
             <div className="row">
               <Movie data={{title:"Born",description:"Action-Thrillers"}}/> 
               <Movie data={{title:"The Jacket",description:"Thriller/Sci-fi"}}/>            
             </div>
        </div>
    </Container>
*/
    //********************************** */
        // <Container className="p-3">
        //     <Row>
        //         <Col>
        //             <Card style={{ width: '18rem' }}>
        //                 <Row>
        //                     <Col md={{ span: 4, offset: 8 }}>
        //                     <ButtonGroup className="mr-2">
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fas fa-bars'}/></Button>
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fas fa-trash'}/></Button>
        //                     </ButtonGroup>
        //                     </Col>
        //                 </Row>
        //                 <Card.Body>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Title >
        //                         Easy Blog
        //                     </Card.Title>
        //                     </Row>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Text>
        //                         BlogExtention for Jommala
        //                     </Card.Text>
        //                     </Row>
        //                     <Row>
        //                         <Col>
        //                             <Card.Text>
        //                                 Version
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Source Control
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Hosted
        //                             </Card.Text>
        //                         </Col>
        //                     </Row>
        //                 </Card.Body> 
        //             </Card>
        //         </Col>
        //         <Col>
        //             <Card style={{ width: '18rem' }}>
        //                 <Row>
        //                     <Col md={{ span: 4, offset: 8 }}>
        //                     <ButtonGroup className="mr-2">
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-bars'}/></Button>
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-trash'}/></Button>
        //                     </ButtonGroup>
        //                     </Col>
        //                 </Row>
        //                 <Card.Body>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Title >
        //                         Easy Blog
        //                     </Card.Title>
        //                     </Row>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Text>
        //                         BlogExtention for Jommala
        //                     </Card.Text>
        //                     </Row>
        //                     <Row>
        //                         <Col>
        //                             <Card.Text>
        //                                 Version
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Source Control
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Hosted
        //                             </Card.Text>
        //                         </Col>
        //                     </Row>
        //                 </Card.Body> 
        //             </Card>
        //         </Col>
        //         <Col>
        //             <Card style={{ width: '18rem' }}>
        //                 <Row>
        //                     <Col md={{ span: 4, offset: 8 }}>
        //                     <ButtonGroup className="mr-2">
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-bars'}/></Button>
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-trash'}/></Button>
        //                     </ButtonGroup>
        //                     </Col>
        //                 </Row>
        //                 <Card.Body>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Title >
        //                         Easy Blog
        //                     </Card.Title>
        //                     </Row>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Text>
        //                         BlogExtention for Jommala
        //                     </Card.Text>
        //                     </Row>
        //                     <Row>
        //                         <Col>
        //                             <Card.Text>
        //                                 Version
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Source Control
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Hosted
        //                             </Card.Text>
        //                         </Col>
        //                     </Row>
        //                 </Card.Body> 
        //             </Card>
        //         </Col>
        //     </Row>
        //     <Row>
        //     <Col>
        //             <Card >
        //                 <Row>
        //                     <Col md={{ span: 4, offset: 8 }}>
        //                     <ButtonGroup className="mr-2">
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-bars'}/></Button>
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-trash'}/></Button>
        //                     </ButtonGroup>
        //                     </Col>
        //                 </Row>
        //                 <Card.Body>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Title >
        //                         Easy Blog
        //                     </Card.Title>
        //                     </Row>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Text>
        //                         BlogExtention for Jommala
        //                     </Card.Text>
        //                     </Row>
        //                     <Row>
        //                         <Col>
        //                             <Card.Text>
        //                                 Version
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Source Control
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Hosted
        //                             </Card.Text>
        //                         </Col>
        //                     </Row>
        //                 </Card.Body> 
        //             </Card>
        //         </Col>
        //     <Col>
        //             <Card style={{ width: '18rem' }}>
        //                 <Row>
        //                     <Col md={{ span: 4, offset: 8 }}>
        //                     <ButtonGroup className="mr-2">
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-bars'}/></Button>
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-trash'}/></Button>
        //                     </ButtonGroup>
        //                     </Col>
        //                 </Row>
        //                 <Card.Body>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Title >
        //                         Easy Blog
        //                     </Card.Title>
        //                     </Row>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Text>
        //                         BlogExtention for Jommala
        //                     </Card.Text>
        //                     </Row>
        //                     <Row>
        //                         <Col>
        //                             <Card.Text>
        //                                 Version
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Source Control
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Hosted
        //                             </Card.Text>
        //                         </Col>
        //                     </Row>
        //                 </Card.Body> 
        //             </Card>
        //         </Col>
        //     <Col>
        //             <Card style={{ width: '18rem' }}>
        //                 <Row>
        //                     <Col md={{ span: 4, offset: 8 }}>
        //                     <ButtonGroup className="mr-2">
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-bars'}/></Button>
        //                         <Button variant="secondary"><FontAwesomeIcon icon={'fa-trash'}/></Button>
        //                     </ButtonGroup>
        //                     </Col>
        //                 </Row>
        //                 <Card.Body>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Title >
        //                         Easy Blog
        //                     </Card.Title>
        //                     </Row>
        //                     <Row className="justify-content-md-center">   
        //                     <Card.Text>
        //                         BlogExtention for Jommala
        //                     </Card.Text>
        //                     </Row>
        //                     <Row>
        //                         <Col>
        //                             <Card.Text>
        //                                 Version
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Source Control
        //                             </Card.Text>
        //                         </Col>
        //                         <Col>
        //                             <Card.Text>
        //                                 Hosted
        //                             </Card.Text>
        //                         </Col>
        //                     </Row>
        //                 </Card.Body> 
        //             </Card>
        //         </Col>
        //     </Row>
        // </Container>
    );
 } 
export default Main;