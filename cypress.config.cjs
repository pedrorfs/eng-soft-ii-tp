const { defineConfig } = require("cypress");

module.exports = defineConfig({
    port: 5173,
    e2e: {
        baseUrl: "http://localhost:5173",
    },
});
