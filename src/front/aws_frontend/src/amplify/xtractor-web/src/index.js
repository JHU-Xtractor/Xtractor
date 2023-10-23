
// Add needed imports
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import ReactDOM from 'react-dom'
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import App from './App';
import { AmplifyProvider } from '@aws-amplify/ui-react'

Amplify.configure(awsconfig);


// use the Amplify Provider component to intialize CSS
ReactDOM.render(
  <AmplifyProvider>
<ThemeProvider theme={studioTheme}><App /></ThemeProvider>
    </AmplifyProvider>,
  document.getElementById('root')
)
