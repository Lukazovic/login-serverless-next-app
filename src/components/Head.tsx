import React from "react";
import NextHead from "next/head";

interface IProps {
  title: string;
  faviconName?: string;
}

const Head: React.FC<IProps> = ({ title, faviconName = "favicon" }) => (
  <NextHead>
    <title>{title}</title>
    <link rel="icon" href={`/${faviconName}.ico`} />
  </NextHead>
);

export default Head;
