import React, { useState, useEffect } from 'react';

import alanBtn from '@alan-ai/alan-sdk-web';
const alanKey='7887c008b36d84adaecc1f8666573fbe2e956eca572e1d8b807a3e2338fdd0dc/stage'
function App() {
  useEffect(() => {
    alanBtn({
      key:alanKey,
      onCommand:({command})=>{
        if(command==='testCommand'){
          alert("hi")
        }
      }
    })
  }, [])
  return (
    <div className="App">
     alan
    </div>
  );
}

export default App;
