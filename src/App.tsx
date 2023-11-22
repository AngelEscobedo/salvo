import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import { PostProvider } from './context/PostProvider';
import PostItem from './components/PostItem';
import UserDetails from './components/UserDetails';

const App: React.FC = () => {
  return (
    <PostProvider>
      <div className="app">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<>
                  <div className="header">
                    <h1>PostList</h1>
                  </div>
                  <PostList />
                </>}>
              </Route>
              <Route path="/postList" element={<>
                  <div className="header">
                    <h1>PostList</h1>
                  </div>
                  <PostList />
                </>}>
              </Route>
              <Route path="/postItem">
                <Route path=':postId' element={
                  <>
                    <div className="header">
                      <h1>PostItem</h1>
                    </div>
                    <PostItem />
                  </>}>
                </Route>
              </Route>
              <Route path="/author">
                <Route path=':userId' element={
                  <>
                    <div className="header">
                      <h1>UserDetails</h1>
                    </div>
                    <UserDetails />
                  </>}>
                </Route>
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    </PostProvider>
  );
};

export default App;