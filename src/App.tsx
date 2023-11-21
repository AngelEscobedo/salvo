import React, { useState, useEffect } from 'react';
import Post from './components/Post';

import { Post as PostType } from './types/Post';

const App: React.FC = () => {
 const [posts, setPosts] = useState<PostType[]>([]);
 const [users, setUsers] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      setPosts(posts);
      const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await responseUsers.json();
      setUsers(users);
    };
    fetchData();
 }, []);

 return (
    <div className="App">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
 );
};

export default App;