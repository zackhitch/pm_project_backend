const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
    orgUrl: 'https://dev-714580.oktapreview.com',
    token: '00Wjsi9txlRl3CelycwFa_YfnA-KnoMxPCjQmkXqd1'
});

module.exports = client;