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
    margin-left: 20px;
    margin-right: 20px;

    h2 {
      color: #fff;
      font-weight: 38px;
      font-size: 32px;
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
      background: rgba(0, 0, 0, 0.2);
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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  margin: 5px 0 0;
  height: 44px;
  background: #d44059;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.08, '#D44059')};
  }
  svg {
    margin-right: 10px;
  }
`;

export const Meetup = styled.li``;
