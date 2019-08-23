import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 92px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 0 30px;
`;

export const Content = styled.div`
  width: 940px;
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      color: #eee;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    padding-right: 30px;
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #fff;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999999;
    }
  }
  }
    button {
    margin: 5px 0 0;
    height: 42px;
    width: 90px;
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
    padding: 0 12px 0;

    &:hover {
      background: ${darken(0.03, '#F94D6A')}
    }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
