import { LineModel } from '../models/line.model.js'

export const lineController = {
    
    create: async (req, res) => {
        const {name, sumPrice, sumBudget, movementId} = req.body;
        const id = req.user.id;
        const budgetUtility = sumPrice - sumBudget
        const budgetMargin = (budgetUtility / sumPrice) * 100

        try {
            const project = await LineModel.create({
                name,
                creator: {
                    user: id
                },
                movementId,
                numbers: {
                    sumPrice: {
                        value: `$ ${sumPrice}`,
                        number: sumPrice
                    },
                    sumBudget: {
                        value: `$ ${sumBudget}`,
                        number: sumBudget
                    },
                    budgetUtility: {
                        value: `$ ${budgetUtility}`,
                        number: budgetUtility
                    },
                    budgetMargin: {
                        value: `${budgetMargin} %`,
                        number: budgetMargin
                    }
                }
            })
            return res.status(201).json({
                ok: true,
                project
            })
        } catch (error) {
            throw new Error(error)
        }
    },

    getLines: async (req, res) => {
        const movementId = req.params.id

        try {
            const lines = await LineModel.find({
                movementId
            })

            if (lines.length === 0) {
                return res.status(400).json({
                    ok: false,
                    message: 'No se ha creado ninguna linea en este proyecto'
                })
            }

            return res.status(200).json({
                ok: true,
                lines
            })
        } catch (error) {
            throw new Error(error)
        }
    },

    deleteLines: async (req, res) => {
        try {
            const {ids} = req.body
            if (!Array.isArray(ids) || ids.length === 0) {
                return res.status(400).json({ error: 'Se requiere un array de IDs válido' });
              }

            await LineModel.deleteMany({ _id: {$in: ids} })
            return res.status(200).json({
                message: 'Elementos eliminados'
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}