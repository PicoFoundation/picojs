To unapprove a multi-sig transaction, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`unapprove`](https://github.com/PICOIO/picoio.contracts/blob/52fbd4ac7e6c38c558302c48d00469a4bed35f7c/contracts/picoio.msig/include/picoio.msig/picoio.msig.hpp#L73) action of the `picoio.msig` account.

In the example shown below `userbbbbbbbb` unapproves the `changeowner` proposal, previously proposed by `useraaaaaaaa` using `userbbbbbbbb`'s `active` permission.
```javascript
(async () => {
  await api.transact({
    actions: [{
      account: 'picoio.msig',
      name: 'unapprove',
      authorization: [{
        actor: 'userbbbbbbbb',
        permission: 'active',
      }],
      data: {
        proposer: 'useraaaaaaaa',
        proposal_name: 'changeowner',
        level: {
          actor: 'userbbbbbbbb',
          permission: 'active',
        }
      },
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
    broadcast: true,
    sign: true
  });
})();
```