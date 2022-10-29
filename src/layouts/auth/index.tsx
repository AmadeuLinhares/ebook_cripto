import {ThemeProvider} from 'styled-components';
import * as Style from './styles';
import theme from '@theme/index';
import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';
// import {Header} from '@components/Header';
import {Loading} from '@components/Loading';
import {selectLoading, useLoading} from '@stores/useLoading';
import {Routes} from '@routes';
export const Auth = () => {
  const isLoading = useLoading(selectLoading);

  const renderGlobalLoading = useMemo(() => {
    if (isLoading) {
      return <Loading />;
    }
  }, [isLoading]);

  return (
    <ThemeProvider theme={theme}>
      {renderGlobalLoading}
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Style.AuthContainer>
        {/* <Header /> */}
        <Style.Container>
          <Routes />
        </Style.Container>
      </Style.AuthContainer>
    </ThemeProvider>
  );
};
