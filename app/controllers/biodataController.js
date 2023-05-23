const db = require("../models")

const Biodata = db.biodata
const Op = db.Sequelize.Op

const create = (req, res) => {
  if (!req.body.nama) {
    res.status(400).send({
      message: "Content cannot be empty!",
    })
    return
  }

  const biodata = {
    nama: req.body.nama,
    tempat_lahir: req.body.tempat_lahir,
    tanggal_lahir: req.body.tanggal_lahir,
    alamat: req.body.alamat,
  }

  Biodata.create(biodata)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: "Gagal menambahkan data." || err.message,
      })
    })
}

const findAll = (req, res) => {
  Biodata.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while fetching books",
      })
    })
}

const findOne = (req, res) => {
  const id = req.params.id
  Biodata.findOne({
    where: {
      id: id,
    },
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while finding book",
      })
    })
}

const update = (req, res) => {
  const id = req.params.id

  const biodata = {
    nama: req.body.nama,
    tempat_lahir: req.body.tempat_lahir,
    tanggal_lahir: req.body.tanggal_lahir,
    alamat: req.body.alamat,
  }

  Biodata.update(biodata, {
    where: {
      id: id,
    },
  })
    .then(res.send({ message: "Data berhasil diupdate." }))
    .catch((err) => {
      res.status(500).send({
        message: "Data failed to update." || err.message,
      })
    })
}

const deleteById = (req, res) => {
  const id = req.params.id

  Biodata.destroy({
    where: {
      id: id,
    },
  })
    .then(
      res.send({
        message: "Data has been deleted with id = " + id,
      })
    )
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data with id = " + id || err.message,
      })
    })
}

module.exports = { create, findAll, findOne, update, deleteById }
