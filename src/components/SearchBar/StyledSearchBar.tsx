import styled from 'styled-components';

const StyledSearchBar = styled.div`
  ::placeholder {
    color: rgb(193, 193, 193);
    opacity: 1; /* Firefox */
  }

  .search--input {
    display: flex;
    margin-top: 5rem;
    margin-left: 20px;
    width: fit-content;
    border: 1px solid #222;
    border-radius: 25px;

    input {
      width: 600px;
      height: 47px;
      background-color: white;
      border: 0;
      border-radius: 25px;
      border-top-right-radius: 0px;
      font-weight: 500;
      border-bottom-right-radius: 0px;
      font-size: 16px;
      padding: 15px;
      padding-left: 30px;

      &:focus {
        outline: none;
      }
    }

    .search__icon {
      width: 47px;
      height: 47px;
      background-color: #fff;
      color: #111;
      border-radius: 25px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      display: grid;
      place-items: center;
      svg {
        cursor: pointer;
        font-size: 1.5rem;
      }
    }
  }
`;

export default StyledSearchBar;
