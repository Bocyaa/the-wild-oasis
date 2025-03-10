import { useState } from 'react';
import CabinTable from '../features/cabins/CabinTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Button from '../ui/Button';

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row type='vertical'>
        <CabinTable />

        <Button
          variation='primary'
          size='medium'
          onClick={() => setShowForm((show) => !show)}
        >
          {showForm ? 'Close Form' : 'Add new cabin'}
        </Button>

        {showForm && <CreateCabinForm setShowForm={setShowForm} />}
      </Row>
    </>
  );
}

export default Cabins;
