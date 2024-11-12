<h1>Todo Application with Mongoose</h1>
<h2>Project Overview</h2>
This project is a Todo Application built using Mongoose (MongoDB Object Data Modeling (ODM) library for Node.js). 
It allows users to create tasks (todos) and subtasks (subtodos) while associating them with user accounts. The app uses three key models:

<ul>
  <li style="margin-bottom: 8px; margin-top: 8px; padding-left: 6px;"><strong>User:</strong> Stores information about users who create todos.</li>
  <li><strong>Todo:</strong> Represents the main tasks created by users.</li>
  <li><strong>SubTodo:</strong> Represents subtasks associated with specific todos.</li>
</ul>
Each model uses MongoDB for data storage and Mongoose for schema definitions and relationships between models.
