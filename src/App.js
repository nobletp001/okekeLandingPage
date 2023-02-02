

import './App.css';
import Page from './page/Page';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const theme = createTheme({
main:{
  navColor:'#1E1E1E',
  bgBlack:'#161215'
}

 
});
function App() {
  return (
<>
<ThemeProvider theme={theme}>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<Page/>

</ThemeProvider>

</>
  );
}

export default App;
