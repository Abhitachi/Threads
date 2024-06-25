
<h1>Threads App Clone &nbsp;&nbsp;&nbsp;  <a href='https://threads-od4x.onrender.com/auth' style={cursor:pointer}>Link</a></h1> 

 <h2>Table of Contents</h2>
    <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#api-endpoints">API Endpoints</a>
            <ul>
                <li><a href="#user-endpoints">User Endpoints</a></li>
                <li><a href="#post-endpoints">Post Endpoints</a></li>
            </ul>
        </li>
        <li><a href="#contributing">Contributing</a></li>
    </ul>

<h2 id="introduction">Introduction</h2>
    <p>Threads App Clone is a social media application built using the MERN stack (MongoDB, Express, React, Node.js). it allows users to sign up, log in, create and update profiles, follow/unfollow other users, and manage their session through login and logout functionalities. additionally, users can create, read, update, and delete posts, like/unlike posts, and reply to posts.</p>

<h2 id="features">Features</h2>
<ul>
        <li>User Authentication (Sign Up, Log In, Log Out)</li>
        <li>Profile Management</li>
        <li>Follow/Unfollow Users</li>
        <li>Update User Information</li>
        <li>Protected Routes</li>
        <li>Post Management (Create, Read, Update, Delete)</li>
        <li>Like/Unlike Posts</li>
        <li>Reply to Posts</li>
    </ul>

 <h2 id="tech-stack">Tech Stack</h2>
<ul>
        <li><strong>Frontend:</strong> React.js</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
        <li><strong>Middleware:</strong> Express Middleware</li>
    </ul>

 <h2 id="installation">Installation</h2>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/your-username/threads-app-clone.git
cd threads-app-clone</code></pre>
        </li>
        <li><strong>Install backend dependencies:</strong>
            <pre><code>cd backend
npm install</code></pre>
        </li>
        <li><strong>Install frontend dependencies:</strong>
            <pre><code>cd ../frontend
npm install</code></pre>
        </li>
        <li><strong>Set up environment variables:</strong>
            <p>Create a <code>.env</code> file in the <code>backend</code> directory and add the following variables:</p>
            <pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret</code></pre>
        </li>
        <li><strong>Run the application:</strong>
            <ul>
                <li>Start the backend server:
                    <pre><code>cd backend
npm start</code></pre>
                </li>
                <li>Start the frontend server:
                    <pre><code>cd ../frontend
npm start</code></pre>
                </li>
            </ul>
        </li>
        <li><strong>Open your browser and navigate to:</strong>
            <p><a href="http://localhost:3000">http://localhost:3000</a></p>
        </li>
    </ol>

<h2 id="usage">Usage</h2>
<ul>
        <li><strong>Sign Up:</strong> Create a new account.</li>
        <li><strong>Log In:</strong> Access your account.</li>
        <li><strong>Profile Management:</strong> View and update your profile information.</li>
        <li><strong>Follow/Unfollow:</strong> Follow or unfollow other users.</li>
        <li><strong>Post Management:</strong> Create, read, update, delete, like/unlike, and reply to posts.</li>
    </ul>

<h2 id="api-endpoints">API Endpoints</h2>
    <h3 id="user-endpoints">User Endpoints</h3>
    <ul>
        <li><strong>GET /profile/:query</strong>
            <p>Fetch user profile based on the query parameter.</p>
            <p>Example: <code>/profile/johndoe</code></p>
        </li>
        <li><strong>POST /signup</strong>
            <p>Register a new user.</p>
            <p>Request Body:</p>
            <pre><code>{
  "username": "your_username",
  "email": "your_email",
  "password": "your_password"
}</code></pre>
        </li>
        <li><strong>POST /login</strong>
            <p>Log in an existing user.</p>
            <p>Request Body:</p>
            <pre><code>{
  "email": "your_email",
  "password": "your_password"
}</code></pre>
        </li>
        <li><strong>POST /logout</strong>
            <p>Log out the current user.</p>
            <p>Example: <code>/logout</code></p>
        </li>
        <li><strong>PATCH /follow/:id</strong>
            <p>Follow or unfollow a user based on their ID.</p>
            <p>Requires Authentication.</p>
            <p>Example: <code>/follow/60d0fe4f5311236168a109ca</code></p>
        </li>
        <li><strong>PATCH /update/:id</strong>
            <p>Update user information based on their ID.</p>
            <p>Requires Authentication.</p>
            <p>Request Body (example):</p>
            <pre><code>{
  "username": "new_username",
  "email": "new_email"
}</code></pre>
        </li>
    </ul>

<h3 id="post-endpoints">Post Endpoints</h3>
    <ul>
        <li><strong>GET /feed</strong>
            <p>Fetch posts for the authenticated user's feed.</p>
            <p>Requires Authentication.</p>
            <p>Example: <code>/feed</code></p>
        </li>
        <li><strong>GET /:id</strong>
            <p>Fetch a specific post by ID.</p>
            <p>Example: <code>/60d0fe4f5311236168a109cb</code></p>
        </li>
        <li><strong>GET /user/:username</strong>
            <p>Fetch posts by a specific user.</p>
            <p>Example: <code>/user/johndoe</code></p>
        </li>
        <li><strong>POST /create</strong>
            <p>Create a new post.</p>
            <p>Requires Authentication.</p>
            <p>Request Body (example):</p>
            <pre><code>{
  "content": "This is a new post",
  "image": "image_url"
}</code></pre>
        </li>
        <li><strong>DELETE /:id</strong>
            <p>Delete a specific post by ID.</p>
            <p>Requires Authentication.</p>
            <p>Example: <code>/60d0fe4f5311236168a109cb</code></p>
        </li>
        <li><strong>PATCH /like/:id</strong>
            <p>Like or unlike a specific post by ID.</p>
            <p>Requires Authentication.</p>
            <p>Example: <code>/like/60d0fe4f5311236168a109cb</code></p>
        </li>
        <li><strong>POST /replay/:id</strong>
            <p>Reply to a specific post by ID.</p>
            <p>Requires Authentication.</p>
            <p>Request Body (example):</p>
            <pre><code>{
  "content": "This is a reply to the post"
}</code></pre>
        </li>
    </ul>

<h2 id="contributing">Contributing</h2>
    <p>Contributions are welcome! Please open an issue or submit a pull request for any improvements or additions.</p>

