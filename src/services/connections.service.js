const connections = [
    { id: 1, name: 'Eduardo' },
    { id: 2, name: 'Alice' }
];

exports.list = () => connections;

exports.getById = (id) => connections.find(c => c.id === id);

exports.create = (data) => {
    const newConn = { id: connections.length + 1, ...data };
    connections.push(newConn);
    return newConn;
};
