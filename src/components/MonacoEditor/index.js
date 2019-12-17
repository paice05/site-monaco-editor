import React from "react";

import MonacoEditor from 'react-monaco-editor'

const Editor = () => {
  return <MonacoEditor
  height="600"
  language="javascript"
  theme="vs-dark"
  defaultValue="// type your code..."
  options={{
    lineNumbers: true,
    fontSize: '18px',
    fontFamily: 'Fira Code',
    fontLigatures: true,
  }}
/>;
};

Editor.propTypes = {};

export default Editor;