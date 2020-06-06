#!/usr/bin/env bash
set -eu
mongo -- "$MONGO_INITDB_DATABASE" <<EOF
    const admin = db.getSiblingDB('admin');
    admin.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD');
    db.createUser({user: '$MONGO_DATABASE_USER', pwd: '$MONGO_DATABASE_PASSWORD', roles: ["readWrite"]});
EOF
echo '***************************************** MongoDB INIT PROCESS COMPLETED SUCCESSFULLY *****************************************.';