import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

// this routes are loadedd and build considering the html structure in microfrontend-layout.html.
// - child routes will contain the father information on the screen too by default. If you want the fater
// prefix to be considered on the path resolution, put this route inside the other on the HTML.
// - exact: if true, route loses its default 'prefix' behavior and search for an exact match. Do not
// nest routes on a exact route
// - default: This route will match allr remaining URL's not defined by sibling routes.
const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
