import { Row } from './Culture';

const Cultures = ({ cultures, handleForming, handleNonforming }) => {
  // setCulture(newCultures);
  return (
    <>
      <Row
        cultures={cultures}
        handleForming={handleForming}
        handleNonforming={handleNonforming}
      />
    </>
  );
};

export default Cultures;
