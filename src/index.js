import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  return (
    <div>
    <center>
    <h1>Jeenu Profile</h1>
    <img src="https://www.w3schools.com/html/img_girl.jpg" alt="" height="350"></img>
    </center>
    <h4>Hello, Iam Jeenu. I have professional IT experience in the areas of Designing, Developing, Testing, Deploying and
Supporting enterprise web and windows applications.In depth knowledge of analysis, development, maintenance and testing activities in the Software
Development life cycle of projects and Good Leadership Skills with Excellent communication skills.</h4>

<h3>Skills</h3>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png" alt="" height="50"></img>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20191205185435/Untitled-drawing-61.png" alt="" height="50"></img>
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/CSS.png" alt="" height="50"></img>
<img src="https://alameensoft.com/wp-content/uploads/2012/10/SQL-Server-2012.png" alt="" height="50"></img>
<img src="https://www.channelfutures.com/files/2015/02/jira_0.jpg" alt="" height="50"></img>
<img src="https://cdn2.vectorstock.com/i/1000x1000/69/21/agile-icon-methodology-development-scrum-vector-30766921.jpg" alt="" height="50"></img>
<h3>Location</h3>
<iframe title="Map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029379.265706783!2d-109.08828959480687!3d30.85471532818056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas!5e0!3m2!1sen!2sus!4v1645661769573!5m2!1sen!2sus" height="350" width="1000"></iframe>
<h3>Social Connection</h3>
<a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" height="80"></img>
</a>
<a href="https://github.com/jeenudgv" target="_blank" rel="noopener noreferrer">
<img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" alt="" height="80"></img>
</a>
</div>
  )
}

ReactDOM.render(<Home/>, document.getElementById('root'))
