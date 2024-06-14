import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  color: #000000;
  padding-top: 20px;
  
  .next-prev {
    width: 98px;
  }
  
  .hidden {
    display: none;
  }
`;

const Button = styled.button<{selected: boolean}>`
  background-color: ${props => props.selected ? '#B88E2F' : '#F9F1E7'};
  color: ${props => props.selected ? '#FFFFFF' : '#000000'};
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  
  width: 60px;
  height: 60px;
  

`;

const Pager = ( { PagesCount }:{ PagesCount: number } ) => {
  return (
    <Container>
      <Button className="next-prev hidden" selected={false}>Prev</Button>
      {[...Array(PagesCount)].map((_, index) => (
        <Button selected={index === 0} key={index}>{index + 1}</Button>
      ))}
      <Button className="next-prev" selected={false}>Next</Button>
    </Container>
  );
};

export default Pager;
