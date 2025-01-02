"use server"

export const sendDiscordMessage = async (formData) => {
    try {
        const rawFormEntries = Object.fromEntries(formData)
        console.log(rawFormEntries)

        await fetch(process.env.DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: rawFormEntries?.username,
              avatar_url: rawFormEntries?.dp || "https://i.imgur.com/mDKlggm.png",
              content: rawFormEntries?.message,
              embeds: [
                {
                  fields: [
                    {
                      name: "Email",
                      value: rawFormEntries?.email,
                      inline: true,
                    },
                    {
                      name: "Message Type",
                      value: rawFormEntries?.type,
                      inline: true,
                    },
                  ],
                },
              ],
            }),
          });
        
    } catch (error) {
        console.error(error.message)
    }
}