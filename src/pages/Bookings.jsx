import { Heading, Row } from '../ui';
import { BookingTable } from '../features/bookings';

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>TEST</p>
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
