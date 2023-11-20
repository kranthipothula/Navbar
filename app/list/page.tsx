const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
return res.json();
};

export default async function List() {
const posts = await getPostsData();
return (
    <div>
      <table>
  <thead>
    <tr>
      <th>Title</th>
    </tr>
  </thead>
  <tbody>
    {posts.map((post: any) => (
      <tr key={post.id}>
        <td>{post.title}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}