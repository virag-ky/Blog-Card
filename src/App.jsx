import BlogCard from "./components/BlogCard";

function App() {
  return (
    <div>
      <BlogCard />
      <div class="credits" data-gfe-screenshot-exclude="true">
        A challenge by &nbsp;
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by &nbsp;
        <a
          href="https://www.greatfrontend.com/projects/u/username"
          target="_blank"
        >
          Virag Kormoczy
        </a>
        .
      </div>
    </div>
  );
}

export default App;
