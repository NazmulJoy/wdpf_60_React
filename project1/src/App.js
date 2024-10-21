import Header, { msg } from "./Header.js";
import Footer from "./Footer.js";
import { data } from "./News.js";
import mylist from "./List.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {msg}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
        voluptatum quod consectetur eius! Eum minus, vel beatae quis adipisci
        libero. Voluptas, accusamus fugit asperiores quo placeat incidunt amet
        quibusdam facilis!
      </p>
      <h3>{data.title}</h3>
      <p>{data.details}</p>
      <h1>All news</h1>
      <ul>
        {mylist.map(function (item) {
          return <li><b>Title :</b> {item.title} <b>Url :</b>  {item.url} <b>Author :</b>  {item.author} <b>Number of comments :</b> {item.num_comments}</li>;
        })}
      </ul>
      <Footer></Footer>
    </div>
  );
}

export default App;
