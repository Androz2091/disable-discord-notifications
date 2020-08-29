const fetch = require('node-fetch');
const chalk = require('chalk');
const config = require('./config.json');

const makeRequest = async (method, url, body) => {
    const res = await fetch(url, {
        headers: {
            authorization: config.token,
            'content-type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined,
        method
    });
    const json = await res.json();
    return json;
};

const getGuilds = async () => {
    const res = await makeRequest('GET', 'https://discordapp.com/api/v8/users/@me/guilds');
    return res;
};

const startAt = Date.now();
getGuilds().then(async (guilds) => {
    for (const guild of (guilds.splice(80))) {
        await makeRequest('PATCH', `https://discordapp.com/api/v8/users/@me/guilds/${guild.id}/settings`, {
            message_notifications: 2
        });
    }
    console.log(chalk.bold(chalk.green(`Done. Notifications disabled for ${guilds.length} servers in ${(Date.now() - startAt) / 1000}s.`)));
});
