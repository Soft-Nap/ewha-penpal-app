import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import TabNavigation from "./navigations/Tab";
import AuthStack from "./navigations/AuthStack";
import { Spinner } from "./components";
import { ProgressContext, ProgressProvider } from "./contexts";

const App = () => {
  // 인증 데이터 관련
  const { inProgress } = useContext(ProgressContext);
  // const { user } = useContext(UserContext);

  return (
    <ProgressProvider>
      <NavigationContainer>
        <TabNavigation />
        {/* user?.uid && user?.email ? <TabNavigation /> : <AuthStack /> */}
        {inProgress && <Spinner />}
      </NavigationContainer>
    </ProgressProvider>

  );
};

export default App;
