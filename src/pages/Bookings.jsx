import { Heading, Row } from '../ui';
import { BookingTable, BookingTableOperations } from '../features/bookings';

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
