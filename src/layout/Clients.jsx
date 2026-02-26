import React from "react";
import aws from '../design/brandsAws.png';
import hooli from '../design/brandsHooli.png';
import lyft from '../design/brandsLyft.png';
import piedpiperhat from '../design/brandsPiedpiperhat.png';
import redditAlien from '../design/brandsReddit-alien.png';
import stripe from '../design/brandsStripe.png';

const clients = [
    {name: 'Hooli', logo : hooli, url: 'www.hoolisoftware.com'},
    {name: 'Lyft', logo : lyft, url: 'www.lyft.com'},
    {name: 'PiedPiperHat', logo : piedpiperhat, url: 'www.piedpiperhat.com'},
    {name: 'Stripe', logo : stripe, url: 'www.stripe.com'},
    {name: 'Amazon', logo :aws, url: 'www.amazon.com'},
    {name: 'Reddit', logo : redditAlien, url: 'www.reddit.com'}
];

function Clients() {
    return (
        <div class='flex flex-col w-[400px] h-[952px] my-[50px] gap-[60px] items-center
        [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:w-[920px]
        [@media(min-width:1024px)]:h-[100px] [6@media(min-width:1024px)]:ml-[50px]'>
            {clients.map((client) => (
                <a key={client.name} href={client.url} target="_blank" rel="noopener noreferrer">
                    <img src={client.logo} alt={`${client.name} logo`}/>
                </a>
            ))}           
        </div>
    );
};

export default Clients;