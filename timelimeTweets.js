const {TwitterApi} = require('twitter-api-v2');
const config = require('dotenv').config();
// const {sendToWhatsapp} = require('./whatsapp/index');

const exceptWords = ["murder","death"]
const user_ids = [{name:"@WilliamsRuto",id:"333935142",posted:false},{name:"@HonAdenDuale",id:"561133976",posted:false},{name:"@MikeSonko",id:"1462725421",posted:false},
    {name:"@kibeandy",id:"877150626911846402"},{name:"@MigunaMiguna",id:"407781903"},{name:"@scherargei",id:"474948207"},
    {mame:"@crazy_kennar",id:"898079458074263552"},{name:"@MohaJichoPevu",id:"154036419"},{name:"@NdindiNyoro",id:"301467105"},
    {name:"@susankihika",id:"1554189314"},{name:"@MillicentOmanga",id:"1005535676"},{name:"@kipmurkomen",id:"256136003"},
    {name:"@ledamalekina",id:"2466645955"},{name:"@KBonimtetezi",id:"3394123895"},{name:"@makaumutua",id:"45182880"},
    {name:"@edwinsifuna",id:"53923813"},{name:"@SABINACHEGE",id:"631041552"},{name:"@AtwoliDza",id:"941815235144503296"},
    {name:"@MusaliaMudavadi",id:"206087305"},{name:"@HonWetangula",id:"402607606"},{name:"@SenMutula",id:"710731850"},
    {name:"@DonaldBKipkorir",id:"76641627"},{name:"@KIMANIICHUNGWAH",id:"253173862"},{name:"@AbabuNamwamba",id:"352439708"},
    {name:"@HusseinMohamedg",id:"270831181"},{name:"@MamaRachelRuto",id:"1522471178"},{name:"@rigathi",id:"845269795033534466"},
    {name:"@HonOscarSudi",id:"3105961415"},{name:"@HonMoses_Kuria",id:"3924829823"},{name:"@nduyamuthama",id:"2906821744"},
    {name:"@DidmusWaBarasa",id:"955187853537005573"},{name:"@Aaroncheruiyot",id:"87679775"},{name:"@RailaOdinga",id:"300789811"},
    {name:"@OleItumbi",id:"68382599"},{name:"@ahmednasirlaw",id:"401579858"},{name:"@skmusyoka",id:"121041518"},
    {name:"@AnneWaiguru",id:"285690437"},{name:"@mamangilu",id:"788895528"},{name:"@OAmollo",id:"1089530654"},{name:"@NelsonHavi",id:"3460039877"},
    {name:"@WehliyeMohamed",id:"257905607"},{name:"@WanguiNgirici",id:"754927031117316097"},{name:"@Cate_Waruguru",id:"902909641994235904"},
    {name:"@WahomeHon",id:"883542601730838528"},{name:"@DCI_Kenya",id:"2534938274"},{name:"@KoinangeJeff",id:"237189703"},
    {name:"@LarryMadowo",id:"38671739"},{name:"@KenyaPower_Care",id:"147561402"},{name:"@LinusKaikai",id:"326113058"},
    {name:"@SakajaJohnson",id:"228580505"},{name:"@JunetMohamed",id:"1536500138"},{name:"@Cleophasmalala",id:"791305395331620864"},
    {name:"@honkabogo",id:"275081037"},{name:"@orengo_james",id:"789214836"},{name:"@GladysSholle",id:"330499474"},
    {name:"@KindikiKithure",id:"1265584961433853952"},{name:"@MarthaKarua",id:"119958687"},{name:"@ProfKibwana",id:"1479708565"},
    {name:"@EstherPassaris",id:"38699733"},{name:"@karennyamunbo",id:"747171843782643712"},{name:"@charlruto",id:"380324309"},
    {name:"@Mercymasai3",id:"1256975220759564293"},{name:"@MutahiNgunyi",id:"320316357"},{name:"@citizentvkenya",id:"70394965"},
    {name:"@EliudKipchoge",id:"2471739785"},{name:"@AlinurMohamed_",id:"924270027557269504"},{name:"@gabrieloguda",id:"1615205449"},
    {name:"@paulinenjoroge",id:"253211316"},{name:"@amerix",id:"34908371"},{name:"@MwendiaJnr",id:"1280200427997483009"},
    {name:"@DailyLoud",id:"452540168"},{name:"@DavidNdii",id:"715851056148791296"},{name:"@HonWangari",id:"1555984939"},
    {name:"@Lupita_Nyongo",id:"2155649270"},{name:"@SABINACHEGE",id:"631041552"},{name:"@AzziadNasenya",id:"@AzziadNasenya"},
    {name:"@BettyMKyallo",id:"82821779"},{name:"@flaqo411",id:"1184825255531077641"},{name:"@KenyaPower",id:"1485838501"},
    {name:"@CarenKibbett",id:"2783910437"},{name:"@RodgersKipembe",id:"1105007266850316288"},{name:"@bevalynekwambo3",id:"874003566284992514"},
    {name:"@tom_adwar",id:"1166752238838136833"},{name:"@hellenjeriKe",id:"1305353681446096896"},{name:"@MoiGideon",id:"1072907593"}];

const client = new TwitterApi({
    appKey: process.env.API_key,
    appSecret: process.env.API_Key_Secret,
    accessToken: process.env.Access_Token,
    accessSecret: process.env.Token_Secret 
})

const twitterClient = client.readWrite;


// getting tweets from prominent user_ids
async function getTweets(user){
        console.log(user)
        const currentTime = Date.now()
        const startTime = new Date(currentTime - 60*60*1000).toISOString()
        try{
            const timeline = await twitterClient.v2.userTimeline(`${user.id}`,
            {"tweet.fields":["public_metrics","created_at","in_reply_to_user_id"],
            start_time: `${startTime}` ,exclude:['replies','retweets']})
    
            // console.log("timeline", timeline)
            const data = JSON.stringify(timeline._realData.data)
            if(data){
                return(timeline._realData.data);
            }
        }catch(err){
            console.log(err)
            
        }
}

    // get prominate tweets 
    async function fameTweets(socket){
        let results = [{
            text: "We are determined to protect Kenya's reputation and heritage as an athletics powerhouse. We are ready to work together with athletes, their contacts and partners to confront the doping menace and protect the integrity of our champions. https://t.co/NLhX8oJ5N9",
            edit_history_tweet_ids: [ '1610939506227843072' ],
            public_metrics: {
              retweet_count: 19,
              reply_count: 10,
              like_count: 166,
              quote_count: 3
            },
            id: '1610939506227843072',
            created_at: '2023-01-05T10:01:22.000Z'
          }];
        for(let user of user_ids){
            try{
                console.log("waiting for results")
                    const tweets = await getTweets(user)
                    Object.assign( results, tweets )
                    console.log(tweets)
                }catch(err){
                    console.error(err)
                    // process.exit(1)
                }
            }
        if(results){
            for(const result of results){
                console.log(result)
                let replyCount = Number(result.public_metrics.reply_count);
                let likeCount = Number(result.public_metrics.like_count);
                let replyUserId = result.in_reply_to_user_id;
                if( replyCount >= 10 &&  likeCount > 50 && !replyUserId){

                    // replyToTweet(result.id);
                    // sendToWhatsapp(result)
                    console.log("sent results to browser")
                    socket.emit("fameTweet", result)
                }
            }
        }
    }
// fameTweets()

async function replyToTweet(id,socket){  
    try{
        // const clientID = await twitterClient.v1.uploadMedia("./images/IMG_20211218_182433 (1).jpg")
        const response = await twitterClient.v2.tweet({
            "media": {
                "media_ids": ["1609951670611415043","1609952075680714752","1609959273840377861","1609960944339193856"]},
            
            "text": "For a timeless painting or drawing as unique gift for loved one, contant 0714475702 from 3K",
                    "reply": {
                    "in_reply_to_tweet_id": `${id}`
                }
        })
        console.log(response)
        return('replied',{res:response.data.text,id})

    }catch(err){
        return("error while replying")
        console.log(err)
    }
}


module.exports = {fameTweets, replyToTweet}