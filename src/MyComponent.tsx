import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectIsDarkTheme } from './themeSlice';

function MyComponent() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  // ...

  return (
    <div style={{ padding: '10px 20px', border: '1px dotted black' }}>
      <p>Theme toggle component</p>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      <p>Is it dark theme: {isDarkTheme ? 'YES' : 'NO'}</p>
    </div>
  );
}

export default MyComponent;
