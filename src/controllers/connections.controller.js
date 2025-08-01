const service = require('../services/connections.service');

exports.list = (req, res) => {
    const allConnections = service.list();
    res.json(allConnections);
};

exports.getById = (req, res) => {
    const connection = service.getById(Number(req.params.id));
    if (!connection) return res.status(404).json({ message: 'Not found' });
    res.json(connection);
};

exports.create = (req, res) => {
    const newConn = service.create(req.body);
    res.status(201).json(newConn);
};