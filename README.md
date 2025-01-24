# Unexpected MongoDB updateOne Behavior

This repository demonstrates an uncommon bug encountered when using MongoDB's `updateOne` method with `upsert: true`.  The issue arises when the provided filter does not match any existing documents in the collection.  Instead of simply not performing an update (as one might expect), a new document is created, which is inconsistent with the intended behavior.

## Setup

1.  Clone this repository.
2.  Ensure you have Node.js and npm installed.
3.  Install the MongoDB Node.js driver: `npm install mongodb`
4.  Replace `<your_mongodb_connection_string>` in `bug.js` with your actual MongoDB connection string.
5.  Run `node bug.js` to reproduce the bug.
6.  Run `node bugSolution.js` to see the solution.

## Bug Reproduction

The `bug.js` file contains code that attempts to update a document that doesn't exist using `updateOne` with `upsert: true`.  The unexpected creation of a new document will be logged to the console.

## Solution

The `bugSolution.js` file presents a solution that uses `insertOne` when no matching document is found, providing more predictable behavior.

## Note

This is not a bug in MongoDB itself but rather a potential pitfall of using `upsert: true` in conjunction with filters that might not always find matching documents.  The best practice is to carefully consider the implications of `upsert: true` and use alternative approaches like `findOneAndReplace` or separate `findOne` and `insertOne` calls for more predictable behavior.