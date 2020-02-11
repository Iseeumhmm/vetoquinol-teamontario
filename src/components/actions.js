import { attendeesRef } from './firebase'

const addClinic = newClinic =>  {
    console.log('sent')

  attendeesRef.push().set(newClinic);
};
 export default addClinic