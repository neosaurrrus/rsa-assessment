
# RSA Assessment

This is an assessment for RSA as per the given brief. It can be run with:

`npm start`

This will run the app on port 4000, to not clash with the mock api. This can be changed in package.json

## Key elements of my approach
 
1. The biggest technical hurdle was managing state so values in separate components could be updated. While a more complex app could use Context API or Redux, *for this assignment* I felt passing down props from a common parent component (App) was still the right solution to avoid over-engineering but I can see the arguments for not doing so too.

2. Since both quote and extras require API calls, I abstracted out the logic into its own useFetch hook to share in the `hooks` folder

3. I used Typescript and managed common types and enums in the `types` folder

4. I used Tailwind for styling and ensured a responsive design relying on flexbox primarily to intelligently handle different viewport sizes. I used RSA brand colours for the theming.

5. As an added bonus there is a **dark mode** which is used when the system theme is set accordingly.


Hope you like it!