import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 940px;

    button {
    margin: 5px 0 0;
    height: 42px;
    width: 172px;
    background: #F94D6A;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 19px;
    transition: background 0.2s;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0;

    &:hover {
      background: ${darken(0.03, '#F94D6A')}
    }
  }

    h1 {
      color: #FFF;
      font-weight: 38px;
    }

  }

  ul {
    height: 940px;
    margin: 30px;
    padding: 30px;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      opacity: 10%;
      padding: 22px 30px 18px 30px;
      background: rgba(0,0, 0, 0.2);
      border-radius: 4px;
      margin: 10px;
      height: 62px;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
    }

      h3 {

      }
      div {
        display: flex;
        flex-direction: row;
        align-items: center;

      strong {
        color: rgba(255, 255, 255, 0.6);
        margin-right: 30px;

        }
      }

    }
  }
`;

export const List = styled.ul``;
