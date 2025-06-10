import figlet from "figlet";

const server = Bun.serve({
    port: 6662,
    fetch(req) {
        const body = figlet.textSync("GODMODE");
        return new Response(body);
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);
