import { NextResponse } from "next/server";

export async function POST(request) {
    const message = await request.json();
    // console.log(message);
    // const response = await fetch(
    //    `https://ikit:De99McEh5uNsdBVCyt@gpt-proxy.ualbany.org/openai`,
    //     {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             message: message
    //         }),
    //     }
    // );

    return NextResponse.json({ data: "Cricket is a bat-and-ball game played between two teams, each consisting of eleven players. It is popular in many countries, particularly in the United Kingdom, India, Australia, Pakistan, South Africa, and the West Indies, among others. The game is played on a circular or oval-shaped field, typically with a grass surface. At the center of the field is a rectangular strip known as the pitch, where most of the action takes place. The objective of the game is for one team to score more runs than the other team. The main components of cricket include: Batting: One team bats while the other team bowls and fields. The batting team sends two players at a time to bat in the middle of the pitch. The batsmen aim to score runs by hitting the ball and running between the two ends of the pitch, while the fielding team tries to dismiss them by getting them out. Bowling: The bowling team's objective is to dismiss the batsmen and limit the number of runs scored by bowling the ball towards the batsman's wicket. Bowlers can deliver the ball using various techniques, including fast bowling, spin bowling, and medium pace. Fielding: The fielding team aims to prevent the batting team from scoring runs by fielding the ball and attempting to dismiss batsmen through catches, run-outs, or stumping. Scoring: Runs are scored by the batting team when the batsmen hit the ball and successfully run between the wickets. If the ball reaches the boundary without being touched by a fielder, the batting team is awarded four runs (a boundary). If the batsman hits the ball over the boundary without it touching the ground, they score six runs (a six). Dismissals: Batsmen can be dismissed in various ways, including being caught out, bowled, lbw (leg before wicket), run out, stumped, or hit wicket. Cricket matches can take various forms, including Test matches, One Day Internationals (ODIs), and Twenty20 (T20) matches, each with different rules and durations."});
}