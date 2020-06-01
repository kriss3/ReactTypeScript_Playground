import React from 'react';
import Message from './components/message/Message';
import MyApp from './components/myAppClass/myApp';

import './App.css';

function App() {

  let firstValue: string = 'Manny';
  let secondValue: number = 666;
  let thirdValue: boolean = true;
  let fourthValue: number[] = [1,2,3]; //object type
  let fifthValue: Array<string> = ['1','2','3'];
  //Tuple
  let aTuple: [string, number] = ['manny', 2]; 
  //Enum
  enum Codes {first=1 , second=2};
  //Any => use it sparingle
  let firstName: any = 'Manny';
  //Void
  const warining = (): void => {
    console.log('Warning');
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          The value {firstValue} is of  {typeof firstValue } type! <br/>
          The value {secondValue} is of  {typeof secondValue } type! <br/>
          The value {thirdValue} is of  {typeof thirdValue } type! <br/>
          The value {fourthValue} is of  {typeof fourthValue } type! <br/>
          The value {fifthValue} is of  {typeof fifthValue } type! <br/>
          The value {aTuple[0]} is of  {typeof aTuple[0]} type! <br/>
          The value {aTuple[1]} is of  {typeof aTuple[1]} type! <br/>
          The value {firstName} is of  {typeof firstName} type! <br/>
        </p> <br/>

        <Message message='This is a simple message' /> <br/>

        <MyApp name='Kris' message='This is a message from the other Kris' />
    
      </header>
    </div>
  );

  
}

export default App;
