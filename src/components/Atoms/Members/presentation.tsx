import React from "react";
import styled from "styled-components";
import { Props } from "./index";
import Link from "next/link";
import { Member } from "../../../types";

const Table = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: lightgray;
  border: 1px solid gray;
  width: 200px;
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
`;

const LinkItem = styled(Link)`
  display: block;
  color: #000;
  text-decoration: none;
  padding: 8px 16px;
`;

const Presentation: React.VFC<Props> = ({ ...props }) => {
  const { className, list } = props;
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
          {list.map((value: Member) => {
            return (
              <Tr key={value.id}>
                <Td>
                  <LinkItem href={`/detail?id=${value.id}`}>
                    {value.name}
                  </LinkItem>
                </Td>
                <Td>
                  <LinkItem href={`/detail?id=${value.id}`}>
                    {value.kana}
                  </LinkItem>
                </Td>
                <Td>
                  <LinkItem href={`/detail?id=${value.id}`}>
                    {value.group_name}
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
