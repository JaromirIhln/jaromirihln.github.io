# jaromirihln.github.io
Testing the BlazorWebAssembly app deployment on GitHub pages.
# Official instructions of dotnet
I followed the official instructions [dotnet/blazor-samples](https://github.com/dotnet/blazor-samples) (author: dotnet). The only change compared to the original is that I deployed the Blazor WebAssembly application directly to the root directory of this repository([Your Name or organization].github.io). I would not like to take credit for anything else. I had to modify some steps and everything that could be created using the CLI.
The project can also be created in VScode, but you have to pay attention to the individual steps - otherwise the project will fail - that's why I recommend VS2022.

# Start of GitHub pages
Follow the steps on this page https://pages.github.com/ - just don't create index.html.
Just create a repository README.md file, which will already be available on your page ([YourName].github.io)

# How to run locally
Open your githup pages repository(this can be done directly from Git) in Visual Studio and create the BlazorWebAssembly project.
Create with the command line:
```bash
dotnet new blazorwasm -o [YourAppName] -f net9.0 # Not use -n option project name and folder name must be the same
cd [YourAppName]
dotnet new sln -n [YourAppName]
dotnet sln [YourAppName].sln add [YourAppName].csproj  #Add the project to the solution
```
# Ading nested files
To add nested files to the project, you can use the following command:
```bash
dotnet new gitattributes # Add .gitattributes file and add line on scripts *.js   binary
```
create file name .nojekyll in the root folder to disable Jekyll processing on GitHub pages
and save the file as empty.
in wwwroot folder create file decode.js and add the following content:
copy thys content to the decode.js on web address:
https://github.com/dotnet/blazor-samples/blob/main/BlazorWebAssemblyXrefGenerator/wwwroot/decode.js
and create this file in vscode editor - copy decode.js on project wwwwroot folder
# Setting up GitHub Pages to Github Actions
On repository - click to settings and find item 'Pages' - change settings of 'Deploy from a branch' to
'GitHub Actions' and don't choose Jekyll, but choose Static Html and setting this.
Now a folder .github, workflows will be created and inside there will be static.yml, which also needs to be edited - copy on this repository .github/workflows (otside of project - inside repository)
 [![Deploy Blazor WASM to GitHub Pages](https://github.com/JaromirIhln/jaromirihln.github.io/actions/workflows/static.yml/badge.svg)](https://github.com/JaromirIhln/jaromirihln.github.io/actions/workflows/static.yml) 
 # Publish Action passed
 Your site was last deployed to the github-pages environment by the Deploy Blazor WASM to GitHub Pages workflow.
 # Summary
 add decode.js
 add .nojekyl
 add .gitattributes(from dotnet CLI)
 If you don't need redirection - you don't even need to change it
 ```
 <base href="/" />  - # this is okay
```
I hope I didn't forget anything.😉
# Reload page fix
Create on wwwroot file named 404.html. It is for copying index.html to the 404.html page - you will be returned to the page you are on - otherwise the status code is 404 page not found.
```
- name: Publish Blazor WASM
  run: dotnet publish WasmApp/WasmApp.csproj -c Release --nologo

- name: Copy index.html to 404.html for SPA fallback
  run: cp ${{ env.PUBLISH_DIR }}/index.html ${{ env.PUBLISH_DIR }}/404.html

- name: Setup Pages
  uses: actions/configure-pages@v5

# ... other existings steps (upload, deploy) ...
```
Or copy contents from static.yml on this project.
It works beautifully - if you customize the pages.👍😉
[![Deploy Blazor WASM to GitHub Pages](https://github.com/JaromirIhln/jaromirihln.github.io/actions/workflows/static.yml/badge.svg)](https://github.com/JaromirIhln/jaromirihln.github.io/actions/workflows/static.yml)
##Updating sample content
I added components to my Blazor app that represent me. I replaced the Coutner component with a simple calculator with buttons, so you can enter the entire example into the input. I translated the weather into Czech and added examples of updated data starting today for the entire week.
All components work great, including the gallery (lightbox) and the contact form demo (mail provider -not server). Some pages will take you to my school static website subdomian - [!(https://mypage.jaraweb.cz)], where there are JavaScript applications - thanks for dotne/blazor-samples is it a amazing to way.👍😉👌
I'm very happy that I found instructions on how to deploy a C# Blazor application on real hosting, I don't mind at all that it's a static SPA - I was mainly interested in the C# language - I have final tests waiting for me in full-stack ASP.NET core MVC, React, Javascript and NodeJS.
