
// https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/
db
.getSiblingDB('mongo-test')
.createUser(
    {
        user: 'admin',
        pwd: '12345',
        roles: [
            {
               role: 'dbOwner',
               db: 'mongo-test'
            }

        ]
    }
);