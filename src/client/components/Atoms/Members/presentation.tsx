import React from "react";
import styled from 'styled-components';
import {Props} from './index'
import {Link} from 'react-router-dom'

const Table = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
`;

const Th = styled.th`
    background-color: lightgray;
    border: 1px solid gray;
    width: 180px;
`;

const Tr = styled.tr`
    cursor: pointer;
    &:hover {
        opacity: 0.3;
        background-color: #eee;
    }
`;

const Td = styled.td`
  border: 1px solid gray;
  padding: 8px 16px;
`;

const LinkItem = styled(Link)`
    display: block;
    color: #000;
    text-decoration: none;
    width: 100%;
    height: 100%;
`

const Presentation = ({className, list}:Props): JSX.Element => {
    return (
      <>
        <Table className={className}>
          <thead>
            <tr>
              <Th>名前</Th>
              <Th>ふりがな</Th>
              <Th>所属クループ</Th>
            </tr>
          </thead>
          <tbody>
            {list.map((value) => {
              return (
                <Tr key={value.id}>
                  <Td>
                    <LinkItem to={`/Detail?id=${value.id}`}>
                      {value.name}
                    </LinkItem>
                    　
                  </Td>
                  <Td>
                    <LinkItem to={`/Detail?id=${value.id}`}>
                      {value.kana}
                    </LinkItem>
                  </Td>
                  <Td>
                    <LinkItem to={`/Detail?id=${value.id}`}>
                      {value.group}
                    </LinkItem>
                  </Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
};

export default Presentation;
