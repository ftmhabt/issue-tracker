import { useData } from "./components/useData";

const App = () => {
  // fetch is triggered in useEffect there, as normal
  const { data } = useData('/get-sidebar');

  // show loading state while waiting for the data
  if (!data) return 'loading';

  return (
    <>
      <Sidebar data={data} />
      <Issue />
    </>
  );
};

const Sidebar = () => {
  return; // some sidebar links
};

const Issue = () => {
  // fetch is triggered in useEffect there, as normal
  const { data } = useData('/get-issue');

  // show loading state while waiting for the data
  if (!data) return 'loading';

  // render actual issue now that the data is here!
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Comments />
    </div>
  );
};

const Comments = () => {
  const { data } = useData('/get-comments');

  // show loading state while waiting for the data
  if (!data) return 'loading';

  // rendering comments now that we have access to them!
  return data.map((comment,index) => <div key={index}>{comment.title}</div>);
};

export default App;