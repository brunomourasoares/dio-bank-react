//import Layout from "./components/Layout";

import {  ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
