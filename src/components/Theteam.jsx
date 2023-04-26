import { Card, CardBody, CardFooter } from 'reactstrap';
import Image from 'next/image';


const Person = () => {
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
const Theteam = () => {
    return(
        <section className="section blog" id="our-team">
        <div className="container">

          <h2 className="h2 section-title underline">Our Team</h2>

          <ul className="blog-list">
            {[1,2,3,4].map(()=>(<Person/>))}
          </ul>

        </div>
      </section>
    )
}
 
export default Theteam;