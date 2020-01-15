# TweetDoctor
A Twitter Bot Repository using Azure Functions, Logic Apps and Github Actions.

## Project Motivation
"A Tweet a day keeps the doctor away!"

Most people are not great with posting to Twitter, so what if you created a Twitter Bot that ensured you sent at least one tweet a day?
In this project I created a CI/CD Node.js based Twitter Bot.
* Azure functions to write the serverless code
* Azure Logic Apps to set up the automation workflow
* Github Actions to set of Continuous Integration and Continuos Deployment

*This project was inspired by my colleague Phil's Serverless Twitter Bot Tutorial. Which is beautifully documented.*

Check it out here: https://github.com/TheRealCodeBeard/ServerlessTwitterBot

## Steps followed

Instructions for this are detailed in Phil's github link above.

1. Set up GitHub Repo as node project
2. Install Functions Extensions for VSCode (you don't have to switch to the Azure Portal as much)
3. Create Function locally- you get to edit the code to tweet something unique

```javascript
module.exports = async function (context, req) {
    let currentdate = new Date();

    context.log('Generating Tweet...');
    context.res = {
        body: "A tweet a day keeps the doctor away by TweetDoctor bot on " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " at "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes()
    };
};
```
4. Push Function to Azure
5. Build the Logic App

Steps: recurrence step(set to execute every 24 hours), an HTTP trigger that calls the Azure function and a twitter action(in built function in logic apps) to post a tweet(response of the Azure Function)

6. Set up a Github Action
7. Make your Twitter Bot Live

I got to the point where my logic app was tweeting the response of the Azure function. Github actions also meant that any code I committed and pushed from my VS Code was built and deployed to my production environment a.k.a my Azure Function. CI/CD complete and project all done!

![Image description]https://github.com/similola/TweetDoctor/blob/master/tweetscreenshot.PNG


