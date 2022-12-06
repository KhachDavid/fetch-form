# Language Documentation

The form supports 3 languages

* Armenian
* English
* Russian
* Spanish

English is the default language. Since I speak these languages, I decided to add them only to make sure that the terms are correct. However, the process of adding languages is very simple, given the modular structure. Here is a concise 4 step guide.

## Step 1

Create a file in the `languages` directory. Call the file `{language}.js`. For example, if adding Hindi, the file should be named `hindi.js`

## Step 2

Copy the contents of any other previously defined language file. So, you can go to `english.js` and copy everything to your new file. 

## Step 3

Rename the object name from english to the name of the new language. Then go ahead and translate all the words to your new language.

## Step 4

In the last step, go to `languages/index.js` and `languages/constants.js` files and add your new language as a constant. 

**Note:** Make sure to follow the alphabetical order.
