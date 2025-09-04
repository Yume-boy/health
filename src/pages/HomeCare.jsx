import React from 'react';
import { Container, Row, Col, Card, Button, Image, Badge, Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// HomeCareSupportStaff — Extended flagship page
// Usage: Ensure React-Bootstrap and Bootstrap CSS are loaded in your project.

const Hero = () => (
  <section
    className="text-white d-flex align-items-center"
    style={{
      backgroundImage: `linear-gradient(rgba(12,19,25,0.45), rgba(12,19,25,0.45)), url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '520px'
    }}
  >
    <Container>
      <Row className="align-items-center">
        <Col lg={7} className="py-5">
          {/* <Badge bg="light" text="dark" className="mb-3">Home Care Services</Badge> */}
          <h1 className="display-4 fw-bold">Home Care & Support Staff</h1>
          <p className="lead mb-4 ">Trusted professionals offering personalised care, companionship and household support — right where you feel safest.</p>
          <div className="d-flex align-items-center gap-2">
            <NavLink to={'/contact'}>
                <button 
                    
                    className="btn text-white  align-self-center" 
                    style={{ backgroundColor: '#40BACA', height: '38px', }}
                >
                    Get In Touch
                </button>
            </NavLink>
            <Button href="#services" variant="outline-light">Explore services</Button>
          </div>
        </Col>
        <Col lg={5} className="d-none d-lg-block">
          <Card className="shadow-lg" style={{borderRadius: 12}}>
            <Card.Body>
              <h5 className="mb-3">Quick snapshot</h5>
              <p className="mb-1">✔️ Flexible care schedules (hourly, daily, overnight)</p>
              <p className="mb-1">✔️ Trained, background-checked staff</p>
              <p className="mb-1">✔️ Short-term and long-term options</p>
              <p className="mb-0 text-muted mt-3">We match you with support staff who fit your personality, routines and goals.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

const ServicesDetailed = () => (
  <section id="services" className="py-5">
    <Container>
      <h2 className="mb-4 text-center">Comprehensive Home Care Services</h2>
      <p className="text-center text-muted mb-5">We provide a wide range of supports tailored to individual needs — from practical household help to complex care coordination.</p>

      <Row className="g-4">
        <Col md={6} lg={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5>Daily Living Assistance</h5>
              <p>Help with bathing, dressing, toileting, grooming and personal hygiene. Our staff are discreet, respectful and promote independence whenever possible.</p>
              <ul>
                <li>Bathing & grooming</li>
                <li>Toileting & continence support</li>
                <li>Mobility assistance & transfers</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5>Household & Domestic Help</h5>
              <p>Keeping the home safe and comfortable — light cleaning, laundry, meal preparation and grocery shopping according to dietary needs and preferences.</p>
              <ul>
                <li>Meal prep & kitchen safety</li>
                <li>Laundry & bed-making</li>
                <li>Home safety checks</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5>Medication & Health Support</h5>
              <p>Prompting and assistance with medication (non-administered), monitoring of health indicators, liaison with nurses and clinicians where required.</p>
              <ul>
                <li>Medication reminders</li>
                <li>Basic vitals monitoring</li>
                <li>Coordination with healthcare providers</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5>Mobility & Equipment Support</h5>
              <p>Assistance with walking, use of walking frames, wheelchairs and transfers using safe manual handling techniques. We help with equipment set-up and safe usage.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5>Companionship & Social Connection</h5>
              <p>Regular visits for conversation, activities, outings and social engagement to reduce isolation and support emotional wellbeing.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5>Respite for Carers</h5>
              <p>Short-term care options so family carers can rest or manage other commitments with confidence their loved one is safe.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <hr className="my-5" />

      <h3 className="mb-3">Flexible delivery options</h3>
      <Row>
        <Col md={4}>
          <Card className="p-3 h-100 border-0">
            <Card.Body>
              <h6>Scheduled visits</h6>
              <p className="mb-0">Planned daily or weekly visits to assist with routine tasks and keep you supported.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 h-100 border-0">
            <Card.Body>
              <h6>Short notice care</h6>
              <p className="mb-0">Unexpected need? We offer short-notice support when available.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 h-100 border-0">
            <Card.Body>
              <h6>Overnight & live-in</h6>
              <p className="mb-0">Overnight support or live-in carers for clients who need constant supervision or company.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-5" style={{backgroundColor: '#f8fbff'}}>
    <Container>
      <h2 className="text-center mb-4">Why choose our support staff?</h2>
      <Row className="g-4 text-center">
        <Col md={4}>
          <Card className="h-100 border-0">
            <Card.Body>
              <h5>Thorough screening</h5>
              <p className="text-muted">All staff undergo background checks, reference checks and competency assessments before joining our team.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0">
            <Card.Body>
              <h5>Ongoing training</h5>
              <p className="text-muted">Regular upskilling in manual handling, first aid, dementia care and person-centred approaches.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0">
            <Card.Body>
              <h5>Person-centred matching</h5>
              <p className="text-muted">We match staff based on personalities, language needs, cultural preferences and routines.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={{ span: 10, offset: 1 }}>
          <p className="text-center text-muted">Our commitment is to deliver care that respects dignity and choice — building long-term relationships with clients and families for consistent quality of life improvements.</p>
        </Col>
      </Row>
    </Container>
  </section>
);

// const StaffShowcase = () => {
//   const staff = [
//     { name: 'Grace N.', role: 'Senior Support Worker', specialties: ['Dementia care', 'Medication prompts'], img: 'https://via.placeholder.com/200' },
//     { name: 'Mohammed I.', role: 'Community Carer', specialties: ['Mobility support', 'Transport assistance'], img: 'https://via.placeholder.com/200' },
//     { name: 'Aisha K.', role: 'Personal Care Assistant', specialties: ['Personal care', 'Meal prep'], img: 'https://via.placeholder.com/200' },
//     { name: 'Samuel T.', role: 'Respite Carer', specialties: ['Respite', 'Companionship'], img: 'https://via.placeholder.com/200' },
//   ];

//   return (
//     <section className="py-5">
//       <Container>
//         <h2 className="text-center mb-4">Meet some of our care staff</h2>
//         <Row className="g-4">
//           {staff.map((s, i) => (
//             <Col md={6} lg={3} key={i}>
//               <Card className="h-100 text-center shadow-sm">
//                 <div style={{padding: '1rem'}}>
//                   <Image src={s.img} roundedCircle fluid style={{width: 120, height: 120, objectFit: 'cover'}} />
//                 </div>
//                 <Card.Body>
//                   <Card.Title>{s.name}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">{s.role}</Card.Subtitle>
//                   <p className="small mb-0">{s.specialties.join(' • ')}</p>
//                 </Card.Body>
//                 <Card.Footer className="bg-transparent border-0">
//                   <Button size="sm" variant="outline-primary" href="/contact">Request this carer</Button>
//                 </Card.Footer>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

const Testimonials = () => {
  const quotes = [
    { quote: 'The carers are kind, punctual and really get to know my mum. We have peace of mind.', name: 'L. Peterson' },
    { quote: 'Amazing respite service — I was able to travel while knowing my dad was in great hands.', name: 'R. Singh' },
    { quote: 'Professional and compassionate. They helped me through a tough recovery at home.', name: 'M. Osei' }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">What families say</h2>
        <Row className="g-4">
          {quotes.map((q, i) => (
            <Col md={4} key={i}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Text>“{q.quote}”</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 text-muted">— {q.name}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const FAQSection = () => (
  <section className="py-5">
    <Container>
      <h2 className="text-center mb-4">Frequently asked questions</h2>
      <Row className="justify-content-center">
        <Col lg={10}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I arrange care?</Accordion.Header>
              <Accordion.Body>
                Contact our team via the contact page or phone. We will arrange a free consultation to understand needs, preferences and create a personalised care plan.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Are your staff background checked?</Accordion.Header>
              <Accordion.Body>
                Yes. All staff undergo police checks, reference checks and relevant credential verification before working with clients.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Do you offer short-term or one-off visits?</Accordion.Header>
              <Accordion.Body>
                Yes — we provide flexible support including single visits, regular scheduled visits, respite packages and overnight care depending on availability.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Can you work with my existing healthcare team?</Accordion.Header>
              <Accordion.Body>
                Absolutely. We coordinate with family, GPs, nurses and allied health professionals to ensure continuity of care.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </section>
);

const ContactCTA = () => (
  <section className="py-5 text-center" style={{backgroundColor: '#3BAFBF', color: '#fff'}}>
    <Container>
      <Row className="align-items-center">
        <Col md={8} className="text-start">
          <h3 className="mb-2">Ready to arrange home care?</h3>
          <p className="mb-0">Get a free consultation to discuss needs, schedules and how we can support independence at home.</p>
        </Col>
        <Col md={4} className="text-md-end mt-3 mt-md-0">
          <Button href="/contact" variant="light">Contact us</Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default function HomeCareSupportStaff() {
  return (
    <main>
      <Hero />
      <ServicesDetailed />
      <WhyChooseUs />
      {/* <StaffShowcase /> */}
      <Testimonials />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}
