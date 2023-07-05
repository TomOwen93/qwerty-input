function UncontrolledInput(): JSX.Element {
  return (
    <>
      <p>Here's an input:</p>
      <input />
      <p>
        But it's hard to detect what it contains (in a nice React-friendly way)
      </p>
      <p>So I can't tell you anything about it...</p>
    </>
  );
}

export default UncontrolledInput;
