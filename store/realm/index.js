const Realm = require("realm");
const { TransactionSchema } = require("./TransactionSchema");

const realm = new Realm({
    schema: [TransactionSchema]
})

export default realm