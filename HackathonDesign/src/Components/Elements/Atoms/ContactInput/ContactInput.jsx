import React from "react";
import styled from "styled-components";

const Form = ({ type, label }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <form className="form" action="">
          <div className="input-field">
            <input
              required
              autoComplete="off"
              type={type}
              name="text"
              id="username"
            />
            <label htmlFor="username">{label}</label>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    // border: solid 1px #8d8d8d;
    padding: 0 20px;
    // border-radius: 14px;
    // background-color: #fff;
    // border: 1px solid yellow;
    width: 335px;
    height: auto;
  }

  .container .heading {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: bolder;
  }

  .form {
    max-width: 335px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form .btn-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .form .btn {
    padding: 10px 20px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    border-radius: 14px;
    // border: solid 1px #1034aa;
    // border-bottom: solid 1px #90c2ff;
    // background: linear-gradient(135deg, #0034de, #006eff);
    color: #fff;
    font-weight: bolder;
    transition: all 0.2s ease;
    // box-shadow: 0px 2px 3px #000d3848, inset 0px 4px 5px #0070f0,
    //   inset 0px -4px 5px #002cbb;
  }

  .form .btn:active {
    // box-shadow: inset 0px 4px 5px #0070f0, inset 0px -4px 5px #002cbb;
    transform: scale(0.995);
  }

  .input-field {
    position: relative;
  }

  .input-field label {
    position: absolute;
    color: #8d8d8d;
    pointer-events: none;
    background-color: transparent;
    left: 15px;
    transform: translateY(0.6rem);
    transition: all 0.3s ease;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

  .input-field input {
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 14px;
    border: solid 1px #2a2a2d;
    letter-spacing: 1px;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    background-color: #17181f;
  }

  .input-field input:focus,
  .input-field input:valid {
    outline: none;
    // border: solid 1px #0034de;
  }

  .input-field input:focus ~ label,
  .input-field input:valid ~ label {
    transform: translateY(-50%) translateX(-18px) scale(0.9);
    background-color: #17181f;
    width: max-width;
    padding: 0px 5px;
    color: #e0e0e2;
    letter-spacing: 1px;
    border: none;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin: 0 10px;
  }

  .form .passicon {
    cursor: pointer;
    font-size: 1.3rem;
    position: absolute;
    top: 6px;
    right: 8px;
  }

  .form .close {
    display: none;
  }
`;

export default Form;
