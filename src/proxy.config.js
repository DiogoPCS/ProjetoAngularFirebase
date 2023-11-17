// CORS Config
const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://etec.infinityfreeapp.com",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
];

module.exports = PROXY_CONFIG;