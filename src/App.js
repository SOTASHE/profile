import React from 'react';
import './App.css';
import {Content,Navigation,Header,Layout} from 'react-mdl';
import  Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header_color" title="Profile" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to ="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/landingPage">Home</Link>
                

            </Navigation>
            </Header> 
            <br/>
        <Content>
            <div className="page_content" >
            </div>
            <Main/>
        </Content>
    </Layout>
</div>
   

  );
}

export default App;
