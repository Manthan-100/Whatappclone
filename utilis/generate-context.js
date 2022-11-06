import { createContext, useContext } from "react";

function generateContext(useGetContextValue, defaultValue = {}, errorMessage) {
  const Context = createContext(defaultValue);
  const Provider = (props) => {
    const { children, ...restProps } = props;
    const value = useGetContextValue(restProps);
    return <Context.Provider value={{ ...restProps, ...value }}>{children}</Context.Provider>;
  };
  const useThisContext = () => {
    const context = useContext(Context);
    if (context === undefined || Object.keys(context || {}).length === 0) {
      throw new Error(errorMessage || "this hook must be use within a context provider");
    }
    return context;
  };
  return [Provider, useThisContext, Context];
}

export default generateContext;
