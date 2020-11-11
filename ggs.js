
var ggsjs = function(){};

let axios = requoire("axios")

// e.g let data = ggs.discordQuery(token, discordid);
ggsjs.discordQuery = async function(token, discordid) {
    try {
        let response = await axios.get(`https://ggs.sx/api/v1/user/discord/${discordid}?api_token=${token}`)
        return response;
        }catch(error) {
            let current_date = moment().format('HH:mm | DD/MM/YYYY')
            return (`${current_date} Error With Function discordQuery`, error)
        };
};

// e.g let data = ggs.steamQuery(token, steamid);
ggsjs.steamQuery = async function(token, steamid) {
    try {
        let response = await axios.get(`https://ggs.sx/api/v1/user/steam/${steamid}?api_token=${token}`)
        return response;
        }catch(error) {
            let current_date = moment().format('HH:mm | DD/MM/YYYY')
            return (`${current_date} Error With Function steamQuery`, error)
        };
};

// e.g let data = ggs.serversQuery();
ggsjs.serversQuery = async function() {
    try {
        let response = await axios.get('https://ggs.sx/api/v1/servers')
        return response;
    }catch (error) {
        let current_date = moment().format('HH:mm | DD/MM/YYYY')
        return (`${current_date} Error With Function serversQuery`, error)
    }
}

// e.g let data = ggs.shoutsQuery();
ggsjs.shoutsQuery = async function() {
    try {
        let response = await axios.get('https://ggs.sx/api/v1/shouts/')
        return response;
    }catch (error) {
        let current_date = moment().format('HH:mm | DD/MM/YYYY')
        return (`${current_date} Error With Function shoutsQuery`, error)
    }
}

module.exports = new ggsjs();