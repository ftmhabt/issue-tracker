const App = () => {
  return (
    <>
      <Sidebar />
      <Issue />
    </>
  );
};

const Sidebar = () => {
  return; // some sidebar links
};

const Issue = () => {
  return (
    <>
      <div>some issue data</div>
      <Comments />
    </>
  );
};

const Comments = () => {
  return; // some issue comments
};

export default App;