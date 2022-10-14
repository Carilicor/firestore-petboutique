import {initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./serviceAccount.js";

initializeApp({
    credential: cert(serviceAccount)
})
const db = getFirestore()
//create
// db.collection('Customers').add({
//     name:'Alice',
//     phone: '3057658896',
//     email: 'alicor@icloud.com'
// })
// .then(doc => console.log('Customers:',doc.id))
// .catch(console.error)

//update

// db.collection('Customers')
// .doc('v1tazMmEttLuTresTGWj')
// .update({ name: 'Jack', phone: '7869543276', email:'jlic7r@icould.com' })
// .then()
// .catch(console.error)

//create
// db.collection('Pets').add({
//         name:'Joffrey',
//         breed: 'long hair cat',
//         color: 'orange'
//     })
//     .then(doc => console.log('Pets:',doc.id))
//     .catch(console.error)
// db.collection('Pets').add({
//         name:'Larry',
//         breed: 'siamese cat',
//         color: 'white'
//     })
//     .then(doc => console.log('Pets:',doc.id))
//     .catch(console.error)


// db.collection('Products').add({
//         name:'lavender smoother',
//         type: 'shampoo',
//         medicated: 'yes'
//     })
//     .then(doc => console.log('Products:',doc.id))
//     .catch(console.error)
// db.collection('Products').add({
//         name:'Pedigree',
//         type: 'food',
//         medicated: 'no'
//     })
//     .then(doc => console.log('Products:',doc.id))
//     .catch(console.error)

// update
// db.collection('Pets')
// .doc('6C3tdCbUVcZ2c4jbtd55')
// .update({ name: 'coal', breed: 'pitbull', color:'black' })
// .then()
// .catch(console.error)

db.collection('Products')
.doc('mPK1ZnUTcQAHMIqr7bqA')
.update({ name: 'Hills', type: 'Cat food', medicated:'yes' })
.then()
.catch(console.error)





