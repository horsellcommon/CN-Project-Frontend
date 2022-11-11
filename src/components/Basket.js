import "../componentstyles/basket.css";
import styled from "styled-components";
import { useState } from "react";

const Basket = () => {
  const [show, setShow] = useState(false);
  return (
    <UltraContainer>
    <div className="basket_full">
      <button id="StyledButton" onClick={() => setShow(!show)}>
        Show/Hide Cart
      </button>
      <BarContainer show={show}>
        <Sideheader>Your Cart</Sideheader>
        <Sidecontent>Your Items
          <Items>
            <Content>
            <h1>Item 1</h1>
            <h1> £ -- </h1>
          </Content>
          <Content>
            <h1>Item 2</h1>
            <h1> £ -- </h1>
          </Content>
          <Content>
            <h1>Item 3</h1>
            <h1> £ -- </h1>
          </Content>
          </Items>
          <Total>
            <h1>Total</h1>
          </Total>
        </Sidecontent>
        <Sidefooter>Checkout</Sidefooter>
      </BarContainer>
    </div>
    </UltraContainer>
  );
};

export default Basket;
const UltraContainer =styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: right;
  height: 500px;
  width: 300px;
  margin-right: 50px;
  box-shadow: #08080b 0 15px 20px 1px;
  background-color: ${({ show }) => (show ? "rgb(0, 0, 0, 0.7)" : "#515050")};
  transition: all 0.5s;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(360px)")};
`;

const Sideheader = styled.p`
  height: 50px;
  font-size: 35px;
  font-weight: bold;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  margin: 0;
  cursor: default;
  border-bottom: 4px solid whitesmoke;
  color: #ffe600;
`;
const Sidecontent = styled.div`
  position: absolute;
  width: 21.5vw;
  top: 60px;
  bottom: 60px;
  right: 5px;
  overflow-y: auto;
  color: #dfba36;
  font-size: 1.5rem;
  font-weight: 30px;
  // border: solid 1px whitesmoke;
`;
const Items = styled.div`
  // border: solid 1px white;
  margin: 10px;
`;
const Total = styled.div`
  border-bottom: solid 1px white;
  margin: 10px;
  font-size: 10px;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-size: 11px;
  border-bottom: solid 3px whitesmoke;
`;

const Sidefooter = styled.div`
  height: 50px;
  font-size: 25px;
  width: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  margin: 0;
  cursor: pointer;
  border-top: 4px solid whitesmoke;
  background-color: black;
  color: #ffe600;
  font-weight: bold;
`;