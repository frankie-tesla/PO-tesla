import {useCallback, useContext, useState, createContext} from 'react';

export const ModalsStateContext = createContext([]);

export function ModalsContextProvider({children}) {
  const [modals, setModals] = useState([]);
  const openModal = useCallback(
    (Component, props) => {
      setModals(modals => [
        ...modals,
        {Component, props: {...props, open: true}},
      ]);
    },
    [setModals],
  );

  const closeModal = useCallback(
    Component => {
      setModals(modals =>
        modals.filter(modal => modal.Component !== Component),
      );
    },
    [setModals],
  );
  return (
    <ModalsStateContext.Provider value={{modals, openModal, closeModal}}>
      {children}
    </ModalsStateContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalsStateContext);
}
