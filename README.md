<h1>Todo Application with Mongoose</h1>
<h2>Project Overview</h2>
This project is a Todo Application built using Mongoose (MongoDB Object Data Modeling (ODM) library for Node.js). 
It allows users to create tasks (todos) and subtasks (subtodos) while associating them with user accounts. The app uses three key models:
<p></p>
<ul>
  <li><strong>User:</strong> Stores information about users who create todos.</li>
  <li><strong>Todo:</strong> Represents the main tasks created by users.</li>
  <li><strong>SubTodo:</strong> Represents subtasks associated with specific todos.</li>
</ul>
<p>Each model uses <strong>MongoDB</strong> for data storage and <strong>Mongoose</strong> for schema definitions and relationships between models.</p>
<h2></h2>

<h2>Table of Contents</h2>
<ol>
  <li><a rel="noopener" href="#features">Features</a></li>
  <li><a rel="noopener" href="#models">Models</a>
    <ul>
      <li><a rel="noopener" href="#user-model">User Model</a></li>
      <li><a rel="noopener" href="#todo-model">Todo Model</a></li>
      <li><a rel="noopener" href="#subtodo-model">SubTodo Model</a></li>
    </ul>
  </li>
  <li><a rel="noopener" href="#getting-started">Getting Started</a>
    <ul>
      <li><a rel="noopener" href="#prerequisites">Prerequisites</a></li>
      <li><a rel="noopener" href="#installation">Installation</a></li>
      <li><a rel="noopener" href="#database-setup">Database Setup</a></li>
    </ul>
  </li>
  <li><a rel="noopener" href="#project-structure">Project Structure</a></li>
  <li><a rel="noopener" href="#license">License</a></li>
</ol>

<h2></h2>
<h2>Features</h2>
<ul>
  <li><strong>User authentication</strong>: Users must be registered to create todos.</li>
  <li><strong>Todo management</strong>: Users can create, update, delete, and mark todos as complete/incomplete.</li>
  <li><strong>SubTodo management</strong>: Users can create subtasks for their todos.</li>
  <li><strong>Timestamps</strong>: Automatic tracking of creation and update times for all entities (todos, subtodos, and users).</li>
</ul>

<h2>Models</h2>
<h3>User Model</h3>
<p>The User model defines the schema for users, who can create todos and subtodos.</p>
<ul>
  <li><strong>Fields</strong>:
    <ul>
      <li><code>username</code>: A unique identifier for the user, stored in lowercase.</li>
      <li><code>email</code>: User's email, unique and required.</li>
      <li><code>password</code>: User's password, securely stored (use bcrypt in actual implementation).</li>
    </ul>
  </li>
</ul>
<h3>Todo Model</h3>
<p>The Todo model represents the main tasks created by users.</p>
<ul>
  <li><strong>Fields</strong>:
    <ul>
      <li><code>content</code>: The main content of the todo, required.</li>
      <li><code>complete</code>:  A boolean flag indicating if the todo is completed, default is false.</li>
      <li><code>createdBy</code>: A reference to the User who created the todo.</li>
      <li><code>subTodo</code>: An array of references to SubTodo objects.</li>
    </ul>
  </li>
</ul>
<h3>SubTodo Model</h3>
<p>The SubTodo model represents subtasks linked to a specific todo.</p>
<ul>
  <li><strong>Fields</strong>:
    <ul>
      <li><code>content</code>: The content of the subtask, required.</li>
      <li><code>completed</code>:  A boolean flag to indicate completion of the subtask, default is false.</li>
      <li><code>createdBy</code>: A reference to the User who created the subtask.</li>
    </ul>
  </li>
</ul>
<h2></h2>

<h2>Getting Started</h2>
<h3>Prerequisites</h3>
<p>To run this application, you need the following installed:</p>
<ul>
  <li><strong>Node.js</strong> (v14.x or later)</li>
  <li><strong>MongoDB</strong> (local or remote)</li>
</ul>
<h3>Installation</h3>
<ol>
  <li style="border: 1px solid #d9534f; padding: 10px; border-radius: 5px; background-color: #f2dede;">
    <strong>Clone the repository:</strong><br>
    <code>git clone https://github.com/your-username/todo-app-mongoose.git</code><br>
    <code>cd todo-app-mongoose</code>
  </li>
  <li style="border: 1px solid #d9534f; padding: 10px; border-radius: 5px; background-color: #f2dede;">
    <strong>Install dependencies:</strong><br>
    <code>npm install</code>
  </li>
  <li style="border: 1px solid #d9534f; padding: 10px; border-radius: 5px; background-color: #f2dede;">
    <strong>Set up environment variables:</strong><br>
    <p>Create a .env file in the root of your project with the following keys:</p>
    <code>MONGO_URI=mongodb://localhost:27017/todoapp</code>
    <code>PORT=5000</code>
  </li>
</ol>
<h3>Database Setup</h3>
<p>Ensure that MongoDB is running either locally or through a cloud provider (like MongoDB Atlas). The MONGO_URI in the .env file should point to the MongoDB instance.</p>

<h2></h2>
<h2>Project Structure</h2>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">├── models
│   ├── user.js           <span class="hljs-comment"># Defines the User schema</span>
│   ├── todo.js           <span class="hljs-comment"># Defines the Todo schema</span>
│   └── subTodo.js        <span class="hljs-comment"># Defines the SubTodo schema</span>
├── routes
│   ├── userRoutes.js     <span class="hljs-comment"># User authentication routes</span>
│   ├── todoRoutes.js     <span class="hljs-comment"># Todo CRUD routes</span>
│   └── subTodoRoutes.js  <span class="hljs-comment"># SubTodo CRUD routes</span>
├── controllers           <span class="hljs-comment"># Controllers for handling requests</span>
├── app.js                <span class="hljs-comment"># Entry point of the app</span>
└── .<span class="hljs-built_in">env</span>                  <span class="hljs-comment"># Environment configuration</span>
</code></div>

<h2></h2>
<h2>License</h2>
<p>This project is licensed under the MIT License.</p>
