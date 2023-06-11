// React js - Render html

// React's goal is in many ways to render HTML in a web page.
// React renders HTML to the web page by using a function called createRoot() and its method render().

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);