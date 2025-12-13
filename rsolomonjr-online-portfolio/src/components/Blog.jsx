import { useState, useEffect } from 'react';
import blogPostsData from '../data/blogPosts.json';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPostsData].sort((a, b) =>
      new Date(b.date) - new Date(a.date)
    );
    setPosts(sortedPosts);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="container mt-4 mb-5">
        <button
          className="btn btn-outline-primary mb-4"
          onClick={handleBackToList}
        >
          ← Back to All Posts
        </button>

        <article className="blog-post-detail">
          <h1 className="mb-3">{selectedPost.title}</h1>
          <div className="text-muted mb-4">
            <small>{formatDate(selectedPost.date)}</small>
          </div>

          <div className="blog-content mb-4" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
            {selectedPost.content}
          </div>

          {selectedPost.tags && selectedPost.tags.length > 0 && (
            <div className="mb-4">
              {selectedPost.tags.map((tag, index) => (
                <span key={index} className="badge bg-secondary me-2">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {selectedPost.linkedinUrl && (
            <a
              href={selectedPost.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View on LinkedIn
            </a>
          )}
        </article>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="text-center mb-4">Blog</h1>
          <p className="text-center text-muted mb-5">
            Insights on web development, AI-powered tools, and frontend engineering
          </p>

          {posts.length === 0 ? (
            <div className="text-center">
              <p>No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="row">
              {posts.map((post) => (
                <div key={post.id} className="col-12 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h3 className="card-title">{post.title}</h3>
                      <p className="text-muted mb-3">
                        <small>{formatDate(post.date)}</small>
                      </p>
                      <p className="card-text">{post.excerpt}</p>

                      {post.tags && post.tags.length > 0 && (
                        <div className="mb-3">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="badge bg-secondary me-2">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <button
                        className="btn btn-outline-primary"
                        onClick={() => handleReadMore(post)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 p-4 bg-light rounded">
            <h4 className="mb-3">About This Blog</h4>
            <p className="mb-2">
              This blog features content synced from my{' '}
              <a
                href="https://www.linkedin.com/in/rodneysolomonjr/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                LinkedIn profile
              </a>
              . I share insights about:
            </p>
            <ul>
              <li>Frontend development and modern JavaScript frameworks</li>
              <li>AI-powered development tools (GitHub Copilot, Claude)</li>
              <li>DevOps practices and team leadership</li>
              <li>Web engineering innovations</li>
            </ul>
            <p className="mb-0">
              <small className="text-muted">
                Posts are updated regularly. Follow me on LinkedIn to see new content first!
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
