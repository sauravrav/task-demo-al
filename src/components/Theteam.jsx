import { Card, CardBody, CardImg, CardFooter } from 'reactstrap';
import Image from 'next/image';


const Theteam = () => {
    return ( 
        <Card>
        <CardBody style={{ padding: '1rem', textAlign: 'center' }}>
          <div style={{ borderRadius: '50%', overflow: 'hidden', margin: 'auto', width: '230px', height: '230px' }}>
            <Image src="/images/al.jpg" width={300} height={300} />
          </div>
        </CardBody>
        <CardFooter style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
          <h3>Name</h3>
          <h4>Designation</h4>
        </CardFooter>
      </Card>
     );
}
 
export default Theteam;