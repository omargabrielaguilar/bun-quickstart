const server = Bun.serve({
    port: 6662,
    fetch(req) {
        return new Response("CONCHETUMAREEE");
    },
});

console.log(`Listening on http://localhost:${server.port}...`);

