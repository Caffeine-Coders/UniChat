import {upload, authorize} from './qpp';

export default async function handler(req, res) {
  try {
    const file = await authorize().then(upload);
    console.log('File Id: ', file.id);
    res.status(200).json({fileId: file.id});
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({error: err.message});
  }
}