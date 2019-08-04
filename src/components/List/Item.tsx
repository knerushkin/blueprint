import React from 'react';

export default function({ children, key }: any) {
  return <li key={key}>{children}</li>;
}
