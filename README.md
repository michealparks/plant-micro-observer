# Plant Micro-Observer App

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Getting started

```
npm install
```

#### Developing
```bash
npm start
```

#### Building
```bash
npm run build
npm run preview
```

#### Deploying
```bash
npm run gh-pages
```

## Design and Technology Discussion
The app consists of highly decoupled components that share data via message passing through svelte "stores": reactive variables that can update components that subscribe to their changes when reassigned.

#### Svelte
Despite spending years with - and enjoying - React, Svelte has been my goto frontend framework for a while. It brings a number of innovations that speed up developer agility and app scalability: reactivity based on a simple assignment syntax, strong opinions about scoped CSS, and framework code that is compiled into vanilla DOM operations rather than shipped with a runtime.

#### Localforage
Since we're persisting a lot of images and objects, IndexedDB is the only scalable browser storage solution. IndexedDB's API, however, has a lot of boilerplate, which localforage nicely abstracts away.

#### Vite
Vite and snowpack were major bundling innovations that occurred in 2020. These tools take advantage of native ES6 modules by only transpiling the module that's currently being edited, and serves these modules individually rather concatinating them together into a bundled file. This makes typescript, sass, svelte transpilation, and dev startup nearly instantaneous as the app scales.

## Next Steps
- Storage-persistant filters for groups and other metadata should exist within a hamburger menu
- Discarding items should have an undo action for users who accidently discarded
- Better data structures should be made for faster filtering, and more optimizations should be made for users that have uploaded many images
- Assigning objectURLs to all images at startup could slow it down as number of images grow
- Annotations are really barebones and finicky:
	- Need to change input position based on annotation location
	- Need to allow dragging, deleting annotations
- There aren't any tests yet:
	- Need tests for adding images, removing images, updating images
	- Need tests for filtering images