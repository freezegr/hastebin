const fetch = require("node-fetch");

module.exports.upload = async (text, opts = {}) => {
  if(typeof text != 'string') throw new Error('Input is not text!');
  let url;
  let server = opts.server ? opts.server: 'https://hastebin.de/';
  if(!server.endsWith('/')) server = server+'/';

  const res = await fetch(`${server}documents`, {
    method: "POST",
    body: text.replace(/\u001b[^m]*?m/g,""),
    headers: {
      "Content-Type": opts.content_type ? opts.content_type: 'text/text'
    }
  });
  
  if (!res.ok) throw new Error(res.statusText);
  const { key } = await res.json();
  url = server+key
  if(opts.raw == true) url = `${server}raw/${key}`;
  return url;
};