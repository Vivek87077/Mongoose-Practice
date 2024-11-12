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
      <li><a rel="noopener" href="#environment-variables">Environment Variables</a></li>
      <li><a rel="noopener" href="#database-setup">Database Setup</a></li>
    </ul>
  </li>
  <li><a rel="noopener" href="#api-endpoints">API Endpoints</a></li>
  <li><a rel="noopener" href="#usage-example">Usage Example</a></li>
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
