
// step-1: create an user interface
interface UserProfile {
    id: number;
    userName: string;
    email: string;
}

// step2: create an author interface
interface Author extends UserProfile {
    bio: string;
    posts: string[]; // const s: string[] = ['1', '2', '3']
}

// step3 define user status using type
type status = 'active' | 'inactive' | 'banned';


// create an author object

const author1: Author = {
    id: 1,
    userName: 'kamal',
    email: "kala@gamil.com",
    bio: 'I am a full stack developer',
    posts: ['post1', 'post2', 'post3']
}

// step5 make account status
const accountStatus: status = 'active';



