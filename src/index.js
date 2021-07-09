const { EventEmitter } = require("events");
const app = require("express")();
const topgg = require("@top-gg/sdk");

class VoteListener extends EventEmitter {
  /**
   * Creates a vote listener. Use the handleVotes function to start the express server.
   * @param {Object} options: The options to use for the webhook (auth, port)
   * @param {String} options.auth: The top.gg webhook authorization token (can be found on webhook page)
   * @param {Number} options.port: The port to listen on (for the express app)
   * @example ```js
   * const VoteListener = require('topgg-vote-receiver');
const vote = new VoteListener({
  auth: 'topggauth123',
  port: 3000,
});

vote.handleVotes();
vote.on('voted', (vote) => {
  console.log(vote);
});
console.log(`Listening on 3000`);
```
   */
  constructor(options) {
    super(options);
    this.auth = options.auth;
    this.port = options.port;
  }

  handleVotes = () => {
    const webhook = new topgg.Webhook(this.auth);
    app.post(
      "/dblwebhook",
      webhook.listener((vote) => {
        this.emit("voted", vote);
      })
    );

    app.listen(this.port);
  };
}

module.exports = VoteListener;
