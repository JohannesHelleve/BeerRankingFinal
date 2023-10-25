import { updateDB } from "../../../db/actions"

export async function POST() {
    try {
        // Implement logic to verify that the request comes from a trusted source

        await updateDB();

        return new Response("Database updated", {
            status: 200,
        })
    } catch {
        return new Response("Failed to update database", {
            status: 500,
        })
    }
}