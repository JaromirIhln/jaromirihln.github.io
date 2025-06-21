# jaromirihln.github.io
Testing the BlazorWebAssembly app deployment on GitHub pages
# How to run locally
Open the solution in Visual Studio and create the BlazorWebAssembly project.
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
