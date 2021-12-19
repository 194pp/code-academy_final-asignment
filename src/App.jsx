import classes from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {AuthContextProvider} from "./store/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className={classes.App}>
        <Header />
        <Main />
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
