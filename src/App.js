import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import './assets/style/styles.scss';
import Layout from './layouts';
import Dashboard from './pages/Dashboard';
import Contracts from './pages/Contracts';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import Logup from './pages/Logup';
import Login from './pages/Login';

function App() {
  const [ethAmount, setEthAmount] = useState("0.05");
  const [ethLimit, setEthLimit] = useState("1");
  const [accountEmail, setAccountEmail] = useState("null");

  return (
      <ChakraProvider>
        <Layout accountEmail={accountEmail}>
          <Routes>
            <Route index element={<Dashboard ethAmount={ethAmount} ethLimit={ethLimit} accountEmail={accountEmail} />} />
            <Route path="/contracts" element={<Contracts accountEmail={accountEmail} />} />
            <Route path="/stats" element={<Stats accountEmail={accountEmail} />} />
            <Route path="/settings" element={<Settings ethAmount={ethAmount} setEthAmount={setEthAmount} ethLimit={ethLimit} setEthLimit={setEthLimit} accountEmail={accountEmail} />} />
            <Route path="/logup" element={<Logup />} />
            <Route path="/login" element={<Login setAccountEmail={setAccountEmail} accountEmail={accountEmail} />} />
          </Routes>
        </Layout>
      </ChakraProvider>
  );
}

export default App;
