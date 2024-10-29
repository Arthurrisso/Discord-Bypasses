var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://discord.com/api/v9/users/@me/mfa/totp/disable', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('Authorization', 'mfa.eyJpZCI6NzgwODk2ODQ3OTA3NzgyNjY3LCJlbWFpbCI6ImFydGh1cnJpc3NvNUBnbWFpbC5jb20ifQ.ZyA4aQ.dM9DDWJp-7FV1UbI5gLl57O1MdM');
xhr.onload = function () {
console.log(this.responseText);
};
xhr.send('{"code":"123123"}');