import bcrypt from 'bcryptjs'

const data = {
    users: [{
        name: 'Leo Toru',
        email: 'toru@exemplo.com',
        password: bcrypt.hashSync('123456', 8),
        isAdmin: true

    }],
    products: [{
        id: 1,
        name: 'Skol',
        price: 2.39,
        description: 'Puro malte que desce redondo',
        qtd: 15,
        image: 'https://hiperideal.vteximg.com.br/arquivos/ids/184532-1000-1000/469718.jpg?v=637308680280400000'
    }, {
        id: 2,
        name: 'Brahma',
        price: 2.79,
        description: 'A preferida da galera',
        qtd: 0,
        image: 'https://hiperideal.vteximg.com.br/arquivos/ids/184812-1000-1000/46959.jpg?v=637317923252170000'
    }, {
        id: 3,
        name: 'Antarctica',
        price: 2.69,
        description: 'Essa é a BOA',
        qtd: 102,
        image: 'https://savegnago.vteximg.com.br/arquivos/ids/278435-1000-1000/CERVEJA-ANTARCTICA-350ML-LATA.jpg?v=636262094928100000'
    }, {
        id: 4,
        name: 'Heineken',
        price: 3.39,
        description: 'A puro malte vinda da Holanda',
        qtd: 4,
        image: 'https://emporiokaminski.com.br/wp-content/uploads/2020/06/Cerveja-Heineken-350ml.jpg'
    },
    ],
}

export default data;