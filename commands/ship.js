function randomInt(low, high)
{
    return Math.floor(Math.random() * (high - low) + low);
}

exports.run = async (client, message, args) =>
{ // eslint-disable-line no-unused-vars

		ZuTriggers = [
			client.config.GUILDID_TESTING, //franzbot testing - general
			client.config.GUILDID_ZU //Zu - general
		];
		if ( !ZuTriggers.includes(message.guild.id ) )
		{
			message.reply("\u200B" + `this command doesn't work here.`)
				.then(message.delete({ timeout: 5000, reason: 'Cleaning up uneeded message' }));
			return; //this command
		}
		
    var output = "";

    let joinedargs = args.join(" and ");
    console.log("Starting with: " + joinedargs + "\n");
    message.mentions.users.array().forEach(function(user)
    {
        //make a text replacement for mention -> username string

        useridstring = `<@${user.id}>`;
        usernickidstring = `<@!${user.id}>`;
		
		usernamestring = user.username;
		usernickstring = message.guild.members.cache.get(user.id).nickname;
		
		if (usernickstring == undefined)
		{
			usernickstring = usernamestring;
		}
		

        console.log("User: " + user.id + "\n" +
            "Nick: " + usernickstring + "\n" +
            "Name: " + usernamestring);

        joinedargs = joinedargs.replace(useridstring, usernamestring);
        joinedargs = joinedargs.replace(usernickidstring, usernickstring);

    });

    let rating = randomInt(0, 100);

    if (joinedargs)
    {
        output += "Checking the compatibility of " + joinedargs + ". It's **" + rating + "**%\n\n";
        for (let i = 0; i < rating; i++)
            output += ":star:";
    }
    else
        output += "I don't understand. Please just mention two people.";

    const msg = await message.channel.send("\u200B" + output);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
};

exports.help = {
    name: "ship",
    category: "Fun",
    description: "Franzbot is biased.",
    usage: "ship @person1 @person2"
};