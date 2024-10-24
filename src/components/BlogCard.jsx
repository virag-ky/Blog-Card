function BlogCard({ data, children }) {
  return (
    <article className="blog-card">
      <figure>
        <img src={data.image} alt="A staged living room for inspirations" />
      </figure>
      <p className="label">{data.label}</p>
      <h2>{data.title}</h2>
      <p className="description">{data.description}</p>
      {children}
    </article>
  );
}

export default BlogCard;
