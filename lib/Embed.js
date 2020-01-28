"use strict";
/* eslint-disable */

const Color = {
    DEFAULT: 0x000000,
    WHITE: 0xFFFFFF,
    AQUA: 0x1ABC9C,
    GREEN: 0x2ECC71,
    BLUE: 0x3498DB,
    YELLOW: 0xFFFF00,
    PURPLE: 0x9B59B6,
    LUMINOUS_VIVID_PINK: 0xE91E63,
    GOLD: 0xF1C40F,
    ORANGE: 0xE67E22,
    RED: 0xE74C3C,
    GREY: 0x95A5A6,
    NAVY: 0x34495E,
    DARK_AQUA: 0x11806A,
    DARK_GREEN: 0x1F8B4C,
    DARK_BLUE: 0x206694,
    DARK_PURPLE: 0x71368A,
    DARK_VIVID_PINK: 0xAD1457,
    DARK_GOLD: 0xC27C0E,
    DARK_ORANGE: 0xA84300,
    DARK_RED: 0x992D22,
    DARK_GREY: 0x979C9F,
    DARKER_GREY: 0x7F8C8D,
    LIGHT_GREY: 0xBCC0C0,
    DARK_NAVY: 0x2C3E50,
    BLURPLE: 0x7289DA,
    GREYPLE: 0x99AAB5,
    DARK_BUT_NOT_BLACK: 0x2C2F33,
    NOT_QUITE_BLACK: 0x23272A,
    RANDOM: Math.floor(Math.random() * (0xFFFFFF + 1)),
    INVISIBLE: 3553599
};

class Embed {

    /**
     * @constructor
     * @param {String} [type="rich"] embed type
     */

    constructor(type) {
        this.embed = {
            title: null,
            url: null,
            author: null,
            color: null,
            description: null,
            thumbnail: null,
            fields: [],
            image: null,
            footer: null,
            timestamp: null,
            type: type ? type : "rich"
        };
    }

    /**
     * Sets the title of the embed.
     * @param {string} title The title
     * @returns {DiscordEmbed}
     */
    setTitle(title) {
        if (!title) throw new Error("Title shouldn't be empty!");
        if (title.length > 256) throw new Error("Title should be less than 256 characters!");
        this.embed.title = title;
        return this;
    }

    /**
     * Sets the URL of the embed.
     * @param {string}
     * @returns {DiscordEmbed}
     */
    setURL(url) {
        if (!url) throw new Error("URL value shouldn't be empty!");
        this.embed.url = url;
        return this;
    }

    /**
     * Sets the description of the embed.
     * @param {string} description The description
     * @returns {DiscordEmbed}
     */
    setDescription(description) {
        if (!description) throw new Error("Description shouldn't be empty!");
        if (description.length > 2048) throw new Error("Description value should be less than 2048 characters!");
        this.embed.description = description;
        return this;
    }

    /**
     * Sets the image of the embed.
     * @param {string} imageURL The URL of the image
     * @returns {DiscordEmbed}
     */
    setImage(imageURL) {
        if (!imageURL) throw new Error("Image url shouldn't be empty!");
        this.embed.image = {
            url: imageURL
        };
        return this;
    }

    /**
     * Sets the thumbnail of the embed.
     * @param {string} thumbnailURL The URL of the thumbnail
     * @returns {DiscordEmbed}
     */
    setThumbnail(thumbnailURL) {
        if (!thumbnailURL) throw new Error("Thumbnail url shouldn't be empty!");
        this.embed.thumbnail = {
            url: thumbnailURL
        };
        return this;
    }

    /**
     * Sets the footer of the embed.
     * @param {string} text The text of the footer
     * @param {string} iconURL The icon URL of the footer
     * @returns {DiscordEmbed}
     */
    setFooter(text, iconURL) {
        if (!text) throw new Error("Footer text shouldn't be empty!");
        if (text.length > 2048) throw new Error("Footer text should be less than 2048 characters!");
        if (!iconURL) iconURL = null;
        this.embed.footer = {
            text: text,
            icon_url: iconURL
        };
        return this;
    }

    /**
     * Sets the timestamp of the embed.
     * @param {string} timestamp Timestamp of the footer
     * @returns {DiscordEmbed}
     */
    setTimestamp(timestamp) {
        if (!timestamp) timestamp = new Date();
        this.embed.timestamp = timestamp;
        return this;
    }

    /**
     * Sets the author of the embed.
     * @param {string} name The name of the author
     * @param {string} iconURL The icon URL of the author
     * @param {string} URL Author URL
     * @returns {DiscordEmbed}
     */
    setAuthor(name, iconURL, URL) {
        if (!name) throw new Error("Author name shouldn't be empty!");
        if (name.length > 256) throw new Error("Author name value should be less than 256 characters!");
        if (!iconURL) iconURL = null;
        if (!URL) URL = null
        this.embed.author = {
            name: name,
            icon_url: iconURL,
            url: URL
        };
        return this;
    }

    /**
     * Sets the color of the embed.
     * Can be a number, hex string, an RGB array like:
     * ```js
     * [255, 0, 255] // purple
     * ```
     * or one of the following strings:
     * - `DEFAULT`
     * - `WHITE`
     * - `AQUA`
     * - `GREEN`
     * - `BLUE`
     * - `YELLOW`
     * - `PURPLE`
     * - `LUMINOUS_VIVID_PINK`
     * - `GOLD`
     * - `ORANGE`
     * - `RED`
     * - `GREY`
     * - `DARKER_GREY`
     * - `NAVY`
     * - `DARK_AQUA`
     * - `DARK_GREEN`
     * - `DARK_BLUE`
     * - `DARK_PURPLE`
     * - `DARK_VIVID_PINK`
     * - `DARK_GOLD`
     * - `DARK_ORANGE`
     * - `DARK_RED`
     * - `DARK_GREY`
     * - `LIGHT_GREY`
     * - `DARK_NAVY`
     * - `RANDOM`
     * - `INVISIBLE`
     * @typedef {string|number|number[]} ColorResolvable
     * @returns {DiscordEmbed}
     */


    setColor(color) {
        if (!color) color = 0;
        if (typeof color === "string") {
            if (color.startsWith("#")) color = parseInt(color.replace("#", ""), 16);
            else color = Color[color];
        } else if (Array.isArray(color)) {
            color = (color[0] << 16) + (color[1] << 8) + color[2];
        }

        this.embed.color = color;
        return this;
    }

    /**
     * Adds a field to the embed.
     * @param {string} name The name of the field
     * @param {string} value The value of the field
     * @param {boolean} [inline=false] Set the field to display inline
     * @returns {DiscordEmbed}
     */
    addField(name, value, inline = false) {
        if (!name) throw new Error("Embed field name shouldn't be empty!");
        if (name.length > 256) throw new Error("Embed field value should be less than 256 characters!");
        if (value.length > 1024) throw new Error("Embed field value should be less than 1024 characters!");
        if (this.embed.fields.length > 25) throw new Error("Embed fields should be less than 25!");
        this.embed.fields.push({ name, value, inline: inline ? true : false });
        return this;
    }

    /**
     * Adds a blank field to the embed.
     * @param {boolean} [inline=false] Set the field to display inline
     * @returns {DiscordEmbed}
     */
    addBlankField(inline = false) {
        if (this.embed.fields.length > 25) throw new Error("Embed fields should be less than 25!");
        return this.addField("\u200B", "\u200B", inline);
    }
}

module.exports = Embed;
