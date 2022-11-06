import { useMemo, useState } from 'react';
import generateContext from "../../utilis/generate-context";

function useHomeScreen() {
  const [currTab, setCurrTab] = useState('chat');
  return useMemo(() => {
    return {
      currTab,
      setCurrTab,
    };
  }, [currTab, setCurrTab]);
}

const [Provider, useThisContext] = generateContext(useHomeScreen);

export const HomeProvider = Provider;
export const useHomeContext = useThisContext;
