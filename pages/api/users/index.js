import dbConnect from '../../../lib/dbConnect'
import Users from '../../../models/user.model'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const pets = await Users.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: pets })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        //console.log(req)
        const body = req.body;

        //console.log(body)
        const pet = await Users.create(
          {
            username: body.username,
            password: body.password,
            active: true,
            lastlogin: Date.now(),
            FullName: body.FullName,
            drinklimit: "0",
            FavouriteBrand: "",
            PhoneNumber: body.PhoneNumber
          }
          // {
          //   username: "Admin",
          //   password: "1234567",
          //   active: true,
          //   lastlogin: Date.now(),
          //   FullName: "admin",
          //   drinklimit: "0",
          //   FavouriteBrand: "",
          //   PhoneNumber: "07032331974"
          // }
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: pet })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
