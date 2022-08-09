import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from './App';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

// every microfrontend that is loaded by the root-config needs to have this three methods.
// The file that is loaded by importmap needs to export bootstrap, mount and unmount so
// the single-spa can be able to toggle content properly.

// bootstrap: Prepare our SPA. (create a div, add id=root to the div, insert content there, etc)
// mount: activate our bootstrap and render on dom
// unmount: remove our microfrontend from the dom.

// we can implement this methods by ourselves but standard spas already have this methods implemented
export const { bootstrap, mount, unmount } = lifecycles;
