
import './App.css';
import Page from './page/Page';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
main:{
  bgBlack:'#000',
  navColor:'#161215'
}

 
});
function App() {
  return (
<>
<ThemeProvider theme={theme}>
<Page/>

</ThemeProvider>

</>
  );
}

export default App;
