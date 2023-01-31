
import './App.css';
import Page from './page/Page';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
<Page/>

</ThemeProvider>

</>
  );
}

export default App;
