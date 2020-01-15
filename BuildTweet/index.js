module.exports = async function (context, req) {
    let currentdate = new Date(); 
    let datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " at "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes();
    console.log(datetime);
    context.log('Generating Tweet...');
    context.res = {
        body: "A tweet a day keeps the doctor away by TweetDoctor bot on "+datetime
    };
};