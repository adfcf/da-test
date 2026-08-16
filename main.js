import { DiscordSDK } from
    "https://esm.sh/@discord/embedded-app-sdk";

const CLIENT_ID = "YOUR_APPLICATION_ID";

const discordSdk = new DiscordSDK(CLIENT_ID);

const status = document.getElementById("status");
const message = document.getElementById("message");
const button = document.getElementById("button");

async function start() {
    try {
        status.textContent = "Connecting to Discord...";

        await discordSdk.ready();

        status.textContent = "Connected to Discord! 🎉";

        console.log("Discord SDK is ready!");

    } catch (error) {
        console.error(error);

        status.textContent =
            "Couldn't connect to Discord 😢";
    }
}

button.addEventListener("click", () => {
    message.textContent =
        "You clicked the button! 🎉";
});

start();
