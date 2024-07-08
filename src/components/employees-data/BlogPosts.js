import React, { useState, useEffect } from "react";

function BlogPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummy-json.mock.beeceptor.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                {posts.map((post) => {
                    return <div className="col-4 mb-3" key={post.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                                <div className="d-flex justify-content-between">
                                    <a href={post.link}>Read More</a>
                                    <h5><i className="bi bi-chat"></i> {post.comment_count}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default BlogPosts;