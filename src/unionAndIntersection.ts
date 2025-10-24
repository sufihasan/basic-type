
// **** union and intersection


// union type --- |

type productId = string | number;  // product id type can both string and number

function getProductId(id: productId) {
    console.log(`Product id is ${id}`);
}

getProductId('abc123');
getProductId(123);


type User = {
    id: string;
    name: string;
}

type Admin = {
    isAdmin: boolean;
}

type AdminUser = User & Admin;

const admin: AdminUser = {
    id: 'abc123',
    name: 'Hasan',
    isAdmin: true

}


