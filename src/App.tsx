import MyComponent from './MyComponent';
import './App.css';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from './themeSlice';
import NonRelatedComponent from './NonRelatedComponent';

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <div
      className="App"
      style={{ backgroundColor: isDarkTheme ? '#ccc' : '#fff' }}
    >
      <p>Parent Component</p>
      <MyComponent />
      <NonRelatedComponent />
    </div>
  );
}

export default App;
