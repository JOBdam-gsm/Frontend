export const Fetch = async (url: string, data?: any) => {
    try {
        const header: Record<string, string> = {
            "Content-Type": "application/json"
        };
        const response = await fetch(
            url,
            {
                method: "POST",
                headers: header,
                body: data ? JSON.stringify(data) : null,
                cache: "no-store",
            }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch plans.");
        }
    }
    catch (error) {
        console.log(error);
    }
}
