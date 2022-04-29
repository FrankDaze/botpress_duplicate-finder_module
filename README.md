## Overview

This module helps you to identify and delete duplicate Q&A entries in botpress.

## Download the ready to use module

1. Download the _duplicate-finder.tgz_ file
2. In botpress open the modules page and click on the upload module button.
3. Select the duplicate-finder.tgz and upload it.
4. Now you should the Duplicate Finder at the bottom of the page. Here you need to unzip it.
5. Activate the Duplicate Finder and restart your server.

## Build the module

1. Download the botpress repository from here 'https://github.com/botpress/botpress' and copy this files to `modules/duplicate-finder`
2. Open a terminal in the folder `modules/duplicate-finder` and type `yarn && yarn build`
3. Edit your `botpress.config.json` and add the module definition so it will be loaded:

```js
{
  ...
  "modules": [
    ...
    {
      "location": "MODULES_ROOT/duplicate-finder",
      "enabled": true
    },
}
```

4. Start Botpress: `yarn start`
5. Choose any bots in your workspace, then you should see the module in the sidebar !
