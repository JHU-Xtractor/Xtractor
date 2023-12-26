
// Add needed imports
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import App from './App';
import { AmplifyProvider } from '@aws-amplify/ui-react'
import {createRoot} from 'react-dom/client';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
Amplify.configure(awsconfig);

// use the Amplify Provider component to intialize CSS
root.render(
  <AmplifyProvider>
    <ThemeProvider theme={studioTheme}>
        <App />
    </ThemeProvider>
  </AmplifyProvider>,
)