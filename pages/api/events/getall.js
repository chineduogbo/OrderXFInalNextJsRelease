import dbConnect from '../../../lib/dbConnect'
import events from '../../../models/event.model'


export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const pets = await events.find({}, {
                    eventname
                        : 1, username
                        : 1, DateCreated
                        : 1, eventaddress
                        : 1,
                }) /* find all the data in our database */

                res.status(200).json(pets)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                //console.log(req)
                const body = req.body;

                // console.log(body)



                const pet = await events.create(
                    {
                        username: "Admin",
                        eventname: body.eventname,
                        active: true,
                        DateCreated: Date.now(),
                        userid: "62247cd61850c634bc05c104",
                        eventaddress: body.eventaddress
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


