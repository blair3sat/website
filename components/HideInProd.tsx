import React from 'react';

export function HideInProd({ children }) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return children;
}
