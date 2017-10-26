## Installation instructions:

Download and install: 
- **Node.js** (LTS https://nodejs.org/en)
- **git** (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **Python 2.7.14** (https://www.python.org/downloads)
- **Ruby** (Windows RubyInstaller https://rubyinstaller.org/downloads)
- **Java** (https://java.com/ru/download)

- Install Windows-Build-Tools **npm install --global --production windows-build-tools**
- Install Bower, with **npm install -g bower** (Bower requires node, npm and git.)
- Install the Grunt command line tools, with **npm install -g grunt-cli**
- Navigate to the **root** directory and run **npm install** and **bower install** to install our dependencies listed in **package.json** and **bower.json** file

In order for you to have the latest version of the packages, run the **bower update** and **grunt build** command and in folder **dist/** you will have updated version of these files.

After customization run the **grunt build** command and the new version with modifications will automatically be compiled under the folder **/dist**.

To be more productive while working it is enough to execute the command **grunt server** which results in activating the *Static File Server* where every change made in the files is reflected automatically in real time to the browser, after having configured the option for livereload as well as browser synchronisation.

Use **sass --watch sass/:dist/scc** for autouptating your **css** from **sass**


## IRA project structure

The file structure in the project is similar to the HTML5 Boilerplate file structure (https://html5boilerplate.com)

- Any SCSS file created by the developer during application development is compiled and a compressed version is automatically made.
- Any JS file created by the developer during application development is compiled with Babel and a compressed version is automatically made.
- The expanded version of CSS and JS files will be replaced with the compressed version, from all the HTML files.
- The whole code will be cleaned by removing unnecessary white spaces, empty attributes, etc., and every HTML file will be formatted with 2 spaces for each indent level.
- Every HTML file will be validated.
- Every image found in the **img/** folder will be compressed.
- Every SVG file found in the **img/** folder will be compressed.
- In the root the file **app-name-vx.xx.zip** will be created containing all the files in the **dist/** folder.

