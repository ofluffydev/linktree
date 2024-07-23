import React from 'react';
import {Globe} from "lucide-react";

interface SocialProps {
    // All the available social links (All optional)
    facebook?: string;
    x?: string;
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
    youtube?: string;
    github?: string;
    website?: string;
    xbox?: string;
    playstation?: string;
    nintendo?: string;
    steam?: string;
    epic?: string;
    twitch?: string;
    spotify?: string;
    discord?: string;
    slack?: string;
    whatsapp?: string;
    telegram?: string;
    signal?: string;
    snapchat?: string;
    pinterest?: string;
    medium?: string;
    tumblr?: string;
    reddit?: string;
    hackernews?: string;
    producthunt?: string;
    dribbble?: string;
    behance?: string;
    patreon?: string;
    paypal?: string;
    cashapp?: string;
}

const SocialLink: React.FC<{ href: string; iconSrc: string; name: string }> = ({ href, iconSrc, name }) => (
    <div className="flex flex-col items-center group">
        <img alt={`${name} Logo`} height="32" width="32" src={iconSrc} className="mb-1" />
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white group-hover:text-purple-300 transition-colors duration-200"
        >
            {name}
        </a>
    </div>
);

function SocialLinks(props: SocialProps) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {props.facebook && <SocialLink href={props.facebook} iconSrc="https://cdn.simpleicons.org/facebook" name="Facebook" />}
            {props.x && <SocialLink href={props.x} iconSrc="https://cdn.simpleicons.org/x" name="X" />}
            {props.instagram && <SocialLink href={props.instagram} iconSrc="https://cdn.simpleicons.org/instagram" name="Instagram" />}
            {props.linkedin && <SocialLink href={props.linkedin} iconSrc="https://cdn.simpleicons.org/linkedin" name="LinkedIn" />}
            {props.tiktok && <SocialLink href={props.tiktok} iconSrc="https://cdn.simpleicons.org/tiktok" name="TikTok" />}
            {props.youtube && <SocialLink href={props.youtube} iconSrc="https://cdn.simpleicons.org/youtube" name="YouTube" />}
            {props.github && <SocialLink href={props.github} iconSrc="https://cdn.simpleicons.org/github" name="GitHub" />}
            {props.website && (
                <div className="flex flex-col items-center group">
                    <Globe size={32} className="mb-1" />
                    <a
                        href={props.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white group-hover:text-purple-300 transition-colors duration-200"
                    >
                        Website
                    </a>
                </div>
            )}
            {props.xbox && <SocialLink href={props.xbox} iconSrc="https://cdn.simpleicons.org/xbox" name="Xbox" />}
            {props.playstation && <SocialLink href={props.playstation} iconSrc="https://cdn.simpleicons.org/playstation" name="PlayStation" />}
            {props.nintendo && <SocialLink href={props.nintendo} iconSrc="https://cdn.simpleicons.org/nintendo" name="Nintendo" />}
            {props.steam && <SocialLink href={props.steam} iconSrc="https://cdn.simpleicons.org/steam" name="Steam" />}
            {props.epic && <SocialLink href={props.epic} iconSrc="https://cdn.simpleicons.org/epicgames" name="Epic Games" />}
            {props.twitch && <SocialLink href={props.twitch} iconSrc="https://cdn.simpleicons.org/twitch" name="Twitch" />}
            {props.spotify && <SocialLink href={props.spotify} iconSrc="https://cdn.simpleicons.org/spotify" name="Spotify" />}
            {props.discord && <SocialLink href={props.discord} iconSrc="https://cdn.simpleicons.org/discord" name="Discord" />}
            {props.slack && <SocialLink href={props.slack} iconSrc="https://cdn.simpleicons.org/slack" name="Slack" />}
            {props.whatsapp && <SocialLink href={props.whatsapp} iconSrc="https://cdn.simpleicons.org/whatsapp" name="WhatsApp" />}
            {props.telegram && <SocialLink href={props.telegram} iconSrc="https://cdn.simpleicons.org/telegram" name="Telegram" />}
            {props.signal && <SocialLink href={props.signal} iconSrc="https://cdn.simpleicons.org/signal" name="Signal" />}
            {props.snapchat && <SocialLink href={props.snapchat} iconSrc="https://cdn.simpleicons.org/snapchat" name="Snapchat" />}
            {props.pinterest && <SocialLink href={props.pinterest} iconSrc="https://cdn.simpleicons.org/pinterest" name="Pinterest" />}
            {props.medium && <SocialLink href={props.medium} iconSrc="https://cdn.simpleicons.org/medium" name="Medium" />}
            {props.tumblr && <SocialLink href={props.tumblr} iconSrc="https://cdn.simpleicons.org/tumblr" name="Tumblr" />}
            {props.reddit && <SocialLink href={props.reddit} iconSrc="https://cdn.simpleicons.org/reddit" name="Reddit" />}
            {props.hackernews && <SocialLink href={props.hackernews} iconSrc="https://cdn.simpleicons.org/hackernews" name="Hacker News" />}
            {props.producthunt && <SocialLink href={props.producthunt} iconSrc="https://cdn.simpleicons.org/producthunt" name="Product Hunt" />}
            {props.dribbble && <SocialLink href={props.dribbble} iconSrc="https://cdn.simpleicons.org/dribbble" name="Dribbble" />}
            {props.behance && <SocialLink href={props.behance} iconSrc="https://cdn.simpleicons.org/behance" name="Behance" />}
            {props.patreon && <SocialLink href={props.patreon} iconSrc="https://cdn.simpleicons.org/patreon" name="Patreon" />}
            {props.paypal && <SocialLink href={props.paypal} iconSrc="https://cdn.simpleicons.org/paypal" name="PayPal" />}
            {props.cashapp && <SocialLink href={props.cashapp} iconSrc="https://cdn.simpleicons.org/cashapp" name="Cash App" />}
        </div>
    );
}

export default SocialLinks;