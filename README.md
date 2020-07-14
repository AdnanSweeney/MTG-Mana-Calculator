#MTG-Mana-Calculator

This ReactJS app is just a project to help my friends calculate their mana ratios faster for drafted decks!

To modify this app, do the following:

1. Fork this repo and clone
2. Navigate to the directory for the project and `npm install`
3. Once changes are ready to be deployed, `cd MTG-Mana-Calculator` and then `npm run deploy` to create an optimized build, and then publish the changes with surge onto manaculator.surge.sh.

To deploy a new project with surge, 
`npm run build` to create an optimized build
`cd build` to get to that build directory
`surge`

Make sure that there is no homepage attribute in `package.json` as this will change the path of the assets within the new build!