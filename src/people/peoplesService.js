

var peopleModel = require('./peoplesModel');

// module.exports.createPeopleDBService = async (peopleDetails) => {
//     console.log('this is called', peopleDetails);
//     try {
//         var peopleModelData = new peopleModel(peopleDetails);
//         const savedDoc = await peopleModelData.save(); // Save the document
//         console.log('Document saved:', savedDoc);
//         return savedDoc; // Return the saved document or true
//     } catch(err) {
//         console.log('Error:', err);
//         return null; // Indicate failure by returning null
//     }
// };








var peopleModel = require('./peoplesModel');

module.exports.createPeopleDBService = async (peopleDetails) => {
    console.log('This is called:', peopleDetails);
    try {
        var peopleModelData = new peopleModel(peopleDetails);
        const savedDoc = await peopleModelData.save(); 
        console.log('Document saved:', savedDoc);
        return { status: 200, msg: "Document saved successfully", data: savedDoc }; 
    } catch(err) {
        console.log('Error:', err);
        if (err.name === 'ValidationError') {
            
            return { status: 400, msg: "Validation error", error: err }; 
        }
        return { status: 500, msg: "Server error", error: err }; 
    }
};


// for login

module.exports.loginpeopleDBService = async (peopleDetails) => {
    try {
        const result = await peopleModel.findOne({ email: peopleDetails.email });
        
        if (result) {
           
            if (result.password === peopleDetails.password) {
                return { status: 200, msg: "People validated successfully" };
            } else {
                return { status: 401, msg: "Invalid credentials" };
            }
        } else {
            return { status: 401, msg: "User not found" }; 
        }
    } catch (error) {
        console.error('Error during login:', error);
        throw { status: 500, msg: "Server error" }; 
    }
};















































// var peopleModel = require('./peoplesModel');

// module.exports.createPeopleDBService = (peopleDetails) => {


//    return new Promise(function myFn(resolve, reject) {

//        var peopleModelData = new peopleModel();

//        peopleModelData.firstname = peopleDetails.firstname;
//        peopleModelData.lastname = peopleDetails.lastname;
//        peopleModelData.email = peopleDetails.email;
//        peopleModelData.password = peopleDetails.password;

//        peopleModelData.save(function resultHandle(error, result) {

//            if (error) {
//                reject(false);
//            } else {
//                resolve(true);
//            }
//        });

//    });

// }

























  // return new Promise(function (resolve, reject) {
    //     var peopleModelData = new peopleModel();
    //     // peopleModelData.firstname = peopleDetails.firstname;
    //     // peopleModelData.lastname = peopleDetails.lastname;
    //     // peopleModelData.email = peopleDetails.email;
    //     // peopleModelData.password = peopleDepeopletails.password; // No encryption
    //     // peopleModelData.save(function (error, result) {
    //     //     if (error) {
    //     //         reject(error);
    //     //     } else {
    //     //         resolve(result);
    //     //     }
    //     // });
    //     // async function peopleModelData(data) {
    //     //     const doc = new YourModel(data);
    //     //     try {
    //     //         const savedDoc = await doc.save();
    //     //         console.log('Document saved:', savedDoc);
    //     //     } catch (error) {
    //     //         console.error('Error saving document:', error);
    //     //     }
    //     // }
    // });
