import QwertyInput from "./components/QwertyInput";
import UncontrolledInput from "./components/UncontrolledInput";

function App(): JSX.Element {
  return (
    <>
      <h2>Controlled input</h2>
      <QwertyInput />
      <hr />
      <h2>Uncontrolled input</h2>
      <UncontrolledInput />
    </>
  );
}

export default App;
