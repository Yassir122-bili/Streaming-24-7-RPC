const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
});

const keepAlive = require("./server.js");
keepAlive();

function formatTime() {
  //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: "America/New_York", //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

client.on("ready", async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence(client)
    .setApplicationId("1351417218902265916")
    .setType("STREAMING")
    .setURL("https://www.twitch.tv/alex_jbad") //Must be a youtube video link
    .setState("₊ ⁺✩ 𝟑𝐈𝐂𝐇 𝐎𝐔 𝐍𝐒𝐀 😁💪")
    .setName("₊ ⁺✩ 𝟑𝐈𝐂𝐇 𝐎𝐔 𝐍𝐒𝐀 😁💪")
    .setDetails(`! 𝐀 𝐋 𝐄 𝐗 🔱 [${formatTime()}]`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(
      "IMAGE",
    ) //You can put links in tenor or discord and etc.
    .setAssetsLargeText("₊ ⁺✩ 𝐋𝐚 𝐟𝐚𝐦𝐢𝐥𝐢𝐚 𝐄𝐬 𝐓𝐨𝐝𝐨𝐬 🔱") //Text when you hover the Large image
    .setAssetsSmallImage(
      "IMAGES",
    ) //You can put links in tenor or discord and etc.
    .setAssetsSmallText("Verified") //Text when you hover the Small image
    .addButton("Portfolio", "https://guns.lol/alex_yass")
    .addButton(
      "Github",
      "https://guns.lol/alex_yass",
    );

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `! 𝐀 𝐋 𝐄 𝐗 🔱 [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env["TOKEN"];
client.login(mySecret);
