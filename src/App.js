import './App.css';
import {Box} from "@chakra-ui/react"
import Layout from './Pages/Layout';
import Navbar from './components/Navbar/Navbar';
import MyRoutes from './UserPages/MyRoutes';
function App() {
  return (
    <Box>
      <MyRoutes />
    </Box>
  );
}

export default App;
