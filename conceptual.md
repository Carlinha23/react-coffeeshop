### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a powerful and flexible library that enhances the capabilities of React applications by providing robust routing functionality, enabling developers to build SPAs with a smooth and seamless user experience.

- What is a single page application?
A Single Page Application (SPA) is a type of web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach provides a more seamless and faster user experience, similar to a desktop application. 

- What are some differences between client side and server side routing?
Client-side and server-side routing are two different approaches to handling navigation and delivering content in web applications.
Client-Side Routing:

Handled in the browser using JavaScript.
Faster navigation after the initial load.
Smooth, interactive user experience.
Potential SEO challenges.
Complex browser history management.

Server-Side Routing:

Handled on the server.
Full page reloads for each navigation.
Potentially slower navigation, but faster initial load.
Better for SEO.
Simple browser history management.

Each approach has its strengths and weaknesses, and the choice between client-side and server-side routing often depends on the specific requirements and constraints of the application being developed.

- What are two ways of handling redirects with React Router? When would you use each?
React Router provides multiple ways to handle redirects in a React application. Two common methods are using the <Navigate> component (previously <Redirect> in older versions) and using the useNavigate hook. Here’s how each method works and when to use them:
<Navigate> Component
How It Works
The <Navigate> component is used within the JSX of your components to perform redirects declaratively. It can be conditionally rendered based on the application's state.

import { Navigate } from 'react-router-dom';

function ExampleComponent() {
  const isAuthenticated = false; // Replace with actual authentication logic

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
    </div>
  );
}

useNavigate Hook
How It Works
The useNavigate hook provides imperative navigation capabilities. You can call it within event handlers or effects to programmatically navigate to a different route.

import { useNavigate } from 'react-router-dom';

function ExampleComponent() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

<Navigate> Component: Best for declarative redirects within your component's JSX, especially when redirecting based on simple conditions.
useNavigate Hook: Best for imperative redirects, particularly in response to events or within complex logic and side effects.

- What are two different ways to handle page-not-found user experiences using React Router? 
Handling "page-not-found" scenarios, also known as 404 errors, is an essential aspect of creating a good user experience in web applications. React Router offers several ways to handle these scenarios. Here are two common methods:
Catch-All Route:

Usage: Simple 404 handling.
Benefits: Easy to implement, straightforward for basic applications.
Example: Using <Route path="*"> as the last route to catch all unmatched URLs.

Nested Route Configuration with Layout:

Usage: Complex applications with nested routing and common layout elements.
Benefits: Allows for 404 handling within a layout, maintaining a consistent UI structure.
Example: Using nested <Route> within a <Layout> component and defining a catch-all route at the end.

Both methods ensure that users are presented with a meaningful message or component when they navigate to a route that doesn’t exist, improving the overall user experience.

- How do you grab URL parameters from within a component using React Router?
In React Router, you can grab URL parameters from within a component using the useParams hook or the useParams function from the react-router-dom package. 
How It Works
useParams Hook: In functional components, you import the useParams hook from react-router-dom and call it within your component. It returns an object containing key-value pairs of URL parameters.

useParams Function: In either functional components or class components, you import the useParams function from react-router-dom and call it to get the parameters object. You then access individual parameters by their names.

Usage
Dynamic Routing: Use URL parameters when you have dynamic routes where certain parts of the URL represent data or identifiers (e.g., user profiles, product details).

Data Fetching: You can use URL parameters to fetch data related to the specific resource identified by the parameter value.

Component Customization: You can customize component behavior or appearance based on URL parameters.

- What is context in React? When would you use it?
Context in React provides a way to share data between components without passing props manually through every level of the component tree. It is useful for sharing global data, avoiding prop drilling, simplifying component trees, and optimizing performance in certain scenarios. Use context when you have data that needs to be accessed by many components or when you want to provide a more direct way to access shared data within your application.

- Describe some differences between class-based components and function
  components in React.
Both class-based components and function components are integral parts of React development. Class-based components have been around since the early days of React and provide a structured way to manage state and lifecycle. Function components, especially with hooks introduced in React 16.8, offer a more lightweight and functional approach to building components. Function components are preferred for their simplicity, readability, and the power of hooks for managing state and side effects. However, class-based components are still widely used, especially in legacy codebases or when specific lifecycle methods are required.

- What are some of the problems that hooks were designed to solve?
React hooks were designed to simplify and improve various aspects of React development, including code reuse, component lifecycle management, code organization, and performance optimization. By providing a more functional and composable API for managing component logic, hooks empower developers to write cleaner, more maintainable, and more scalable React applications.