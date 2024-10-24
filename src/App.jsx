import BLOG_CARD_DATA from "./data";
import arrow from "./img/arrow-right-line.svg";
import BlogCard from "./components/BlogCard";
import Credits from "./components/Credits";

function App() {
  return (
    <div>
      <BlogCard data={BLOG_CARD_DATA[0]}>
        <a href="#" className="read-more">
          Read more
          <img src={arrow} alt="arrow icon" />
        </a>
      </BlogCard>
      <Credits />
    </div>
  );
}

export default App;
