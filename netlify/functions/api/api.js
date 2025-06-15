const { Client } = require("pg");
const nodemailer = require('nodemailer')

const connectionString = "postgresql://naira:PdEMGZ6iwv7hs5O5BZk6Zw@mellow-oyster-7121.jxf.gcp-europe-west3.cockroachlabs.cloud:26257/nairabeauty?sslmode=verify-full"

exports.handler = async function (event, context) {

    try {
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: '8fbb97001@smtp-brevo.com',
        pass: 'Bbw1rUYmvF8CqynG' // Not your real Gmail password!
      }
    })

    await transporter.sendMail({
      from: 'alesya.sheremet@gmail.com',
      to: 'alesya.sheremet@gmail.com',
      subject: `New message from alesya`,
      text: 'this is a test',
      replyTo: 'alesya.sheremet@gmail.com'
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello World',
      }),
    };
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to send email',
      }),
    };
  }

    // Parse query parameters (if needed)
    /*
    const { name } = event.queryStringParameters || {};
    const client = new Client("postgresql://alesya:Yzmi6oIGcrF9Ptb18Z3VtA@bog-pixie-6454.7tc.aws-eu-central-1.cockroachlabs.cloud:26257/MuseumsDb?sslmode=verify-full");
    var results = [];
    const query = "WITH RankedRows AS (SELECT objectinventorynumber, objectcreator, objecttitle, objecttype, objectcreationdate, objectimage, ROW_NUMBER() OVER (PARTITION BY objectcreator ORDER BY objectcreator DESC) AS rank  FROM public.rijkscollection WHERE objectcreator LIKE 'R%' AND objectimage IS NOT NULL AND objecttype NOT LIKE '%afdruk%' AND objecttype NOT LIKE '%foto%' AND objecttype NOT LIKE '%prent%' AND objecttype NOT LIKE '%kaart%' AND objecttype NOT LIKE '%pagina%' AND objecttype NOT LIKE '%brief%' AND objecttype NOT LIKE '%carte-de-visite%' AND objecttype NOT LIKE '%boek%') SELECT  objectinventorynumber, objectcreator, objecttitle, objecttype, objectcreationdate, objectimage, rank FROM RankedRows WHERE rank <= 3 ORDER BY objectcreator, rank";
      await client.connect();
      try {
        results = await client.query(query);
      } catch (err) {
        console.error("error executing query:", err);
      } finally {
        client.end();
      }
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello ${name || 'World'}!`,
        rows: results
      }),
    };*/
  };