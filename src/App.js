import logo from './logo.svg';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cards from './components/cards/Cards';
import TextTransformOperations from './components/text-transform-operations/TextTransformOperations';
import Header from './layout/header/Header';
import Tabs from './components/tabs/Tabs';
import Counter from './components/counter/counter';
import ParentPage from './components/parent-page/ParentPage';
import TableWithCheckBox from './components/table/TableWithCheckBox';
import GridBoxes from './components/grid-boxes/GridBoxes';
import BlogPosts from './components/employees-data/BlogPosts';

function App() {
  return (
    <>
      <Header />

      {/* <ParentPage/> */}

      {/* <Cards /> */}

      {/* <Tabs/> */}

      {/* <Counter/> */}

      {/* <TextTransformOperations />      */}

      {/* <TableWithCheckBox/>  */}

      {/* <GridBoxes/> */}

      <BlogPosts/>
    </>
  );
}

export default App;
