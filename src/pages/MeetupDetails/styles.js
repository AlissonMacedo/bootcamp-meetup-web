import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  header {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    margin-bottom: 30px;

    h1 {
      color: #FFF;
      font-weight: 38px;
    }

    div {

      button {
        margin: 5px 0 0;
        height: 42px;
        width: 116px;
        background: #F94D6A;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        margin-left: 15px;
      &:hover {
        background: ${darken(0.03, '#F94D6A')}
      }
    }

      button.editar {
        margin: 5px 0 0;
        height: 42px;
        width: 116px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        margin-left: 15px;
      &:hover {
        background: ${darken(0.03, '#3b9eff')}
      }
    }
  }
}
  div {


    img {
      height: 300px;
      width: 940px;
      border-radius: 4px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
      margin-bottom: 30px;
    }

    p {
      font-size: 18px;
      color: #FFF;
      height: 100px;
    }

    div {
      margin-top: 30px;

      strong {
      font-size: 12px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.3);
      margin-right: 30px;

    }
    }
  }
`;



