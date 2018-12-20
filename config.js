const pocketConfig = {
    consumer_key: '<yourConsumerKey>',
    access_token: '<yourAccessToken>',
    tag: 'kindle'
}

const sendgridConfig = {
    api_key: '<yourApiKey>',
    from_address: '<yourEmailAddress>',
    kindle_address: '<yourKindleEmailAddress>'
}


module.exports.pocketConfig = pocketConfig;
module.exports.sendgridConfig = sendgridConfig;