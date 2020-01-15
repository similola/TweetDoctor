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