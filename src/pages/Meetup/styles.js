import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    hr {
      border: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      button {
    margin: 5px 0 0;
    height: 42px;
    width: 180px;
    background: #F94D6A;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#F94D6A')}
      }
    }
  }

}
`;
