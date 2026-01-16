fx_version 'cerulean'
game 'gta5'

loadscreen 'html/index.html'
loadscreen_manual_shutdown 'yes'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/assets/*'
}

client_script 'client.lua'
server_script 'server.lua'
