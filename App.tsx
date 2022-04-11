import "react-native-gesture-handler";
import React, { useState } from "react";
import { MainNavigation } from "./navigation/Main";

import { AuthProvider } from "./context/AuthContext";
import BottomSheet from "./context/BottomSheetContext";

export default function App() {
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);

  const handleBottomSheetOpened = (boolean: boolean) => {
    setIsBottomSheetOpened(boolean);
  };

  let contextValue = {
    isOpen: isBottomSheetOpened,
    getIsOpen: handleBottomSheetOpened,
  };

  return (
    <BottomSheet.Provider value={contextValue}>
      <AuthProvider>
        <MainNavigation />
      </AuthProvider>
    </BottomSheet.Provider>
  );
}
