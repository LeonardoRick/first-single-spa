# first-single-spa

This is a project that show a single-spa (<https://single-spa.js.org/>) up an running.

This project is acctualy some decoupled projects together
1 - root-config: The root and orchestrator that control what route mount and unmount each MFE* (Micro Front-end)
2 - react-microfrontend
3 - react-parcel
4 - utils: Utility module that exports functions and constants shared across all projects

This project exemplify the the following features:

- React microrfontend with inner routes
- React Parcel* inserted inside react-microfrontend
- Shared dependencies (react and react-dom) included on the importmap of the root config
- Javascript custom events to share data between microfrontends
- Lazy loading working out of the box! (see react-microfrontend  /counter route)
- Setting externals on webpack to share react and react-dom between react-microfrontend and react-navbar
- All other pages keep working if some MFE do not load properly

Run in development mode:
On the root folder run:
1 - npm i
2 - npm run install-all
3 - npm start

This will install all dependencies on each project and run all of them concurrently on the same terminal, including the root config

Dictionary:
MFE: Micro Front-end
Parcel: (Micro Fron-tend that is designed to be injected inside others using System.import, see react-microfrontend/components/CreateTask.tsx)
