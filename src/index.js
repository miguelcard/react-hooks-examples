import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './UseStateEx';
import UseEffectEx from './UseEffectEx';
import UseMemoEx from './UseMemoEx';
import UseMemoEx2 from './UseMemoEx2';
import UseRefEx from './UseRefEx';
import UseRefEx2 from './UseRefEx2';
import UseRefEx3 from './UseRefEx3';
import UseReducerEx from './UseReducerEx';
import UseReducerEx2 from './UseReducerEx2';
import { UseCallbackEx } from './UseCallbackEx';
import {CustomHooksUseLocalStorage} from './CustomHooksUseLocalStorage';
import { UseContextEx } from './UseContextEx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffectEx /> */}
    {/* <UseMemoEx /> */}
    {/* <UseMemoEx2 /> */}
    {/* <UseRefEx /> */}
    {/* <UseRefEx2 /> */}
    {/* <UseRefEx3 /> */}
    {/* <UseReducerEx /> */}
    {/* <UseReducerEx2 /> */}
    {/* <UseCallbackEx /> */}
    {/* <CustomHooksUseLocalStorage /> */}
    <UseContextEx />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// skipped hooks TODO: 2.useContext, 3. useLayoutEffect ... leave the rest for after