import {Toaster} from 'react-hot-toast';
import EntryScreen from "./screens/Home/Entry_Screen";

function App() {
  return (
    <div className='select-none'>
      <EntryScreen/>
      <Toaster/>
    </div>
  );
}

export default App;
