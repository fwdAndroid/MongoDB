const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ZeoSoft', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Created")).catch((err) => console.log(err));

//A Mongoose  schema defines the sturcture of document, default vaues,validators
const playList = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String, // String is shorthand for {type: String}
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

//Moogoose Model provides an interface to the database for creating,quering,updating,deleting records 
const Playlist = new mongoose.model("Playlist", playList);

//Create A Document

// const createDocument = async() => {

//     try {
//         const reachPlayList = new Playlist({
//             name: "Node JS",
//             ctype: "Back End",
//             videos: 86,
//             author: "Fawad Kaleem",
//             active: false
//         });

//         const result = await reachPlayList.save();
//         console.log(result);

//     } catch (error) {
//         console.log(error);
//     }

// }
// createDocument();




/*Adding Multiple Documents*/

const multipleDocument = async() => {

        try {
            const nodePlayList = new Playlist({
                name: "Node JS",
                ctype: "Back End",
                videos: 86,
                author: "Fawad Kaleem",
                active: false
            });

            const reactNativePlayList = new Playlist({
                name: "React JS",
                ctype: "Front End",
                videos: 86,
                author: "Awais Kaleem",
                active: true
            });

            const javaPlayList = new Playlist({
                name: "JavaScript",
                ctype: "Front End & Back End",
                videos: 86,
                author: "Adeel Ahmed",
                active: false
            });

            const result = await Playlist.insertMany([nodePlayList, reactNativePlayList, javaPlayList]);
            console.log(result);

        } catch (error) {
            console.log(error);
        }

    }
    //multipleDocument();






/*Read Document
const getDocumentResult = async() => {
    try {
        const readResult = await Playlist.find({ active: false });
        console.log(readResult);
    } catch (error) {
        console.log(error);
    }

}

getDocumentResult();
*/




/*Read Document Through Comparision Operator
const getDocumentResult = async() => {
    try {
        const readResult = await Playlist.
        find({ videos: { $gt: 50 } }).select({ name: 1 });
        console.log(readResult);
    } catch (error) {
        console.log(error);
    }

}
*/




/*READ DOCUMENT USING LOGICAL OPERATOR
const getDocumentResult = async() => {
    try {
        const readResult = await Playlist.
        find({ $or: [{ ctype: "Front End" }, { author: "Awais Tariq" }] }).select({ name: 1 });
        console.log(readResult);
    } catch (error) {
        console.log(error);
    }
}
*/



/*READ DOCUMENT USING LOGICAL OPERATOR
const getDocumentResult = async() => {
    try {
        const readResult = await Playlist.
        find({ $or: [{ ctype: "Front End" }, { author: "Awais Tariq" }] }).select({ name: 1 });
        console.log(readResult);
    } catch (error) {
        console.log(error);
    }
}
*/



/*READ DOCUMENT USING Sorting & Counting
const getDocumentResult = async() => {
    try {
        const readResult = await Playlist.
        find({ $or: [{ ctype: "Back End" }] })
            .select({ name: 1 })
            .sort();
        //.countDocuments();
        console.log(readResult);
    } catch (error) {
        console.log(error);
    }
}
getDocumentResult();
*/


/*---UpDate Document
const updateDocument = async(_id) => {

    try {
        const result = await Playlist.findByIdAndUpdate({ _id }, {
            $set: {
                name: "Java Script ZeoSoft"
            }
        }, {
            'useFindAndModify': false
        });

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

updateDocument("605d60771ededd27c8f77eeb");
 */

const deleteDocument = async(_id) => {

    try {
        const result = await Playlist.deleteOne({ _id });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

deleteDocument("605d60771ededd27c8f77eeb");