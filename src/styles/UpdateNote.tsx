import styled from "styled-components";

export const UpdateContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  background-color: white;
  width: 50%;
  z-index: 200;
  top: 10%;
  box-shadow: 1px 2px 5px gray;
`;

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export const UpdateInput = styled.input`
  width: 90%;
  border: none;
  outline: none;
`;

export const UpdateFormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2rem auto;
`;

export const UpdateButton = styled.button`
  font-size: 2rem;
  width: 40%;
  background-color: #ffb703;
  color: white;
  border: none;
  outline: none;
  border-radius: 0.5rem;
`;

export const CancelButton = styled.button`
  font-size: 2rem;
  width: 40%;
  color: #ffb703;
  background-color: white;
  border: 2px solid #ffb703;
  outline: none;
  border-radius: 0.5rem;
`;
