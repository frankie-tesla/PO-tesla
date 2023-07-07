import {useModalContext} from 'context/ModalsContext';
import React from 'react';

const Modals = () => {
  const {modals} = useModalContext();
  return (
    <>
      {modals.map(({Component, props}, idx) => (
        <Component {...props} key={idx} />
      ))}
    </>
  );
};

export default Modals;
