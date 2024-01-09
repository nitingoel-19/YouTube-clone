
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import Store from './utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Music from './components/Music';
import Sports from './components/Sports';
import Live from './components/Live';
import Pop from './components/Pop';
import LoFi from './components/Lo-fi';
import INDIA from './components/INDIA';
import Mixes from './components/Mixes';
import Gaming from './components/Gaming';
import TSeries from './components/T-series';
import HipHop from './components/Hip-Hop';
import Career from './components/Career';
import Engineering from './components/Engineering';
import Sales from './components/Sales';
import News from './components/News';
import RecentlyWatched from './components/RecentlyWatched';

const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"watch",
          element:<WatchPage />
        },
        {
          path:"/Live",
          element:<Live />
        },
        {
          path:"/Music",
          element:<Music />
        },
        {
          path:"/Sports",
          element:<Sports />
        },
        {
          path:"/Pop",
          element:<Pop />
        },
        {
          path:"/Lo-fi",
          element:<LoFi />
        },
        {
          path:"/INDIA",
          element:<INDIA />
        },
        {
          path:"/Mixes",
          element:<Mixes />
        },
        {
          path:"/Gaming",
          element:<Gaming />
        },
        {
          path:"/T-Series",
          element:<TSeries />
        },
        {
          path:"/Hip-Hop",
          element:<HipHop />
        },
        {
          path:"/Career",
          element:<Career />
        },
        {
          path:"/Engineering",
          element:<Engineering />
        },
        {
          path:"/Sales",
          element:<Sales />
        },
        {
          path:"/News",
          element:<News />
        },
        {
          path:"/RecentlyWatched",
          element:<RecentlyWatched />
        },
    ]
}])

function App() {
  return (
    <Provider store={Store}>
      <div>
          <Head />
          <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
