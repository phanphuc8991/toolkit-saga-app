import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllCatStart } from "./catSlice";
function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCatStart());
  }, []);
  console.log(cats);
  return (
    <div className="App">
      <h1>List Cat</h1>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                alt={cat.name}
                src={cat.image.url}
                width="200"
                height="200"
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h2>Temperament: {cat.temperament}</h2>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
