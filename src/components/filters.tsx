import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: #F9F1E7;
  align-items: center;
  width: 100%;
  height: 100px;
  color: #0000000;

  @media (max-width: 768px) {
    height: 50px;
  }

  .full {
    width: 100%;  
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #000000;
  font-family: 'Poppins', sans-serif;

  span {
    font-size: 1.5rem;
    margin-right: 10px;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-right: 5px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`
const Text = styled.p`
  margin: 0;
  padding-left: 10px;
  border-left: 1px solid #000000;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-left: 5px; 
  }
  
  
`

const ShowInput = styled.input`
  margin: 5px;
  height: 40px;
  width: 40px;
  text-align: center;
  background-color: #FFFFFF;
  color: #9F9F9F;
  border: none;
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

const FilterButton = () => {
  return (
    <Wrapper>
      <span className="material-symbols-outlined border">
        tune
      </span>
      Filter
    </Wrapper>
  );
}

const FilterResultText = ({ min, max, total}: { min: number, max: number, total: number }) => {
  return (
      <Text>
        Showing {min} - {max} of {total} results
      </Text>
  )
}

const FilterComponent = () => {
  return (
    <Wrapper className="border">
      <FilterButton />
      <FilterResultText min={1} max={10} total={100} />
    </Wrapper>
  )
}

const ShowFilter = ( { qnt }: { qnt: number } ) => {
  return (
    <Wrapper>
      Show 
      <ShowInput type="number" value={qnt} />
    </Wrapper>
  ) 
}

const Filters = () => {
  return (
    <Container>
      <Wrapper className="full">
        <FilterComponent />
        <ShowFilter qnt={10}/>
      </Wrapper>
    </Container>
  );
}

export default Filters
