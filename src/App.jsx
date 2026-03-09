import Navbar from "./components/Navbar"
import { Main } from "./pages/Main"

import {MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css'

function App() {
  return (
    <MantineProvider>
      <Navbar />
      <Main />
    </MantineProvider>
  )
}

export default App;
