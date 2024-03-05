const { google } = require('googleapis');
const apikeys = require('./credentials.json');


export async function authorize() {
  const client = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    ['https://www.googleapis.com/auth/drive']
  );
  await client.authorize();
  return client;
}

export async function upload(authClient) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: 'v3', auth: authClient });
    const fileMetadata = {
      name: 'test.txt',
      parents: ["1Ad-8C0RBwq34dSZlsBK9XxjUGORBElxV"]
    };
    const media = {
      mimeType: 'text/plain',
      body: 'Hello World',
    };
    drive.files.create(
      {
        resource: fileMetadata,
        media: {
            body: fs.createReadStream('test.txt'),
            mimeType: 'text/plain'
        },
        fields: 'id',
      },
      (err, file) => {
        if (err) {
          reject(err);
        } else {
          resolve(file);
        }
      }
    );
  });
}
