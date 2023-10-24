# JM-Text-Editor

### License Badge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

As a developer, it's important to have offline access to your work, as working in the cloud could result in data loss and other problems. To solve this issue, I have built upon a text editor PWA application that can either be downloaded via prompt or used offline through caching and IndexedDB. The functionality of the site allows users to create and save information to their local devices without worrying about losing their work.

## Table of Contents

- [Title](#jm-text-editor)
- [License Badge](#license-badge)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

Either: 

1. Clone the repo and open in VS Studio, run npm run build and npm run start. Open the server.

2. Visit the deployed Heroku application and either install by prompt or use online.

## Usage

When a user first opens the application, they'll find a familiar text editor interface that resembles the one in VSCode. Users can create lines of text by typing on their keyboard. Unlike normal text editors like Notepad, there's no need to manually save your work. Instead, your work is automatically saved when you switch focus to another tab or window. This autosaved data is stored locally in your browser's IndexedDB, which ensures that your work is accessible even while offline. After refreshing the application with saved changes, your content will be rendered back into the text editor, so you can continue working where you left off.

There's two methods in installing the application onto a user's local device. Users can either click the 'Install' button located at the top left of the page or select the small web icon on the right of the URL bar. Upon selection, one will be prompted to install the application on their device.

Once the application is installed locally, it functions the same to the online version, with the advantage of not requiring an internet connection to function. This capability is achieved through a service worker that caches certain files within the application. This caching allows the application to display content after an initial connection to the server, and it updates when reconnected.

Deployed application:
https://jm-text-editor-7ef05cc019a6.herokuapp.com/

Github Repo: 
https://github.com/jujusoi/JM-Text-Editor

## Features

- Bundles js files using webpack.
- Generates a html file, service worker, and manifest file.
- Next-gen js functions without errors.
- IndexedDB will create a db upon first load to store data locally.
- Entering content and losing focus from the DOM will save the data.
- Reopening with render the saved data back into the DOM.
- Clicking the install button will prompt the user to install the application. Once installed it will save onto their local device.
- Static assets are cached for offline use.
- Heroku deployed.


## Contributing

N/A

## Tests

N/A

## Questions

N/A

GitHub user:
- jujusoi, https://www.github.com/jujusoi/

If further inquiry is necessary, reach out to me through my email address: 
- jalxmcdonald@hotmail.com

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
