import cheerio from 'cheerio';
import request from 'request';
import React from 'react';



export default () => new Promise((resolve, reject) => {
    
    console.log("Retrieving Men's Journal Health and Fitness Board:")

    request("https://cors-anywhere.herokuapp.com/https://www.mensjournal.com/health-fitness/", function(error, response, html) {
        if (error) reject(error);
        var $ = cheerio.load(html);

        var results = [];

        $("div.vertical-feed-article-link-container").each(function(i, element) {

            var title = $(element).text();

            var link = $(element).children().attr("href");

            var img = $(element).find("img").attr("src");
            results.push({
                title: title,
                link: link,
                img: img,
            });
        });

        resolve(results);
        
    });

})