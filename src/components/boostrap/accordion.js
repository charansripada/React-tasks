import Accordion from "react-bootstrap/Accordion";

function CustomAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <p>hi</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CustomAccordion;