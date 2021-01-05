# Random Password Generator

## Description
It's often useful to create different passwords for your various accounts across the web. However, we may not always want to get creative when it comes to making one up. That's where a random password generator comes in. This site is desiged to take in five sets of criteria when making a new password; how long it should be, upper case letters, lower case letters, numbers, and special characters. It then uses that criteria in randomly generating your new password.

## Method
I implemented four arrays to store the four character types that will be used in the password. Then an empty array was added that will randomly receive the elements from the previous four arrays depending on the user's preferances.

The process begins when the user presses the Generate Password button, which the event listener will be watching out for. Then a series of prompt and confirm statements will pop up. The input will determin the password generated.

If the character length is below 8 or above 128, the whole process will have to be initiated again. If the character length is appropriate, then four confirm statements will pop up asking the user for the criteria (upper, lower, number, special). Depending on whether the statements come back true or false, a new array will be created with the corresponding elements of the previous four arrays created. Then with this new array, that contains the parameters of the password, elements will be randomly selected a set number of times depending on how long the user wanted the character length to be. The randomly selected elements will be pushed into another empty array, where they will be turned into a string with the array method join(). Finally, that string will be shown on the text box for the user to see.

## Screenshots
https://charliecan2.github.io/randomPasswordGenerator/passwordScreenshots/basicLayout.png
https://charliecan2.github.io/randomPasswordGenerator/passwordScreenshots/characterLength.png
https://charliecan2.github.io/randomPasswordGenerator/passwordScreenshots/upperCaseConfirm.png
https://charliecan2.github.io/randomPasswordGenerator/passwordScreenshots/lowerCaseConfirm.png
https://charliecan2.github.io/randomPasswordGenerator/passwordScreenshots/numberConfirm.png
https://charliecan2.github.io/randomPasswordGenerator/passwordScreenshots/specialConfirm.png
https://charliecan2.github.io/randomPasswordGenerator/passwordScreenshots/passwordGenerated.png