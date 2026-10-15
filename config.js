// config.js - ESM Version
import dotenv from 'dotenv';
dotenv.config();

const config = {
    // MongoDB Configuration (only this is from process.env)
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://jawadmd:irfanmd@cluster0.cqcxhti.mongodb.net/?appName=Cluster0',
    
    // Fixed Database Name
    DB_NAME: process.env.DB_NAME || 'jawadm',
    
    // Collections Configuration
    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },
    
    // Plugin Repository URL
    PLUGIN_REPO_URL: 'https://github.com/aaqil0009/-/archive/refs/heads/main.zip',
    
    // Status React Emojis
    STATUS_REACT_EMOJIS: ['🌟', '✨', '🔥', '⚡', '💥', '🎯'],
    
    // Channel React Emojis
    CHANNEL_REACT_EMOJIS: ['🚀', '💥', '⚡', '👑', '🥇', '🔥', '💎', '🌟', '🎯', '💫', '✨'],
    
    // Bot Configuration
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'false',
    MENTION_REPLY: 'false',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '3.0.0 Bᴇᴛᴀ',
    DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘼𝘼𝙌𝙄𝙇 𝙈𝘿🏴*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_EDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: '𝘼𝘼𝙌𝙄𝙇 𝙈𝘿🏴',
    ANTI_LINK: 'true',
    ANTI_STATUS: 'false',
    WELCOME: 'false',
    GOODBYE: 'false',
    WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
    GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*Call Rejected Automatically 📵*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    OWNER_EMOJIS: ['⚡', '👑', '🔥', '💎', '🎯'],
    REACT_EMOJIS: ['🔥', '⚡', '💫', '✨', '🌟', '👑', '💎', '💥', '🥇', '🎯', '🚀', '⭐', '🛡️', '⚔️', '🪄', '🏆', '🔮', '🧿', '🍀', '🌀'], 
    LIKE_EMOJIS: ['🔥', '👍', '⚡', '😎', '👑'],
    
    // Bot Identity
    BOT_NAME: '𝘼𝘼𝙌𝙄𝙇 𝙈𝘿🏴',
    OWNER_NAME: '𝘼𝘼𝙌𝙄𝙇 𝙆𝙃𝘼𝙉',
    OWNER_NUMBER: '923143177636',
    DEV: '923143177636',
    IK_IMAGE_PATH: './lib/ahmadmd.jpg',
    BOT_IMAGE: 'https://files.catbox.moe/utq5vt.jpg',
    
    // Newsletter Configuration
    NEWSLETTER_JID: '120363426472060176@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',  
    
    // System Configuration
    MAX_RETRIES: 3,
    OTP_EXPIRY: 300000,
    ADMIN_LIST_PATH: './admin.json',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029Vb8HaRgH5JM63v05741a',
    BANNED: [],
    SUDO: ["43233795166283@lid", "178662821380156@lid", "923027137877@s.whatsapp.net", "923221540695@s.whatsapp.net", "923147385565@s.whatsapp.net", "923035277944@s.whatsapp.net", "923259158117@s.whatsapp.net", "923437385525@s.whatsapp.net"],
    
    // Default Settings Template
    DEFAULT_SETTINGS: {
        // Status & View Settings
        AUTO_VIEW_STATUS: 'true',
        AUTO_LIKE_STATUS: 'false',
        MENTION_REPLY: 'false',
        AUTO_STATUS_SEEN: 'true',
        READ_MESSAGE: 'false',
        
        // Auto Actions
        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        
        // Anti Features
        ANTI_DELETE: 'false',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_EDIT: 'false',
        ANTI_EDIT_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'true',
        ANTI_STATUS: 'false',
        
        // Group Events
        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',
        
        // Message Templates
        WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
        GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
        REJECT_MSG: '*Call Rejected Automatically 📵*',
        
        // Bot Identity
        VERSION: '7.0.0 Bᴇᴛᴀ',
        OWNER_NAME: '𝘼𝘼𝙌𝙄𝙇 𝙆𝙃𝘼𝙉',
        OWNER_NUMBER: '923143177636',
        DEV: '923143177636',
        DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘼𝘼𝙌𝙄𝙇 𝙈𝘿🏴*',
        STICKER_NAME: '𝘼𝘼𝙌𝙄𝙇 𝙈𝘿🏴',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: '𝘼𝘼𝙌𝙄𝙇 𝙈𝘿🏴',
        BOT_IMAGE: 'https://files.catbox.moe/utq5vt.jpg',
        
        // Emoji Lists
        STATUS_REACT_EMOJIS: ['🌟', '✨', '🔥', '⚡', '💥', '🎯'],
        CHANNEL_REACT_EMOJIS: ['🚀', '💥', '⚡', '👑', '🥇', '🔥', '💎', '🌟', '🎯', '💫', '✨'],
        REACT_EMOJIS: ['🔥', '⚡', '💫', '✨', '🌟', '👑', '💎', '💥', '🥇', '🎯', '🚀', '⭐', '🛡️', '⚔️', '🪄', '🏆', '🔮', '🧿', '🍀', '🌀'],
        OWNER_EMOJIS: ['⚡', '👑', '🔥', '💎', '🎯'],
        LIKE_EMOJIS: ['🔥', '👍', '⚡', '😎', '👑'],
        
        // Lists
        BANNED: [],
        SUDO: ["43233795166283@lid", "178662821380156@lid", "923027137877@s.whatsapp.net", "923221540695@s.whatsapp.net", "923147385565@s.whatsapp.net", "923035277944@s.whatsapp.net", "923259158117@s.whatsapp.net", "923437385525@s.whatsapp.net"]
    }
};

export default config;
