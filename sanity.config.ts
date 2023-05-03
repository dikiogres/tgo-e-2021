import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: '34kbkw0y',
  dataset: 'production',
  title: 'Distributed Properties',
  apiVersion: '2023-05-03',
  basePath: '/admin',
  plugins: [deskTool()],
  // schema: { types: schemas },
});

export default config;
