import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error);
        throw new Error("Cannot Connect To MongoDB");
    }
}

// disconnect the database when error happens(for security)
async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {   
        console.log(error);
        throw new Error("Cannot Disonnect From MongoDB");
    }
}

export {connectToDatabase, disconnectFromDatabase};