import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("mysql://root:1234@localhost:3306/exemplo_sequelize");

// ====

const user = sequelize.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

// ====

const criarUsuario = async () => {
    try {
        await sequelize.sync();
        console.log("O modelo de usuário está sincronizado");
        const novoUsuario = await user.create({ nome: "Gabi", senha: "1234" });
        console.log(`Usuario criado: ${novoUsuario.nome}`);
    } catch (err) {
        console.error(`Ocorreu um erro para sincronizar o modelo de usuario: ${err}`)
    }
}
criarUsuario()