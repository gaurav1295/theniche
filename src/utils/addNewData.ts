// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // Read JSON file
//       const filePath = path.join(process.cwd(), 'data.json');
//       const jsonData = fs.readFileSync(filePath, 'utf-8');
//       const data = JSON.parse(jsonData);

//       // Add new entries
//       const newEntry = { /* Your new entry data */ };
//       data.orderAndReview.push(newEntry);

//       // Convert object back to JSON
//       const updatedJsonData = JSON.stringify(data, null, 2);

//       // Write updated JSON to file
//       fs.writeFileSync(filePath, updatedJsonData);

//       res.status(200).json({ message: 'Data updated successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error updating data' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
