import {atom} from 'recoil';

const userAtom = atom({
    key: "userAtom",
    default: JSON.parse(localStorage.getItem('user_info'))

})

export default userAtom