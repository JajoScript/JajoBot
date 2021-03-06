// Importación de dependencias.
const mongoose = require("mongoose");
const {RichEmbed} = require("discord.js");

// Importación del modelo.
const Bip = require("../models/bips.js");

// Creacion del comando.
module.exports = (client, message, arguments) => {
    // Search
    Bip.findOne({
        userID : message.author.id
    }, (error, schema) => {
        if(error){
            console.log(`[ERROR] ${error}`);
        }
        
        if(schema.bip.length > 0){
            
            const bipsEmbed = new RichEmbed()
                .setColor("BLUE")
                .setTitle(":credit_card: Mis tarjetas:")
                .addField("Tarjetas: ", schema.bip)

            message.channel.send(bipsEmbed);
        }
        else if(!schema || schema.bip.length <= 0){
            message.reply("Usted no tiene tarjetas registradas!");
            message.reply("Para tener tarjetas registradas usar el comando $bip");
        }

    })
};