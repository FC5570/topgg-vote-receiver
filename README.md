# topgg-vote-receiver

A top.gg vote receiver which listens to votes for a bot.

## Example

```js
const VoteListener = require('topgg-vote-receiver');
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

## Events

1. 'voted' _(vote)_ - Emitted when a user votes for the bot. `vote` is an object which contains info of the user who voted and other details.

## API

### VoteListener.constructor(options)

`options` is an object which should contain the `auth` and the `port`:

1. **auth** (string): The webhook authorization token for the top.gg webhook. Can be found at the `Webhooks` page of the edit bot page.
2. **port** (number): The port to listen on for the express app.

### VoteListener.handleVotes()

This will start the webhook server.

## Your webhook dashboard should look something like this (if using the example above):

![](https://camo.githubusercontent.com/de589c73a4a72f855b595407134d890551d32b77fdd17b28409815b0c656ee2e/68747470733a2f2f692e696d6775722e636f6d2f77466c703448672e706e67)
