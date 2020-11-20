
var ggsjs = function(){};

let axios = require("axios")

// e.g let data = ggs.discordQuery(token, discordid);
ggsjs.prototype.discordQuery = async function(token, discordid) {
    try {
        let response = await axios.get(`https://ggs.sx/api/v2/user/discord/${discordid}?api_token=${token}`)
        return response;
        }catch(error) {
            let current_date = moment().format('HH:mm | DD/MM/YYYY')
            return (`${current_date} Error With Function discordQuery`, error)
        };
};

// e.g let data = ggs.steamQuery(token, steamid);
ggsjs.prototype.steamQuery = async function(token, steamid) {
    try {
        let response = await axios.get(`https://ggs.sx/api/v2/user/steam/${steamid}?api_token=${token}`)
        return response;
        }catch(error) {
            let current_date = moment().format('HH:mm | DD/MM/YYYY')
            return (`${current_date} Error With Function steamQuery`, error)
        };
};

// e.g let data = ggs.serversQuery(token);
ggsjs.prototype.serversQuery = async function(token) {
    try {
        let response = await axios.get(`https://ggs.sx/api/v1/servers?api_token=${token}`)
        return response;
    }catch (error) {
        let current_date = moment().format('HH:mm | DD/MM/YYYY')
        return (`${current_date} Error With Function serversQuery`, error)
    }
}

// e.g let data = ggs.shoutsQuery(token);
ggsjs.prototype.shoutsQuery = async function(token) {
    try {
        let response = await axios.get(`https://ggs.sx/api/v1/shouts?api_token=${token}`)
        return response;
    }catch (error) {
        let current_date = moment().format('HH:mm | DD/MM/YYYY')
        return (`${current_date} Error With Function shoutsQuery`, error)
    }
}

ggsjs.prototype.taxesQuery = async function() {
    try {
        let response = await axios.get(`https://ggs.sx/api/v2/taxes?api_token=${token}`)
        return response;
    }catch (error) {
        let current_date = moment().format('HH:mm | DD/MM/YYYY')
        return (`${current_date} Error With Function shoutsQuery`, error)
    }
}

module.exports = new ggsjs();