import React from 'react';
import NextHead from 'next/head';

interface IProps {
  title: string;
  faviconName?: string;
}

const Head: React.FC<IProps> = ({ title, faviconName = 'favicon' }) => (
  <NextHead>
    <title>{title}</title>
    <link rel="icon" href={`/${faviconName}.ico`} />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
  </NextHead>
);

export default Head;
