import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NavigationBar from './components/NavigationBar';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

function App() {
  const [projectList,setProjectList] = useState([]);
  useEffect(()=>{
    axios.get('https://62a5964e430ba53411c93b86.mockapi.io/projects')
    .then(res=>setProjectList(res.data));
  },[]);
  return (
    <>
    <NavigationBar/>
    <ProjectList projects={projectList}/>
    <Footer/>
    </>
  );
}

export default App;
