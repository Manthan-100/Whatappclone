import { createContext, useContext, useMemo, useCallback } from "react";
import is from "../../utilis/is";

const TabsContext = createContext({});

function Tabs(props) {
  const { children, value, onChange, ...restProps } = props;

  const isActiveTab = useCallback(
    (tabId) => {
      return tabId === value;
    },
    [value]
  );

  const values = useMemo(() => {
    return {
      value,
      onChange,
      isActiveTab,
    };
  }, [value, onChange, isActiveTab]);

  return (
    <TabsContext.Provider value={values}>
      <div {...restProps}>{is.function(children) ? children(values) : children}</div>
    </TabsContext.Provider>
  );
}

function Tab(props) {
  const { children, id, onClick, ...restProps } = props;
  const { onChange } = useContext(TabsContext);
  const handleClick = () => {
    onChange && onChange(id);
    onClick && onClick(id);
  };

  return (
    <div {...restProps} onClick={handleClick}>
      {children}
    </div>
  );
}

function TabPanel(props) {
  const { children, id, ...restProps } = props;
  const { isActiveTab } = useContext(TabsContext);
  let isCurrentTabIsActive = isActiveTab(id);
  if (!isCurrentTabIsActive) return null;
  return <div {...restProps}>{children}</div>;
}

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
export default Tabs;
