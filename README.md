## Hello everyone 👋👋
Welcome to a simple hamburger promotion website🍔! This site is an interesting website with responsive design that will give you a taste of the taste of AEK Burgers. 
This project was developed to promote AEK Burger's products and facilitate the ordering process.



<h2><img align="left" alt="webstorm" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg" style="padding-right:10px;" />Web Storm</h2>
<p>WebStorm is a powerful integrated development environment (IDE) developed by JetBrains, specifically designed for JavaScript and web development. It offers many useful features for both beginners and experienced developers. Because of this, I used WebStorm for the development of the project.</p>

<h2><img align="left" alt="react" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />React</h2>
<p>React is a popular JavaScript library developed by Facebook that has become one of the basic building blocks of web applications today. It offers a component-based approach to building user interfaces (UI).</p>

<ul>
  <li><b>Components:</b> They are the smallest building blocks of the application. They are defined as functions or classes.</li>
  <li><b>Props: </b>Used to transfer data to components from outside.</li>
  <li><b>State:</b>Used to manage the state within the components themselves.</li>
  <li><b>JSX: </b>Defines the UI using JavaScript and an HTML-like syntax.</li>
  <li><b>Virtual DOM: </b>It is a copy of the real DOM that is kept in memory. Updates are made here first and then reflected in the real DOM.</li>
</ul>

<p>React (version 18.3) is a popular JavaScript library used to build the front-end of this project. Thanks to its component-based structure, it allows us to manage complex applications more easily by creating reusable UI elements.</p>
<p> In this project, we created the structure of pages such as hamburger menu, promotion images and order form using React components. For example, we created a separate component for the hamburger menu and in this component we managed the menu items and the logic of opening and closing the menu. </p>
<p>You can observe the components structure in the project:</p>
<img align="center" alt="coponents"  src="https://i.ibb.co/fYGJj4j/Screenshot-2024-08-09-141125.png">



<h2><img align="left" alt="mui" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" style="padding-right:10px;" />Material UI</h2>
<p>Material UI is a UI library that provides pre-designed components for your React apps based on Google's Material Design design principles. This gives your apps a more consistent, modern and user-friendly look.</p>
<ul>
  <li><b>Themes: </b>Contains colors, typography and other style elements that determine the overall look of your app.</li>
  <li><b>Components: </b>Pre-designed, ready-to-use UI elements. For example, Button, TextField, AppBar.</li>
  <li><b>Props: </b>Properties used to customize the behavior and appearance of components</li>
</ul>

<p>The main reason we chose Material UI for our project is that it offers a rich library of components based on Google's Material Design principles. In this way, we aimed to give our applications a modern, consistent and user-friendly look.</p>

<p>In our project, we used icons from material ui. These icons organized the footer structure and allowed us to switch to social media accounts by clicking on social media licons.</p>
<img align="center" alt="coponents"  src="https://i.ibb.co/WcSVMgH/Screenshot-2024-08-09-141858.png">
<img align="center" alt="coponents"  src="https://i.ibb.co/kHRp723/Screenshot-2024-08-09-142037.png">

<h2><img align="left" alt="react-router" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg" style="padding-right:10px;" />React Router</h2>
<p> It is a popular routing library that allows you to switch between different pages or components in React applications. This makes it very easy to develop single page applications (SPA).</p>
<ul>
  <li><b>BrowserRouter: </b>This is the component at the top of your application where all routing starts.</li>
  <li><b>Routes: </b>Defines the different routes.</li>
  <li><b>Route: </b>Defines the component corresponding to a specific URL.</li>
  <li><b>Link: </b>A link element used to transition from one page to another..</li>
  <li><b>Navigate: </b>Used to navigate programmatically.</li>
</ul>

<p>React Router supports the SPA architecture used in most modern web applications. This improves the user experience, reduces page load times and provides smoother navigation, which is why I used react router.</p>

<p>First, I used Borwser Router in Index.js to cover my application, Then in my app.js file, I defined Routes using Routes. In the Footer and Navbar component, I used NavLink to switch to the routes I defined. The reason I used NavLink was that when you click on the link, the .activated class is activated. In this way, I was able to shape it while it was active. 
</p>


  <img align="center" alt="coponents"  src="https://i.ibb.co/Yd8r6k4/Screenshot-2024-08-09-142454.png">
  <img align="center" alt="coponents"  src="https://i.ibb.co/LSBM22Q/Screenshot-2024-08-09-142503.png">
  <img align="center" alt="coponents"  src="https://i.ibb.co/yPthhBp/Screenshot-2024-08-09-142514.png">




## React Project Setup
<ol>
  <li>
    Install Node.js and npm (or yarn):
    <ul>
      <li>Node.js: A JavaScript runtime environment needed to run JavaScript code. Download and install it from the official website (https://nodejs.org/).</li>
      <li>npm: The package manager that comes with Node.js. It is used to install the packages needed for your project (for example, React). yarn is a similar package manager and can be used as an alternative to npm.</li>
    </ul>
  </li>
  <li>
    Creating a Project with create-react-app:
    <ul>
      <li>
        <img align="center" alt="coponents"  src="https://i.ibb.co/D4MDqSX/Screenshot-2024-08-09-143517.png">
        This command will create a new React project called "my-app". You can use any project name you like.
      </li>
      <li>
        Start the project server:
        <img align="center" alt="coponents"  src="https://i.ibb.co/BqjN2Vv/Screenshot-2024-08-09-143706.png">
      </li>
    </ul>
  </li>
</ol>
<p><b>For Detailed Information:  </b>https://react.dev/learn </p>




## Resources
<ul>
  <li><p><img align="left" alt="react" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />React: https://react.dev/</p></li>
   <li><p><img align="left" alt="react-router" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg" style="padding-right:10px;" />React Router Dom: https://reacttraining.com/react-router</p></li>
   <li><p><img align="left" alt="mui" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" style="padding-right:10px;" />Material UI: https://mui.com/material-ui/material-icons/</p></li>
</ul>

