export const TransactionSchema = {
  name: 'Transaction',
  properties: {
    id: 'int',
    nominal: 'string',
    date: 'string',
    type: 'string',
    note: 'string'
  },
  primaryKey: 'id',
};
